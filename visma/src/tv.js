import './App.css';
import React from 'react';
import Clock from 'react-live-clock';
import Timeline from './timeline';

function Tv() {

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return (
      <div>
        <Timeline />
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'EU/Bratislava'} className="hodiny"/>
        <p className="hodiny">{date} {month<10?`0${month}`:`${month}`} {year}  </p>
      </div>
    );
}

export default Tv;
