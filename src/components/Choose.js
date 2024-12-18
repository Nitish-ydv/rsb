import React from 'react';
import resume1 from '../images/resume1.png'
import resume2 from '../images/resume2.png';
import '../style/Choose.css'
import { useNavigate } from 'react-router-dom';

export const Choose = () => {
    const navigate  = useNavigate();
  return (
    <div className='choose-page'>
    <h3>Please select a format</h3>
        <img src={resume1} alt="sorry" onClick={()=>{navigate('/resume2')}}/>
        <img src={resume2} alt="sorry" onClick={()=>{navigate('/resume1')}}/>
    </div>
  )
}
