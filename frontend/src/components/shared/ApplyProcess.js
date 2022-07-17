import React from 'react'
import ApplyProcess from '../../../src/data/nonprofitApplyProcess.json'
import { Typography, Box } from '@mui/material'


function ApplicationProcess() {
    
    
    return <div>


        {ApplyProcess.map(applyProcess => {
            return (
                   
                <div key = {applyProcess.number}>

                
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        ml: '30%',
                        mr: '30%',
                    }}>
                        
                        <Box>
                            <Typography marginRight={5} fontSize={90} color={'primary'} fontWeight={500}>
                                {applyProcess.number}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography color='primary' fontWeight={'bold'} fontSize={27} marginBottom={1}>
                                {applyProcess.title}
                            </Typography>
     
                            <Typography color='secondary'>
                                {applyProcess.body}
                            </Typography>
                        </Box>   

                    </Box>


                <Box sx={{
                    ml: '32.5%',
                }}>
                    <Typography fontSize={50} color={'primary'} fontWeight={'bold'}>
                        {applyProcess.divider}
                    </Typography>
                </Box>

        </div>

                )
        })}

    </div>

}

export default ApplicationProcess
