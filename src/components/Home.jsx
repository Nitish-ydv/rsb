import React,{useEffect, useState} from 'react';
import '../style/Home.css';
import { useDispatch } from 'react-redux';
import { education} from '../redux/components/education';
import { educationtimes} from '../redux/components/educationtime';
import {exp} from '../redux/components/expe';
import { exptime} from '../redux/components/expetime';
import { achievements} from '../redux/components/achievements';
import { projects} from '../redux/components/projects';
import { skills} from '../redux/components/skills';
import { tskills} from '../redux/components/tskills';
import { useNavigate } from 'react-router-dom';
import { rests } from '../redux/components/rest';

export const Home = () => {
  const [restchange, setRestChange] = useState(
    {
    fname:'',
    email:'',
    phone:'',
    linkedin:''
  }
)
  const [educationInputs, setEducationInputs] = useState(['']); 
  const [educationtime, setEducationtime] = useState([
    {
      from:'',
      to:''
    }
  ]); 
   
  const [experienceInputs, setExperienceInputs] = useState(['']); 
  const [experiencetime, setExperiencetime] = useState([{
    from:'',
    to:''
  }]); 
  const [projectInputs, setProjectsInputs] = useState(['']); 
  const [achievementsInputs, setAchievementsInputs] = useState(['']); 
  const [skillsInputs, setSkillsInputs] = useState(['']); 
  const [tskillsInputs, setTskillsInputs] = useState(['']); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const addEducationInput = () => {
    setEducationInputs([...educationInputs, '']);
    setEducationtime([...educationtime,{from:'',to:''}]);
  };
  const addExperienceInput = () => {
    setExperienceInputs([...experienceInputs, '']);
    setExperiencetime([...experiencetime,{from:'',to:''}]);
  };
  const addProjetcInput = () => {
    setProjectsInputs([...projectInputs, '']);
  };
  const addAchievementsInput = () => {
    setAchievementsInputs([...achievementsInputs, '']);
  };
  const addSkillsInput = () => {
    setSkillsInputs([...skillsInputs, '']);
  };
  const addTskillsInput = () => {
    setTskillsInputs([...tskillsInputs, '']);
  };
  const handleEducationInputChange = (index, event) => {
    const newInputs = [...educationInputs];
    newInputs[index] = event.target.value;
    setEducationInputs(newInputs);
    dispatch(education(newInputs));
  };
  const handleEducationtime = (index, e) => {
    const { name, value } = e.target;
    setEducationtime(prevState => {
      const newInputs = [...prevState];
      if (name === 'from') {
        newInputs[index] = { ...newInputs[index], from: value };
      } else {
        newInputs[index] = { ...newInputs[index], to: value };
      }
      dispatch(educationtimes(newInputs))
      return newInputs;
    });
  };
  
  const handleExperiencetime = (index, e) => {
    const { name, value } = e.target;
    setExperiencetime(prevState => {
      const newInputs = [...prevState];
      if (name === 'from') {
        newInputs[index] = { ...newInputs[index], from: value };
      } else {
        newInputs[index] = { ...newInputs[index], to: value };
      }
      dispatch(exptime(newInputs))
      return newInputs;
    });
  };
  
  const handleExperienceInputChange = (index, event) => {
    const newInputs = [...experienceInputs];
    newInputs[index] = event.target.value;
    setExperienceInputs(newInputs);
    dispatch(exp(newInputs))
  };
  const handleProjectsInputChange = (index, event) => {
    const newInputs = [...projectInputs];
    newInputs[index] = event.target.value;
    setProjectsInputs(newInputs);
    dispatch(projects(newInputs));
  };
  const handleAchievementsInputChange = (index, event) => {
    const newInputs = [...achievementsInputs];
    newInputs[index] = event.target.value;
    setAchievementsInputs(newInputs);
    dispatch(achievements(newInputs));
  };
  const handleSkillsInputChange = (index, event) => {
    const newInputs = [...skillsInputs];
    newInputs[index] = event.target.value;
    setSkillsInputs(newInputs);
    dispatch(skills(newInputs));
  };
  const handleTskillsInputChange = (index, event) => {
    const newInputs = [...tskillsInputs];
    newInputs[index] = event.target.value;
    setTskillsInputs(newInputs);
    dispatch(tskills(newInputs));
  };
  const handlerestChange =(e)=>{
    const {name,value} =e.target;
    setRestChange((oldVal)=>({
      ...oldVal,
      [name]:value
    }))
  }
  useEffect(()=>{
    dispatch(rests(restchange));
  },[restchange])
  return (
    <div className='home-page'>
      <h2>Resume Builder</h2>
      <p>By Aisha Kumari</p>
      <div className="main-box">
      <div className="left-box">
        <div className="input-box">
          <label htmlFor="fname">Full Name:</label>
          <input type="text" className='inputs' name='fname' onChange={handlerestChange} value={restchange.fname} />
        </div>
        <div className="input-box">
          <label htmlFor="phone">Phone:</label>
          <input type="text" className='inputs' name='phone' onChange={handlerestChange} value={restchange.phone}/>
        </div>
        <div className="input-box">
          <label htmlFor="email">Email:</label>
          <input type="text" className='inputs' name='email' onChange={handlerestChange} value={restchange.email}/>
        </div>
        <div className="input-box">
          <label htmlFor="linkedin">LinkedIn:</label>
          <input type="text" className='inputs' name='linkedin' onChange={handlerestChange} value={restchange.linkedin}/>
        </div>
        <div className="input-box">
          <label htmlFor="education">Education:</label>
          {educationInputs.map((val,index)=>{
            return(<div className='full-box'><input type="text"  className='inputs' onChange={(e)=>{handleEducationInputChange(index,e)}} value={educationInputs[index]}/>
           <div className="ft-main">

            <div className="ft-box">
              <label htmlFor="fttime">From:</label>
                  <input type="text" className='fttime' name='from' onChange={(e)=>{handleEducationtime(index,e)}} value={educationtime[index].from} />

            </div>
            <div className="ft-box">
              <label htmlFor="fttime">To:</label>
                  <input type="text" className='fttime' name='to' onChange={(e)=>{handleEducationtime(index,e)}} value={educationtime[index].to} />

            </div></div>
            </div>)
          })}
          
          <button className='add-btn' onClick={addEducationInput}>Add</button>
        </div>
      </div>
      <div className="mid-box">
      <div className="input-box">
          <label htmlFor="exp">Work Experience:</label>
          {experienceInputs.map((val,index)=>{
            return(<div className="full-box"><input type="text" className='inputs' onChange={(e)=>{handleExperienceInputChange(index,e)}} value={experienceInputs[index]}/>
            <div className="ft-main">

            <div className="ft-box">
              <label htmlFor="fttime">From:</label>
                  <input type="text" className='fttime' name='from' onChange={(e)=>{handleExperiencetime(index,e)}} value={experiencetime[index].from} />

            </div>
            <div className="ft-box">
              <label htmlFor="fttime">To:</label>
                  <input type="text" className='fttime' name='to' onChange={(e)=>{handleExperiencetime(index,e)}} value={experiencetime[index].to} />

            </div></div>
            </div>)
          })}
          
          <button className='add-btn' onClick={addExperienceInput}>Add</button>
        </div>
      <div className="input-box">
          <label htmlFor="project">Projects:</label>
          {projectInputs.map((val,index)=>{
            return(<input type="text" className='inputs' onChange={(e)=>{handleProjectsInputChange(index,e)}} value={projectInputs[index]}/>)
          })}
          
          <button className='add-btn' onClick={addProjetcInput}>Add</button>
        </div>
      <div className="input-box">
          <label htmlFor="achievement">Achievements:</label>
          {achievementsInputs.map((val,index)=>{
            return(<input type="text" className='inputs' onChange={(e)=>{handleAchievementsInputChange(index,e)}} value={achievementsInputs[index]}/>)
          })}
          
          <button className='add-btn' onClick={addAchievementsInput}>Add</button>
        </div>
      </div>
      <div className="right-box">
      <div className="input-box">
          <label htmlFor="skill">Skills:</label>
          {skillsInputs.map((val,index)=>{
            return(<input type="text" className='inputs' onChange={(e)=>{handleSkillsInputChange(index,e)}} value={skillsInputs[index]}/>)
          })}
          
          <button className='add-btn' onClick={addSkillsInput}>Add</button>
        </div>
      <div className="input-box">
          <label htmlFor="tskill">Technical Skills:</label>
          {tskillsInputs.map((val,index)=>{
            return(<input type="text" className='inputs' onChange={(e)=>{handleTskillsInputChange(index,e)}} value={tskillsInputs[index]}/>)
          })}
          
          <button className='add-btn' onClick={addTskillsInput}>Add</button>
        </div>
      </div>
      </div>
      <div className="submit-btn">

      <button onClick={()=>{navigate('/choose')}}>Submit</button>
      </div>
    </div>
  )
}
