import React from "react";
import '../style/ClearBtn.css'

const ClearBtn = (props) => (
  <div className='clear-btn' onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ClearBtn;