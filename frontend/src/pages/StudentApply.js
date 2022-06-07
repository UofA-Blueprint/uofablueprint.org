import React from 'react'

import ApplyProcessData from '../data/nonprofitApplyProcess.json'
import { Banner, ApplyProcess, Faq } from '../components/shared'
import { Criteria } from '../components/studentApply'

function StudentApply() {
    return (
        <div>
            <Banner />
            <ApplyProcess
                ApplyProcessData={ApplyProcessData}
                title="Students Application Process"
            />
            <Criteria />
            <Faq name="fil" />
        </div>
    )
}

export default StudentApply
