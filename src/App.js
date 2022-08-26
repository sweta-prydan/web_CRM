import Login from "./Pages/Login/login";
import { SignUp } from "./Pages/SignUp/signUp";
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="/signup"  element={<SignUp/>}>
      </Route>

    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
