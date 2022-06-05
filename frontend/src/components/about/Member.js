import React from 'react'
import Header from './Header'
import MemberInfo from './MemberInfo'
import './about.css'


function Member() {
    const IMG_URI = "https://previews.123rf.com/images/studiostoks/studiostoks1604/studiostoks160400296/55726621-male-business-coach-draws-on-background-pop-art-retro-style-business-training-drawing-board.jpg";
    const LINK_IMAGE = "https://cdn-icons-png.flaticon.com/512/38/38669.png";
    const LINK = "https://uofablueprint.org"

    return (
        <>
            <Header text="Meet the Team"/>

            <div className='container'>
                <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
                <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
                <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
                <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>

            </div>

            <div className='container'>
            <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
            <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
            <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
            <MemberInfo image={IMG_URI} linkImage={LINK_IMAGE} link={LINK} name="Name Surname" position="position"/>
            </div>

        </>
    )
}

export default Member
