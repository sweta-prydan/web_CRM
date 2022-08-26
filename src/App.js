import Login from "./Pages/Login/login";
import { SignUp } from "./Pages/SignUp/signUp";
import  VerifyOtp  from "./Pages/VerifyOtp/verifyOtp";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verifyOtp" element={<VerifyOtp />}>
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
