import React from 'react'
import { Typography, Box } from '@mui/material'





function ApplicationProcess() {
    return <div>

    
        <br></br>
        
        <Typography variant='h4' align="center" style={{ fontWeight: 'bold' }}>
            Nonprofits Application Process
        </Typography>

       <br></br>

       <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            ml: 60,
            mr: 60
        }}>

          <Typography marginRight={5} fontSize={80} color={'primary.main'} fontWeight={500}>
               01
          </Typography>

          <Typography>
               <h2>Outreach</h2>
          
               <h4 style={{color: '#AFAFAF'}}>Before the start of Fall term (September), we will be conducting outreach to find our yearlong partners!
                If your nonprofit is interested in an application, free of charge, email us at team@lablueprint.org!</h4>
          </Typography>
          </Box>
       
          <Typography marginLeft={65} fontSize={50} color={'primary.main'} fontWeight={'bold'}>
               |
          </Typography>

       <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            ml: 60,
            mr: 60
        }}>


          <Typography marginRight={5} fontSize={80} color={'primary.main'} fontWeight={500}>
               02
          </Typography>

          <Typography>
               <h2>Scoping Call</h2>
          
               <h4 style={{color: '#AFAFAF'}}>Our team will set up a call to learn more about your nonprofit’s technical goals.
                We are dedicated to hearing about your organization’s current approach to driving social good and how we might help you.</h4>
          </Typography>
          </Box>
      
          <Typography marginLeft={65} fontSize={50} color={'primary.main'} fontWeight={'bold'}>
               |
          </Typography>

       <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            ml: 60,
            mr: 60
        }}>

          <Typography marginRight={5} fontSize={80} color={'primary.main'} fontWeight={500}>
               03
          </Typography>

          <Typography>
               <h2>Nonprofit Project Proposal Application</h2>
          
               <h4 style={{color: '#AFAFAF'}}>After our scoping call, we ask you to fill out this project proposal application. 
               Our team is committed to answering any questions or setting up additional meetings to support you.</h4>
          </Typography>
          </Box>
       
          <Typography marginLeft={65} fontSize={50} color={'primary.main'} fontWeight={'bold'}>
               |
          </Typography>

       <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            ml: 60,
            mr: 60
        }}>

          <Typography marginRight={5} fontSize={80} color={'primary.main'}fontWeight={500}>
               04
          </Typography>  

          <Typography>
               <h2>Deliberation</h2>
          
               <h4 style={{color: '#AFAFAF'}}>Our executive team and project leads will read through your project proposals and select the three applications we feel we can best support. 
               We may also contact each nonprofit for additional information before continuing to the next step.</h4>
          </Typography>
          </Box>
       
       
          <Typography marginLeft={65} fontSize={50} color={'primary.main'} fontWeight={'bold'}>
               |
          </Typography>

       <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            ml: 60,
            mr: 60
        }}>

          <Typography marginRight={5} fontSize={80} color={'primary.main'} fontWeight={500}>
               05
          </Typography>

          <Typography>
               <h2>Development</h2>
          
               <h4 style={{color: '#AFAFAF'}}>Our partnership has been initialized! Project development begins in October. 
               Each nonprofit will have a team of 2 project leads, 4-6 developers, and 2-3 designers dedicated to your project. 
               Project leads will be in contact with your team regularly to ensure our application best captures your team’s vision.</h4>
          </Typography>
          </Box>

          <Typography marginLeft={65} fontSize={50} color={'primary.main'} fontWeight={'bold'}>
               |
          </Typography>

       <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            ml: 60,
            mr: 60
        }}>

          <Typography marginRight={5} fontSize={80} color={'primary.main'} fontWeight={500}>
               06
          </Typography>

          <Typography>
               <h2>Project Handoff</h2>
          
               <h4 style={{color: '#AFAFAF'}}>After many iterations of user testing, development, and bug-amelioration, we will hand off our application to you. 
               Our team is committed to making the handoff process as seamless as possible, 
               so we will provide your team detailed documentation and guidance on project maintenance.</h4>
          </Typography>
          </Box>
       
       
    </div>

}

export default ApplicationProcess
