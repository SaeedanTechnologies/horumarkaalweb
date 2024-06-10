import React from 'react'
// import Page from '../../../components/page/page'
import { Box, Button, Typography, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const LanguageMain = () => {

const theme = useTheme()
const navigate = useNavigate()

const handleQuiz = ()=>{
    navigate('/quiz')
}

    return (
    <>



<Box sx={{backgroundColor:theme.palette.primary.main}}>


<Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', flexDirection:'column', color:'white', padding:'0rem 20%'}}>


<Box sx={{display:'flex', justifyContent:'space-between'}} gap={3}>
<Button variant='contained' sx={{backgroundColor:'transparent', color:'white',
border:'1px solid white',
textTransform:'none',
borderRadius:'25px', width:'100%',
':hover':{
    backgroundColor:'transparent'
}
}} onClick={handleQuiz} >
    English
</Button>

<Button variant='contained' sx={{backgroundColor:'transparent', color:'white',
border:'1px solid white',
textTransform:'none',
borderRadius:'25px', width:'100%',
':hover':{
    backgroundColor:'transparent'
}

}} onClick={handleQuiz} >
    Shomalia
</Button>

<Button variant='contained' sx={{backgroundColor:'transparent', color:'white',
border:'1px solid white',
textTransform:'none',
borderRadius:'25px', width:'100%',
':hover':{
    backgroundColor:'transparent'
}

}} onClick={handleQuiz} >
    Arabic
</Button>

</Box>


<Box mt={2}>

<Typography variant='h1' sx={{fontSize:'2rem', fontWeight:'700'}}>Multilingual Glossary Web App</Typography>

</Box>

<Box>
    <img src='/multilanguial.JPG' alt='image '/>
</Box>

<Box>
    <Typography>Multilinfual web app version 2.0</Typography>
</Box>

<Typography sx={{textAlign:'center'}}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum voluptates libero, facere reiciendis, molestias quaerat tempore ullam repellat consequuntur animi unde dolores corrupti! Numquam ratione sit sequi doloremque, praesentium ducimus! Iure blanditiis doloremque beatae pariatur quo corporis? Consectetur, asperiores.
</Typography>

<Button variant='contained' sx={{backgroundColor:'white', color:theme.palette.primary.main,

borderRadius:'25px', width:'30%', padding:'0.5rem 0rem',
':hover':{
    backgroundColor:'white'
}

}}
onClick={()=>{
    navigate('/select-language')
}}

>
    Next Page
</Button>

</Box>

</Box>








    </>
  )
}

export default LanguageMain