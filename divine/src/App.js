import React, {useState} from "react"
import Login from "./components/First/Login";
import Signup from './components/First/Signup';
import Account from './components/First/Account';
import Welcome from "./components/First/Welcome";

import Navbar from "./components/Navbar";
import Explore from './pages/explore';
import Ask from './pages/ask';
import Connect from './pages/connect';


import { Route, Routes, Switch } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  const [emailApp, setEmailApp] = useState ("")

  return (
    <div>
      
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route  path='/signup' element={<Signup setEmailApp={setEmailApp} />} />
            <Route  path="/welcome" element ={<Welcome emailApp={emailApp}/>}/>



          <Route path='/explore' element={
            <ProtectedRoute>
              <Navbar />
              <Explore />
          </ProtectedRoute>}/>

          <Route path='/ask' element={
            <ProtectedRoute>
              <Navbar />
              <Ask />
          </ProtectedRoute>}/>

          <Route path='/connect' element={
            <ProtectedRoute>
              <Navbar />
              <Connect />
          </ProtectedRoute>}/>

          <Route path='/account' element={
            <ProtectedRoute>
              <Navbar />
              <Account />
          </ProtectedRoute>}/>

          
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;