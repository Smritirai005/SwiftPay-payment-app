const express=require("express");
const {authMiddleware}=require("../middleware");
const {Account}=require("../db")
const router=express.Router();

router.get("/balance",authMiddleware,async(req,res)=>{
    const account=await Account.findOne({
        userId: req.userId
    })
    res.json({
        balance:account.balance
    })
})
router.post("/transfer",authMiddleware,async(req,res)=>{
    try {
        const account = await Account.findOne({ userId: req.userId });

        if (!account) {
            return res.status(404).json({ message: "Account not found" });
        }

        res.json({ balance: account.balance });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Route to transfer money between accounts
router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    try {
        session.startTransaction();
        const { amount, to } = req.body;

        // Fetch the account of the sender
        const account = await Account.findOne({ userId: req.userId }).session(session);

        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Insufficient balance" });
        }

        // Fetch the account of the recipient
        const toAccount = await Account.findOne({ userId: to }).session(session);

        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid account" });
        }

        // Perform the transfer: deduct from sender, add to recipient
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        // Commit the transaction
        await session.commitTransaction();
        res.json({ message: "Transfer successful" });

    } catch (error) {
        await session.abortTransaction();
        res.status(500).json({ message: "Transaction failed", error });
    } finally {
        session.endSession();
    }
});


module.exports=router;