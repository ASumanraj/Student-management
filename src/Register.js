import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";



function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass1, setPass1] = useState("")
    const [pass2, setPass2] = useState("")

    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePass1 = (e) => {
        setPass1(e.target.value)
    }
    const changePass2 = (e) => {
        setPass2(e.target.value)
    }
    const navigate=useNavigate()

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

      const submitData=(e)=>{
        e.preventDefault()
        let obj={
           email:email,
           password:pass1
        }
        createUserWithEmailAndPassword(auth,obj.email,obj.password)
        .then(()=>{
            alert("register successfully")
            navigate('/login')
        })
        .catch((err)=>{
            alert(err)
        })
      }
      










    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <h2 className="text-center">Resgistration</h2>

                    </div>
                    <div className="card-body">
                        <form onSubmit={submitData} >
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" value={name} onChange={changeName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={email} onChange={changeEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={pass1} onChange={changePass1} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Conform Password</label>
                                <input type="password" value={pass2} onChange={changePass2} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>

                    </div>
                    <div>
                        If you have an account <Link to='/login'>Login here</Link>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Register;