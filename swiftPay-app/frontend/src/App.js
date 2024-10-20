import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import { Signin } from './pages/signin';
import { Signup } from './pages/signup';

function App() {
  return (
    <div>
      <BrowserRouter>
    
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
