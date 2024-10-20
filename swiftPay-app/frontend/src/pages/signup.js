import { useState } from "react"
import { BottomWarning} from "../components/BottonWarning"
import { Button } from "../components/Button"
import { Heading} from "../components/Heading"
import { InputBox } from "../components/InputField"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"

export const Signup = () => {
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");


    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <input onChange={e=>{
          setFirstName(e.target.value)

        }}/>

        <InputBox onChange={e=>{
          setFirstName(e.target.value)

        }} placeholder="first name" label={"First Name"} />
        <InputBox onChange={e=>{
          setLastName(e.target.value)

        }}
        placeholder="last name" label={"Last Name"} />
        <InputBox onChange={e=>{
          setUserName(e.target.value)

        }}
        placeholder="abc@gmail.com" label={"Email"} />
        <InputBox onChange={e=>{
          setPassword(e.target.value)

        }}
        placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={()=>{
            axios.post("http://localhost:3000/api/v1/user/signup",{
              userName,
              firstName,
              lastName,
              password
            })

          }}
            label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}