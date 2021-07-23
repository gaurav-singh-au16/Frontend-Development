import React, { useEffect, useState } from 'react'
import axios from 'axios'

const createTask = (props, event) => {
    const data = [props, {event}]
    console.log(data)
    

    axios.post("http://localhost:3001/node", data).then(() => {
        console.log("sucessfull send the data")
    }).catch(() => {
        console.log("Something went wrong. Plase try again later");
    });
}



function Task(props) {
    const [input, setInput] = useState('')
    
    const [data, updateData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(res => updateData(res.data))            
            .catch(error => console.log("Error"))
    }, [])
    console.log(data)
    
    return (
        <div className="container border border-dark rounded w-50">
            <h1 className="display-6">No Task For today</h1>
            <button className="btn-primary" data-bs-toggle="modal" type="button" data-bs-target="#staticBackdrop">Create Now</button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add Your Task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <input className="modal-body form-control" value={input}
                        onInput={e => setInput(e.target.value)} 
                        >
                            
                        </input>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" 
                            onClick={() => createTask(props, input)}
                            >Save Task</button>
                        </div>
                    </div>
                </div>
            </div>
                {data.map((project, key) => (
                    
                    <h1 className="display-6" key={key}>Upcoming Task: {project.events} on {project.date}</h1>
                ))}
        </div>
    )
}

export default Task
