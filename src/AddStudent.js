import { useState } from "react";
import { useNavigate } from "react-router-dom";



function AddStudent() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [city, setCity] = useState("")

    const changeId = (e) => {
        setId(e.target.value)
    }
    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changeMobile = (e) => {
        setMobile(e.target.value)
    }
    const changeCity = (e) => {
        setCity(e.target.value)
    }
    const navigate=useNavigate()

    const submitData = (e) => {
        let data = { name, email, mobile, city }
        e.preventDefault()
        fetch('http://localhost:3004/student',
            {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)

            }
        ).then(() => {
            alert('sucessfull')
            navigate('/list')
        }).catch((err) => {
            console.log(err)
        })
    }














    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <h2 className="text-center">Add Student</h2>

                    </div>
                    <div className="card-body">
                        <form onSubmit={submitData}> 
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" value={name} onChange={changeName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={email} onChange={changeEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Mobile</label>
                                <input type="number" value={mobile} onChange={changeMobile} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">City</label>
                                <input type="text" value={city} onChange={changeCity} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>

                    </div>


                </div>

            </div>
        </div>

    )
}
export default AddStudent;