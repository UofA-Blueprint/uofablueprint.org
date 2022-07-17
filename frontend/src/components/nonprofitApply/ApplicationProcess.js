import React from 'react'
import { ApplyProcess } from '../shared'
import { Typography } from '@mui/material'


function ApplicationProcess() {
     return <div>

     <Typography variant='h4' align="center" style={{ fontWeight: 'bold' }} padding={5}>
          Nonprofits Application Process
     </Typography>
 
     <ApplyProcess/>
 
 </div>
}

export default ApplicationProcess
