import React from 'react'
import ApplyProcessData from '../data/nonprofitApplyProcess.json'
import FaqData from '../data/NonprofitFaqData.json'
import { Banner, ApplyProcess, Faq } from '../components/shared'
import { Service, Criteria } from '../components/nonprofitApply'

function NonprofitApply() {
    return (
        <div>
            <Banner
                header="For Nonprofits"
                body="As a partner, Blueprint will work with you to develop technology that turns your vision into a reality, completely free of charge.."
                buttonText="Work with us"
                externalLink="https://forms.gle/wZy3PSgeywXSWGfh6"
            />
            <Service />
            <div id="NonprofitApplyProcess" style={{ marginBottom: '3%' }}>
                <ApplyProcess
                    ApplyProcessData={ApplyProcessData}
                    title="Nonprofits Application Process"
                />
            </div>

            <Criteria />
            <Faq FaqData={FaqData} />
        </div>
    )
}

export default NonprofitApply
