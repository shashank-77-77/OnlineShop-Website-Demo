import React, {useEffect, useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

export default function Product(){
  const { id } = useParams();
  const [p, setP] = useState(null);
  const ref = useRef();

  useEffect(()=>{ API.get('/products/'+id).then(r=>setP(r.data)).catch(console.error); }, [id]);

  useEffect(()=>{
    function onScroll(){
      if(!ref.current) return;
      const sc = window.scrollY;
      ref.current.style.backgroundPositionY = (sc * 0.2) + 'px';
    }
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  }, []);

  if(!p) return <div>Loading...</div>;
  return (
    <div className="product-page">
      <div className="hero" ref={ref} style={{backgroundImage: p.images && p.images[0] ? `url(http://localhost:5000${p.images[0]})` : 'none'}}>
        <h1>{p.title}</h1>
      </div>
      <div className="content">
        <h2>Price: ₹{p.price}</h2>
        <p className="desc">{p.description}</p>
        <div className="media">
          {p.videos && p.videos.map(v=> (
            <video key={v} controls src={`http://localhost:5000${v}`} style={{maxWidth: '100%'}} />
          ))}
        </div>
        <p>Contact: {p.contact}</p>
      </div>
    </div>
  );
}
