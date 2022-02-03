import React,{useEffect,useContext} from 'react';
import { render } from "react-dom"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import {AuthContext, FirebaseContext} from './store/Context'
import Post from './store/PostContext'
function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
useEffect(()=>{
 firebase.auth().onAuthStateChanged((user)=>{
   setUser(user)
 })
})
  return (
    <div>
      <Post>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}>
        </Route> 
       
        <Route path='/signup' element={<Signup/>}>
        </Route>
        <Route path='/login' element={<Login/>}>
        </Route>
        <Route path='/create' element={<Create/>}>
        </Route>
        <Route path='/view' element={<View/>}>
        </Route>
        </Routes>
        
        
      </Router>
      </Post>
      
    </div>
  );
}

export default App;
