import React, {useState} from 'react';
import API from '../api';
export default function Register(){
  const [form, setForm] = useState({name: '', email: '', password: ''});
  function submit(e){
    e.preventDefault();
    API.post('/register', form).then(()=>{ alert('Registered'); window.location.href='/login'; }).catch(()=>alert('Error'));
  }
  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={submit} className="form">
        <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} placeholder="name" />
        <input value={form.email} onChange={e=>setForm({...form, email: e.target.value})} placeholder="email" required />
        <input type="password" value={form.password} onChange={e=>setForm({...form, password: e.target.value})} placeholder="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
