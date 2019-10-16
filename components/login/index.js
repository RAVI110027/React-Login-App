import React, { Component } from 'react';
import Link from 'next/link';
import Input from '../input/index';

export default class Login extends Component {

        state = {
                login: {username: "", password: ""},
                errors: {}
            };

        handleLoginSubmit= e =>{
                e.preventDefault();
                    //Call to Server
                console.log("Login Form Submitted");
            }; 

        handleChange= e =>{
                // const errors = {...this.state.errors};
                // const errorMessage = this.validateProperty(e.currentTarget);
                // if (errorMessage) errors[e.currentTarget.name] = errorMessage;
                // else delete errors[e.currentTarget.name];
            
                const login = {...this.state.login};
                login[e.currentTarget.name] = e.currentTarget.value; 
                this.setState({login});
            };

        handlelogin = () => {
                console.log("Email: " + this.state.login.username);
                console.log("Password: " + this.state.login.password);
            };

    render() {
            const {login} = this.state;
            return (
                <React.Fragment>
                    <div className="container">
                        <h1 className="text-center">
                            Login Page...
                        </h1>
                
                        <form onSubmit={this.handleLoginSubmit}>

                            <Input
                                name="username"
                                value={login.username}
                                label="Email Address"
                                onChange={this.handleChange}
                            />
                            <Input
                                name="password"
                                value={login.password}
                                label="Password"
                                onChange={this.handleChange}
                            />
                        
                            <Link href="/home">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </Link>
                            <button type="submit" className="btn btn-primary" onClick={this.handlelogin}>
                                Submit For Data
                            </button>
                            <Link href="/signup">
                                <button type="submit" className="btn btn-primary">Not A Member</button>           
                            </Link>
                            <Link href="/forgot-password">
                                <button type="submit" className="btn btn-primary">Forgot Password</button>
                            </Link>
                        </form>
                    </div>
                </React.Fragment>
            )
        }
}

















// import React from 'react';
// import Link from 'next/link';

// export default function Login() {
//     return (
//     <React.Fragment>
//         <div>
//             Login Page
//         </div>
//         <Link href="/signup"><button>Not A Member</button></Link>
//         <Link href="/forgot-password"><button>Forgot Password</button></Link>
        
//     </React.Fragment>
//     )
// }

 {/* <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" name="email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password"/>
                        </div> */}