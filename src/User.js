
import { initializeApp } from "firebase/app";
import {  getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";




const firebaseConfig = {
    apiKey: "AIzaSyBbB6ZiCN-OpJc2rs3B1a2oTK9fQMPj_FM",
    authDomain: "task-manager-f7f7c.firebaseapp.com",
    projectId: "task-manager-f7f7c",
    storageBucket: "task-manager-f7f7c.firebasestorage.app",
    messagingSenderId: "755654580106",
    appId: "1:755654580106:web:a7ecc7e86f70be77741a73",
    measurementId: "G-MH9HTJHMC7"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth=getAuth()


 export function UseAuth(){
    const [current,setCurrent]=useState('')
    useEffect(()=>{
      return  onAuthStateChanged(auth,user=>setCurrent(user))


    }

    ,[])
    return current




  }