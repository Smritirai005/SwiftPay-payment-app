import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { Signin } from './pages/signin';
import { Signup } from './pages/signup';
import Dashboard from './pages/dashboard';
import Payment from './pages/payment';

function App() {
  return (
    <div>
      <BrowserRouter>
    
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<Payment />} />

        
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
