import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css'
import Task from '../../components/Task';


function MyApp() {
    const [value, onChange] = useState(new Date());


    return (
        <div className="container">
            <h1 className="display-6 mt-5 text-warning text-center">Personalised Calender With Event</h1>
            <div className="main mt-3">
                <Calendar
                    onChange={onChange}
                    value={value}
                />
            </div>
            <Task Date={value}/>
        </div>
    );
}

export default MyApp