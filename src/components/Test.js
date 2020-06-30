import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Test() {
    return (
        <div>
            <h1>Hello</h1>
             <ul>
                <li>
                    <Link to="/homepage">Home</Link>
                </li>
                <li>
                    <Link to="/loginpage">Login</Link></li>
            </ul> 
            
        </div>
    )
}

export default Test
