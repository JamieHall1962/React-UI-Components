import React from 'react';
import './Button.css';

const ActionButton = props => {
    return <button className={props.buttonStyle}>{props.actionDisplay}</button>;
  };
  
  export default ActionButton;