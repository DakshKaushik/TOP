import PersonalDetails from './components/personalDetails'
import Education from './components/education'
import './App.css'
import Experience from './components/experience'
import Resume from './components/resume'
import { useState } from 'react'
function App() {
  const [personalData, setPersonalData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [educationData,setEducationData]=useState({
    school:'',
    degree:''
  })
  function handlePersonalChange(e) {
    const { name, value } = e.target;
    setPersonalData(prev => ({ ...prev, [name]: value }));
  }
  function handleEductionChange(e){
    const {name,value}=e.target;
    setEducationData(prev=>({...prev,[name]:value}));
  }
  return (
    <div className='appContainer'>
      <div className='details'>
      <PersonalDetails data={personalData} onChange={handlePersonalChange}/>
      <Education data={educationData} onChange={handleEductionChange}/>
      <Experience/>
      </div>
      <div className='resume'>
      <Resume personalData={personalData} educationData={educationData}/>
      </div>
    </div>
  )
}

export default App
