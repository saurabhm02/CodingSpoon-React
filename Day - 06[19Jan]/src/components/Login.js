import React, { useState } from 'react';
import loginImg from "../assets/loginImg.png"
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const {navBar} = props;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState({
        email: '',
        password: '',
    });

    const onChangeHandler = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if(validateForm()){
        navBar();
        navigate("/");
    }
    else{
        console.log(error);
    }
  };

  const validateForm = () =>{
    let valid = true;
    const newError = {};
    if(!formData.email){
        newError.email = 'Please Enter a valid email';
        setError(newError);
    }
    if(!formData.password || formData.password.length < 6){
        newError.password = 'Password must be at least 6 characters long';
        setError(newError);
        valid = false;
    }
    return valid;
  }

  return (
    <div className="columns is-flex is-justify-content-center " style={{ gap: '35px' , marginTop:'60px'}}>
        <div className="column is-full-mobile is-half-tablet is-one-third-desktop">
            <form onSubmit={SubmitHandler} className="is-fullwidth">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={onChangeHandler}
                        />
                        {error.email && (<p className="is-danger">{error.email}</p>)}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control ">
                        <input
                            type="password"
                            className="input"
                            placeholder="Enter your password"
                            name="password"
                            value={formData.password}
                            onChange={onChangeHandler}
                        />
                        {error.password && (<p style={{color:'red'}}>{error.password}</p>)}
                    </div>
                </div>
                <div className="control">
                    <button type="submit" className="is-primary is-rounded is-fullwidth button" tabIndex="0">Login</button>
                </div>
            </form>
        </div>
        <div className="column is-full-mobile is-half-tablet is-one-third-desktop">
            <img src={loginImg} alt="" width={400} />
        </div>
    </div>


  );
};

export default Login;
