import { PropTypes } from 'prop-types'
import React from 'react'

const Header = ({text}) => {
  return (
    <>
        <div className='header'>{text}</div>
    </>
  )
}

Header.propTypes = {
    text: PropTypes.string
}
export default Header