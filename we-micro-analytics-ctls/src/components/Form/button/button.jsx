import React from 'react'
import PropTypes from 'prop-types'

import { ButtonWrapper } from './style'
import LoaderButton from '../loaderButton/loaderButton'

const Button = ({
  dataId,
  typeClass,
  size, 
  disabled, 
  dark,
  loading,
  icon,
  fullWidth,
  ...props
}) => {

  const getClassList = () => {
    let classList = `${typeClass} ${size} ${getFullWidth()} `;
    classList += dark? 'dark': 'light';
    classList += icon? ' icon': '';
    return classList;
  }

  const getFullWidth = () => {
    return fullWidth ? 'full-width' : ''
  }

  return (
    <ButtonWrapper
      data-id={`btn-${dataId}`} 
      className={getClassList()} 
      disabled={disabled || loading}
      {...props}
    > 
      {props.children? props.children: icon}
      {loading && <LoaderButton className="icon" size='24px'/>}
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  typeClass: 'primary',
  size: 'middle', 
  disabled: false, 
  dark: false,
  loading: false,
  fullWidth: false
};

Button.propTypes = {
  /** Define principal style */
  typeClass: PropTypes.oneOf(['primary', 'secondary', 'text']),
  /** type of button */
  size: PropTypes.oneOf(['mini', 'small', 'middle', 'large']),
  /** Disabled state of button */
  disabled: PropTypes.bool,
  /** Adapt button for background dark */
  dark: PropTypes.bool,
  /** Set loading animation and disabled button */
  loading: PropTypes.bool,
  /** Set the icon component of button */
  icon: PropTypes.element,
  /** Set width 100% */
  fullWidth: PropTypes.bool,
}

export default Button
