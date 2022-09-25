import React, { ChangeEvent, useEffect, useState } from "react";
import { configFetch, RegisterProps } from "../../types/Types";
import { RegisterContainer } from "./register.styled";
import { useNavigate } from "react-router-dom";

const Register : React.FC<RegisterProps> = ( {title} ) => {
  const [form, setForm] = useState({username : '', email : '', password : ''});
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({...prev, [name] : value}));
  };

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!(form.username && form.email && form.password)) return alert("Username, Email & Password are REQUIRED...");

    if(title === 'Login'){
        const res = await fetch('http://localhost:3001/login', configFetch("POST", form));
        const data = await res.json();

        if(res.status !== 200){
          setError(data.msg);
          setTimeout(() => {
            setError('')
          }, 1500);
        }else {
          setForm({username : '', email : '', password : ''})
          navigate('/')
        } 
    }else {
        const res = await fetch('http://localhost:3001/register', configFetch("POST", form));
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
  }

  return (
    <RegisterContainer>
        <h3>{title}</h3>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name='username' value={form.username} type="text" placeholder="e.g jhon2031"/>
            <input onChange={handleChange} name='email' value={form.email} type="text" placeholder="e.g jhon@example.com"/>
            <input onChange={handleChange} name='password' value={form.password} type="password" placeholder="e.g example"/>
            <button>{'Submit'}</button>
        </form>
          {error && <p>{error}</p>}
    </RegisterContainer>
  )
}

export default Register