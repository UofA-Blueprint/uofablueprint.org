import React from 'react'
import FaqData from '../data/NonprofitFaqData.json'
import { Banner, ApplyProcess, Faq } from '../components/shared'
import { Service, Criteria } from '../components/nonprofitApply'

function NonprofitApply() {
    return (
        <div>
            <Banner />
            <Service />
            <ApplyProcess />
            <Criteria />
            <Faq FaqData={FaqData}/>
        </div>
    )
}

export default NonprofitApply
