import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { configFetch, RegisterProps } from "../../types/Types";
import { RegisterContainer } from "./register.styled";
import { useCallback } from "react";
const Register : React.FC<RegisterProps> = ( {title} ) => {
  const [form, setForm] = useState({username : '', email : '', password : ''});
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({...prev, [name] : value}));
  };

  const handleSubmit = useCallback(async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!(form.username && form.email && form.password)) return alert("Username, Email & Password are REQUIRED...");

    if(title === 'Login'){
        const res = await fetch('https://motionless-tick-top-coat.cyclic.app/login', configFetch("POST", form));
        const data : {accessToken : string, msg? : string} = await res.json();

        
        if(res.status !== 200){
          setError(data.msg!);
          setTimeout(() => {
            setError('')
          }, 1500);
          
        }else {
          localStorage.setItem('TOKEN', data?.accessToken);
          setForm({username : '', email : '', password : ''})
          navigate('/')
        } 
    }else {
        const res = await fetch('https://motionless-tick-top-coat.cyclic.app/register', configFetch("POST", form));
        const data = await res.json();
        
        if(res.status !== 200){
          setError(data.msg)
          setTimeout(() => {
            setError('')
          }, 1500);
        }else {
          setForm({username : '', email : '', password : ''})
          navigate('/login');
        } 
    }
  }, [title, form.username, form.email, form.password])

  return (
    <RegisterContainer>
        <h3>{title}</h3>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name='username' value={form.username} type="text" placeholder="e.g jhon2031"/>
            <input onChange={handleChange} name='email' value={form.email} type="text" placeholder="e.g jhon@example.com"/>
            <input onChange={handleChange} name='password' value={form.password} type="password" placeholder="e.g password"/>
            <button>{'Submit'}</button>
            {title !== 'Login' ? <Link to='/login'>Login if you already have an account?</Link> : <Link to='/'>Continue Shopping</Link>}
        </form>
          {error && <p>{error}</p>}
    </RegisterContainer>
  )
}

export default Register