import React, {useState} from 'react';
import API from '../api';

export default function AddProduct(){
  const [form, setForm] = useState({title: '', description: '', price: '', contact: ''});
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    const fd = new FormData();
    fd.append('title', form.title);
    fd.append('description', form.description);
    fd.append('price', form.price);
    fd.append('contact', form.contact);
    for(const f of images) fd.append('images', f);
    for(const f of videos) fd.append('videos', f);
    API.post('/products', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(r=>{ alert('Added'); window.location.href = '/'; })
      .catch(e=>{ alert('Error'); console.error(e); });
  }

  return (
    <div className="container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit} className="form">
        <input placeholder="Title" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} required />
        <textarea placeholder="Description" value={form.description} onChange={e=>setForm({...form, description: e.target.value})} required />
        <input placeholder="Price" value={form.price} onChange={e=>setForm({...form, price: e.target.value})} required />
        <input placeholder="Contact details" value={form.contact} onChange={e=>setForm({...form, contact: e.target.value})} />
        <label>Images (multiple): <input type="file" multiple accept="image/*" onChange={e=>setImages(e.target.files)} /></label>
        <label>Videos (optional): <input type="file" multiple accept="video/*" onChange={e=>setVideos(e.target.files)} /></label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
