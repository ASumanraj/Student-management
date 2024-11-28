import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "./User";
import axios from "axios";



let API_URL = "http://localhost:3004/student"

function StudentList() {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const currentUser = UseAuth()
    const [value, setValue] = useState('')
    let array = ["name", "email", "mobile", "city"]

    useEffect(() => {
        fetch(API_URL, { method: "GET" })
            .then((res) => {
                return res.json()
            }).then((resp) => {
                console.log(resp)
                setData(resp)
            }

            ).catch((err) => {
                console.log(err)
            })



    }, [])

    const EditData = (id) => {
        navigate('/edit/' + id)
    }
    const deleteData = (id) => {
        fetch("http://localhost:3004/student/" + id, { method: "DELETE" })
            .then(() => {
                alert('successfull')
                window.location.reload()
            }).catch((err) => {
                console.log(err)

            })
    }
    const changeValue = (e) => {
        setValue(e.target.value)
    }

    const serachData = async (e) => {
        e.preventDefault()
        return await axios.get(`http://localhost:3004/student?q=${value}`)
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
            })

    }
    const [sort]=useState('')
    const sortData = async (e) => {
        e.preventDefault()
        let value=e.target.value
        return await axios.get(`http://localhost:3004/student?_sort=${value}&_order=asc`)
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
            })

    }







    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <h2 className="text-center">Student Management System</h2>
                    </div>
                    <div className="card-body">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}


                        >
                            <Link className="btn btn-primary" to="/add">Add new</Link>
                            <Link className="btn btn-danger" to='/login'>Signout</Link>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',


                                }}


                            >
                                <ul style={{
                                    display: 'flex',
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0


                                }}>

                                    <li
                                        style={{
                                            marginLeft: 300
                                        }}>
                                        <form onSubmit={serachData}>
                                            <input type="text" placeholder="filter" value={value} onChange={changeValue} />
                                            <input type="submit" className="btn btn-secondary" />
                                        </form>
                                    </li>
                                    <li style={{
                                        marginLeft: 40
                                    }} >
                                        <select value={sort} onChange={sortData}>
                                            <option>--sort--</option>
                                            {array.map((item) => (
                                                <option>{item}</option>

                                            ))

                                            }






                                        </select>
                                    </li>
                                    <li
                                        style={{
                                            marginLeft: 100
                                        }}>
                                        <h3>{currentUser?.email}</h3>

                                    </li>
                                </ul>
                            </div>
                            <div />
                        </div>

                        <div>
                            <table className="table table-borderd">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Mobile</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.city}</td>
                                            <td>
                                                <button className="btn btn-primary" onClick={() => { EditData(item.id) }}>Edit</button>
                                                <button className="btn btn-danger" onClick={() => { deleteData(item.id) }}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StudentList;