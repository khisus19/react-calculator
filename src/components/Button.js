import React from 'react';
import '../style/Button.css'

function Btn(props) {

  const isOperator = val => {
    return isNaN(val) && (val !== '.') && (val !== '=');
  };

  return (
    <div 
      className={`btn-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
      {props.children}
    </div>
  );
}

export default Btn;