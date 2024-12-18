import React ,{useEffect, useState}from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../style/Resume2.css';
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Resume2 = () => {
    const navigate = useNavigate();
    const [restchange, setRestChange] = useState({
        fname:'',
        email:'',
        phone:'',
        linkedin:''
      })
    const [educationInputs, setEducationInputs] = useState([]); 
    const [educationtime, setEducationtime] = useState([
        {
          from:'',
          to:''
        }
      ]); 
       
      const [experienceInputs, setExperienceInputs] = useState([]); 
      const [experiencetime, setExperiencetime] = useState([{
        from:'',
        to:''
      }]); 
  const [projectInputs, setProjectsInputs] = useState([]); 
  const [achievementsInputs, setAchievementsInputs] = useState([]); 
  const [skillsInputs, setSkillsInputs] = useState([]); 
  const [tskillsInputs, setTskillsInputs] = useState([]); 
  const edval = useSelector((state)=>{
    return state.rootReducer
  });
  useEffect(()=>{
      setEducationInputs(edval.education);
        setEducationtime(edval.educationtime);
      setExperienceInputs(edval.expe);
      setExperiencetime(edval.expetime)
      setAchievementsInputs(edval.achievements);
      setProjectsInputs(edval.projects);
      setSkillsInputs(edval.skills);
      setTskillsInputs(edval.tskills);
      setRestChange(edval.rest);
      setTimeout(() => {
        exportpdf()
      }, 2000);
  },[])
 
  const exportpdf =()=>{
    const input = document.getElementById('resume2');
    
    html2canvas(input,{logging:true,useCORS:true,}).then(canvas=>{
      const imgWidth = 208;
     const imgHeight = input.offsetHeight * imgWidth / input.offsetWidth;
      const imgData =  canvas.toDataURL('img/png');
      const pdf = new jsPDF('p','mm','a4');
      pdf.addImage(imgData,'PNG',0,0,imgWidth,imgHeight);
      pdf.save(edval.rest.fname + '.pdf');
      navigate('/');
     })
  }
  return (
    <div className='resume2-page' id='resume2'>
    <h2 className='name2'>{restchange.fname}</h2>
    <div className="contact-box">
        <em><EmailIcon className='icons'></EmailIcon> {restchange.email}</em>
        <em><PhoneIcon className='icons'></PhoneIcon> {restchange.phone}</em>
        <em><LinkedInIcon className='icons'></LinkedInIcon> {restchange.linkedin}</em>
    </div>
    {educationInputs.length===0?<></>:
    <div className="box2">
        <h3 className='heading2'>Education</h3>
        {educationtime.length===0?<>{educationInputs.map((val)=>{
            return(
       
        <p className='box-data'>
            -{'>'} <p className='exception'>{val}</p> 
            </p>

            )
        })}</>
        :<>
        {educationInputs.map((val,index)=>{
            return(
                <p className='box-data'>
-{'>'} <p className='exception'>{val}</p>
<i>{educationtime[index].from} - {educationtime[index].to}</i>
</p>


            )
        })}</>}
    </div>}

    {experienceInputs.length===0?<></>:
    <div className="box2">
        <h3 className='heading2'>Work Experience</h3>
        {experiencetime.length===0?<>
            {experienceInputs.map((val,index)=>{
            return(
       
        <p className='box-data'>
            -{'>'} <p>{val}</p>
            </p>

            )
        })}
        </>:<>
        {experienceInputs.map((val,index)=>{
            return(
       
                <p className='box-data'>
-{'>'} <p className='exception'>{val}</p> <i>{experiencetime[index].from} - {experiencetime[index].to}</i>
</p>


            )
        })}
        </>}
        
       
    </div>}
    {projectInputs.length===0?<></>:
    <div className="box2">
        <h3 className='heading2'>Projects</h3>
        {projectInputs.map((val)=>{
            return(
       
        <p className='box-data'>
            -{'>'} <p className='exception'>{val}</p> 
            </p>

            )
        })}
       
    </div>}
    {achievementsInputs.length===0?<></>:
    <div className="box2">
        <h3 className='heading2'>Achievements</h3>
        {achievementsInputs.map((val)=>{
            return(
            
        <p className='box-data'>
            -{'>'} <p>{val}</p>
            </p>

            )
        })}
        
    </div>}
    {skillsInputs.length===0?<></>:
    <div className="box2">
        <h3 className='heading2'>Skills</h3>
        {skillsInputs.map((val)=>{
            return(
        <p className='box-data'>
            
            -{'>'} <p>{val}</p>
            </p>

            )
        })}
        
    </div>}
    {tskillsInputs.length===0?<></>:
    <div className="box2">
        <h3 className='heading2'>Technical Skills</h3>
        {tskillsInputs.map((val)=>{
            return(
        <p className='box-data'>
            
            -{'>'} <p>{val}</p>
            </p>

            )
        })}
    </div>}
</div>
  )
}
