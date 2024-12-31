import { useState } from 'react'
import Button from '@mui/material/Button';
import './App.css'

function App() {
  const[bgcolor,setbgcolor]=useState('white')

  const handleColor=(color)=>{
    setbgcolor(color)

    
  }
  const resetButton=(color)=>{
    setbgcolor(color)
    
  }

  return (
    <>
    <div className='d-flex flex-column align-items-center text-center' style={{  transition: 'background-color 0.4s ease-in-out',backgroundColor: bgcolor, height: '100vh',  paddingTop: '50px' }}>      
      <h1 style={{textShadow:'2px 2px 8px grey'}}>Background Color Changer</h1>

      <form action="" className='d-flex justify-content-center flex-sm-column align-items-center  flex-md-row px-2' style={{width:'100%',marginTop:'50px'}}>
      <Button  onClick={()=>handleColor('yellow')} variant="outlined" style={{color:'black',borderColor:'black'}} className='mb-3'>Yellow</Button>
      <Button  onClick={()=>handleColor('lime')} variant="outlined" style={{color:'black',borderColor:'black'}} className='mb-3 mx-lg-5'>green</Button>
      <Button  onClick={()=>handleColor('orange')} variant="outlined" style={{color:'black',borderColor:'black'}} className='mb-3'>Orange</Button>
      </form>

      <Button onClick={()=>resetButton('white')} variant="outlined" style={{color:'black',borderColor:'black'}} className='mt-4'>Reset</Button>
    </div>
    </>
  )
}

export default App
