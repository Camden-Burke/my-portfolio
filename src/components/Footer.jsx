import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for reaching out, ${name}! We will get back to you shortly.`);
    setEmail('');
    setName('');
    setMessage('');
    setService('');
  };

  return (
    <div style={{ backgroundColor: '#282828', padding: '40px 80px', margin:'0px 80px', display:'flex', flexDirection: 'row' }}> {/* Adjusted for simplicity */}
      
      <form onSubmit={handleSubmit} style={{width:'40%'}}>
      <div style={{ fontStyle: 'italic', fontWeight: 300, color: '#ffffff', fontSize: '24px', textAlign:'start' }}>
        // Wanna work together?
      </div>
        <input
          style={{
            width: '100%',
            height: '54px',
            margin: '16px 0',
            padding: '0px 8px',
            borderRadius: '2px',
            border: '1px solid #282828',
            backgroundColor: '#ffffff',
            color: '#282828',
            fontSize: '20px',
            fontFamily: 'Roboto',
            lineHeight: '22px',
          }}
          placeholder='YOUR NAME *'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          style={{
            width: '100%',
            height: '54px',
            margin: '16px 0',
            padding: '0px 8px',
            borderRadius: '2px',
            border: '1px solid #282828',
            backgroundColor: '#ffffff',
            color: '#282828',
            fontSize: '20px',
            fontFamily: 'Roboto',
            lineHeight: '22px',
          }}
          placeholder='YOUR EMAIL *'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          required
        />
        <select
          style={{
            width: '100%',
            height: '54px',
            margin: '16px 0',
            padding: '0px 8px',
            borderRadius: '2px',
            border: '1px solid #282828',
            backgroundColor: '#ffffff',
            color: '#282828',
            fontSize: '20px',
            fontFamily: 'Roboto',
            lineHeight: '22px',
          }}
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value='' disabled hidden>WHAT TYPE OF SERVICE ARE YOU LOOKING FOR?</option>
          <option value='UX DESIGN'>UX DESIGN</option>
          <option value='UI DESIGN'>UI DESIGN</option>
          <option value='BRAND DESIGN'>BRAND DESIGN</option>
          <option value='OTHER'>OTHER</option>
        </select>
        <textarea
          style={{
            width: '100%',
            height: '100px',
            margin: '16px 0',
            padding: '8px',
            borderRadius: '2px',
            border: '1px solid #282828',
            backgroundColor: '#ffffff',
            color: '#282828',
            fontSize: '20px',
            fontFamily: 'Roboto',
            lineHeight: '22px',
          }}
          placeholder='WRITE A MESSAGE...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type='submit'
          style={{
            cursor: 'pointer',
            width: '100%',
            height: '46px',
            borderRadius: '25px',
            backgroundColor: '#5856d6',
            color: '#ffffff',
            fontSize: '20px',
            fontFamily: 'Roboto',
            lineHeight: '26px',
            border: '0',
            marginTop: '16px',
          }}
        >
          SEND
        </button>
      </form>
      <div style={{width:'60%'}}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 577 424" width="577" height="424" fill="none">
        <g opacity="100%">
            <text x="0" y="18" font-family="Roboto" font-size="20" fill="#fff" letter-spacing="0" font-weight="500" font-style="normal">CAMDEN BURKE</text>
        </g>
        <g opacity="100%">
            <text x="0" y="81.5" font-family="Roboto" font-size="40" fill="#fff" letter-spacing="0" font-weight="500" font-style="normal">Contact@camdenburke.net</text>
        </g>
        <g opacity="100%">
            <text x="0" y="141.5" font-family="Roboto" font-size="40" fill="#fff" letter-spacing="0" font-weight="500" font-style="normal">(+1) 615 557 8189</text>
        </g>
        <g opacity="100%">
            <text x="0" y="372.5" font-family="Roboto" font-size="18" fill="#fff" letter-spacing="0" font-weight="300" font-style="normal">Follow me on social media!</text>
        </g>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32" fill="#fff" x="0" y="392" opacity="100%">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32" fill="#fff" x="52" y="392" opacity="100%">
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
        </svg>
        <defs>
            <filter id="filter_dshadow_0_0_0_00000014" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="bg-fix"></feFlood>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="alpha"></feColorMatrix>
            <feOffset dx="0" dy="0"></feOffset>
            <feGaussianBlur stdDeviation="0"></feGaussianBlur>
            <feComposite in2="alpha" operator="out"></feComposite>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
            <feBlend mode="normal" in2="bg-fix" result="bg-fix-filter_dshadow_0_0_0_00000014"></feBlend>
            <feBlend in="SourceGraphic" in2="bg-fix-filter_dshadow_0_0_0_00000014" result="shape"></feBlend>
            </filter>
            <style id="google">@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap);
        </style>
            <style id="brand"></style>
        </defs>
        </svg>
      </div>
    </div>
  );
};

export default Footer;

