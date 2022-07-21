import React from 'react'
import ApplyProcessData from '../data/nonprofitApplyProcess.json'
import { Banner, ApplyProcess, Faq } from '../components/shared'
import { Service, Criteria, ApplicationProcess } from '../components/nonprofitApply'

function NonprofitApply() {
    return (
        <div>
            <Banner />
            <Service />
            <ApplicationProcess />
            <ApplyProcess ApplyProcessData={ApplyProcessData}/>
            <Criteria />
            <Faq />
        </div>
    )
}

export default NonprofitApply
