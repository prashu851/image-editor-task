import React from 'react'
import './Instructor.css'
class Instructor extends React.Component {
    render(){
        return(
            <>
                <div className="create-task-btn">
                    <button className="create-btn">Create Task</button>
                    <button className="score-btn">Score Task</button>
                </div>
            </>
        )
    }
}
export default Instructor;