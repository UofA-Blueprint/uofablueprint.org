import React from 'react'
import PropTypes from 'prop-types'
import './about.css'

const MemberInfo = ({image, linkImage, link, name, position }) => {
  return (
    <div className='member-info'>
        <img src={image} className="member-image"></img>

        <div className='member-container'>
            <div className='member-info'>
                <p style={{
                    fontSize: '20px',
                    margin: '0px'
                }}>{name}</p>
                
                <p style={{
                    fontSize: '15px',
                    margin: '0px'
                }}>{position}</p>
            </div>

            <a href={link}>  
                <img src={linkImage} className="link-image"></img> 
            </a>
        </div>

    </div>
  )
}

MemberInfo.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    linkImage: PropTypes.string,
    link: PropTypes.string
}

export default MemberInfo