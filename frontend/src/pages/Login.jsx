import React, {useState} from 'react';
import API from '../api';
export default function Login(){
  const [form, setForm] = useState({email: '', password: ''});
  function submit(e){
    e.preventDefault();
    API.post('/login', form).then(r=>{ localStorage.setItem('token', r.data.token); alert('Logged in'); }).catch(()=>alert('Invalid'));
  }
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={submit} className="form">
        <input value={form.email} onChange={e=>setForm({...form, email: e.target.value})} placeholder="email" required />
        <input type="password" value={form.password} onChange={e=>setForm({...form, password: e.target.value})} placeholder="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
