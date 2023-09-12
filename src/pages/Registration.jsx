import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {saveUser } from './../utils/users'
import Navbar from './../components/Navbar';
const Registration = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [credentialsEmpty, setCredentialsEmpty] = useState(false)
    const [isRegistered, setIsRegistered] = useState(true)
    const navigate = useNavigate()
    const handleSubmit = async (e)=> {
        e.preventDefault();
        if(firstName === "" || lastName === "" || email === "" || password === "" ){
            setCredentialsEmpty(true)
            return
        }
        else {
            setCredentialsEmpty(false)
            const isSaved = await saveUser(firstName, lastName, email, password)
            if(isSaved) {
                navigate("/login")
                setIsRegistered(true)
                return
            } 
            setIsRegistered(false)
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setCredentialsEmpty(true)
        }
        return
    }
    
    return(
        <>
        <Navbar />
        <div className="container mb-7 mt-10 ml-4 mr-4 pl-4 pr-4" >
            {credentialsEmpty?(<p>enter the details again</p>):(!isRegistered)?(<p>Registration failed. retry</p>):(<p></p>)}
        <form>
            <div className="mb-3">
                <label htmlFor="registrationFirstName" className="form-label">First Name </label>
                <input type="text" className="form-control" id="registrationFirstName" onChange={(e)=> setFirstName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="registrationlastName" className="form-label">Last Name </label>
                <input type="text" className="form-control" id="registrationlastName" onChange={(e)=> setLastName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="registrationEmail" className="form-label">Email Address </label>
                <input type="email" className="form-control" id="registrationEmail" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="registrationPassword" className="form-label">Password </label>
                <input type="password" className="form-control" id="registrationPassword" onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">By checking this I am aggreeing upon all the terms and conditions</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={async e => await handleSubmit(e)}>Register</button>
        </form>
        </div>
        </>
    )
}

export default Registration