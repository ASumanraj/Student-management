import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./StudentList.js";
import AddStudent from "./AddStudent.js";
import EditData from "./EditData.js";
import Register from "./Register.js";
import Login from "./Login.js";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/list' element={<StudentList />} />
                    <Route path='/add' element={<AddStudent />} />
                    <Route path='/edit/:sid' element={<EditData />} />
                    <Route path='/' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Router>


        </div>
    )
}
export default App;   