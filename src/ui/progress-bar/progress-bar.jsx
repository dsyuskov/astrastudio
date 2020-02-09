import React from 'react';

import './progress-bar.scss';

export default function ProgressBar(props) {
  return (
    <div className="progress-bar">
      <div className="progress-bar__load" style={{width: props.progress + '%'}}></div>
    </div> 
  )
}