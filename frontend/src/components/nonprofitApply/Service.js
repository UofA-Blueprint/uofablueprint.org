import React from 'react'
import { Typography, Box} from '@mui/material'


function Service() {
    return <div>

        <Box sx={{
            bgcolor: 'secondary.light',

        }}>
          
          
        <Typography variant='h4' align="right" style={{ fontWeight: 'bold' }} padding={4}>
            Our Services             
        </Typography>
       

          
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ml: '10%',
            mr: '10%',
            
    
            
        }}>


               <Box component="img" marginRight={5} marginBottom={5}
                    sx={{ height: 125, width: 125 }}
                    src="/assets/monitor.png" />



               <Box marginBottom={5}>
                    <Typography color='primary' fontWeight={'bold'} fontSize={20} marginBottom={1}>Web Development</Typography>

                    <Typography color='secondary' >Web applications let your users access information from any browser.
                    This might be better for applications that need to be publicly available or ones that help facilitate task management.</Typography>
               
               </Box>
               
          </Box>
          </Box>
          
    </div>

}

export default Service
