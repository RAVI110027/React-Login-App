import React from 'react';
import Joi from 'joi-browser';
import Link from 'next/link';
import Input from '../input/index';

class SignUp extends React.Component {

          state = {
              signUp:{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  confirmPassword:''
                },
              errors: {}  
          };   
        
          schema = {
              firstName: Joi.string().required().label('First Name'),
              lastName: Joi.string().required(),
              email: Joi.string().required(), 
              password: Joi.string().required(),
              confirmPassword: Joi.string().required()
          };

          validate = () =>{
              const options = { abortEarly : false};
              const result = Joi.validate(this.state.signUp, this.schema, options);
                  if(!result.error) return null;
              
              const errors= {};
                  for (let item of result.error.details)
                    errors[item.path[0]] = item.message;
              return errors;
          };

          validateProperty = ({name, value}) =>{
              const obj ={ [name]: value };
              const schema ={ [name]: this.schema[name] };
              const {error} =Joi.validate(obj, schema);
              return error ? error.details[0].message : null;
          };

          handleSubmit= e =>{
              e.preventDefault();
              const errors = this.validate();
              this.setState({errors: errors || {} });
                  if (errors) return;
                //Call to Server 
              console.log("SignUp Form Submitted");
          }; 

          handleChange= e =>{
              const errors = {...this.state.errors};
              const errorMessage = this.validateProperty(e.currentTarget);
              if (errorMessage) errors[e.currentTarget.name] = errorMessage;
              else delete errors[e.currentTarget.name];

              const signUp = {...this.state.signUp};
              signUp[e.currentTarget.name] = e.currentTarget.value; 
              this.setState({signUp, errors});
          };

          handleSignUp = () => {
              console.log("First Name: " + this.state.signUp.firstName);
              console.log("Last Name: " + this.state.signUp.lastName);
              console.log("Email: " + this.state.signUp.email);
              console.log("Password: " + this.state.signUp.password);
              console.log("Confirm Password: " + this.state.signUp.confirmPassword);
          };

  render(){
      const {signUp, errors} =this.state;

      return (
          <React.Fragment>
              <div className="container">
                  <h1 className="text-center">
                      SignUp Page
                  </h1>

                <form onSubmit={this.handleSubmit}>
                  <Input 
                      name="firstName"
                      value={signUp.firstName}
                      label="First Name"
                      onChange={this.handleChange}
                      error={errors.firstName}
                  />

                  <Input
                      name="lastName"
                      value={signUp.lastName}
                      label="Last Name"
                      onChange={this.handleChange}
                      error={errors.lastName}
                  />

                  <Input
                      name="email"
                      value={signUp.email}
                      label="Email Id"
                      onChange={this.handleChange}
                  />

                  <Input
                      name="password"
                      value={signUp.password}
                      label="Password"
                      type="password"
                      onChange={this.handleChange}
                  />

                  <Input
                      name="confirmPassword"
                      value={signUp.confirmPassword}
                      label="Confirm Password"
                      onChange={this.handleChange}
                  />

                  <Link href="/login">
                      <button 
                          disabled={this.validate()}
                          type="submit" className="btn btn-primary">Submit [Real]
                      </button>
                  </Link>
                  <button type="submit" className="btn btn-primary" onClick={this.handleSignUp}>
                      Submit For Data
                  </button>
                  <Link href="/login">
                      <button type="submit" className="btn btn-primary">
                          Already A Member
                      </button>
                  </Link>
                </form>
              </div>
          </React.Fragment>
      );
    }
}

export default SignUp;

























// state = {
      //     firstName: '',
      //     lastName: '',
      //     email: '',
      //     password: '',
      //     confirmPassword:'' 
      // };  


      //   handleChange= event => {
  //     this.setState({[event.target.name]: event.target.value});
  //  }

//   handleSignUp = () => {
//     console.log("First Name: " + this.state.firstName);
//     console.log("Last Name: " + this.state.lastName);
//     console.log("Email: " + this.state.email);
//     console.log("Password: " + this.state.password);
//     console.log("Confirm Password: " + this.state.confirmPassword);
//  }