import React,{useContext,useState} from 'react'
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import { Context } from '../context/Context'
import firebase from '../firebase/config'
import reducer from '../reducer/reducer'

function LoginPage() {
    const {
        state:{
            loginUser,
            register,
            
        },
        handleInput
    }=useContext(Context)
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [routeRedirect, setRouteRedirect] = useState(false);
    const [routeRedirectReg, setRouteRedirectReg] = useState(false);

    // async function login() {
	// 	try {
	// 		await firebase.login(email, password)
    //         setRouteRedirect(true)
	// 	} catch(error) {
	// 		alert(error.message)
	// 	}
    // }
    async function onRegister() {
		try {
            let mess = await firebase.register(name, email, password)
			//await firebase.register(name, email, password)
            setRouteRedirectReg(true)
            //document.getElementById('display').innerHTML="You are Registered !!";
            alert(name+" are Registered !!")
		} catch(error) {
			alert(error.message)
		}
	}
    const login = async(e) => {
        e.preventDefault();
        let response = await firebase.login(email, password);
        if(response.hasOwnProperty("message")){
            alert(response.message);
        }else{
            alert(name+" are Logged In");
            setRouteRedirect(true);
        }
   }
    const redirect = routeRedirect;
    if(redirect){
        return <Redirect to="/homepage" />  
    }
    const redirect1 = routeRedirectReg;
    if(redirect1){
        return <Redirect to="/homepage" />  
    }
    return (
        <div>
            {/* <pre>
                {JSON.stringify(loginUser,null,4)}
            </pre> */}
            <h1 className="text-center" id="display">hiii</h1>
            <h1>Login Page</h1>

            <div>
            <div class="md-form mb-5">
                    <i class="fas fa-user prefix grey-text"></i>
                    <input type="text" id="name" name="name" class="form-control validate"onChange={(e) => setName(e.target.value)}/>
                    <label data-error="wrong" data-success="right" for="defaultForm-email">Your Name</label>
                </div>
                <div class="md-form mb-5">
                    <i class="fas fa-envelope prefix grey-text"></i>
                    <input type="email" id="email" name="email" class="form-control validate"onChange={(e) => setEmail(e.target.value)}/>
                    <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
                </div>

                <div class="md-form mb-4">
                    <i class="fas fa-lock prefix grey-text"></i>
                    <input type="password" name="password" id="password" class="form-control validate" onChange={(e) => setPassword(e.target.value)}/>
                    <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
                </div>

            </div>
            <div class="modal-footer d-flex justify-content-center">
                <button class="btn btn-default" onClick={login}>Login</button>
                <button class="btn btn-default" onClick={onRegister}>Register</button>

            </div>
        </div>
    )
}

export default LoginPage
