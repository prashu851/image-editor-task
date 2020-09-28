import React from 'react'
import './CreateTask.css'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import image from '../images/image.jpg'
import DisplayTask from './DisplayTask'
class CreateTask extends React.Component {
    constructor(){
        super();
        this.state={
            taskImage:image,
            taskTitle:'',
            taskDetails:'',
            taskLevel:'',
            open:false,
            isSubmitted:false
        }
        this.handleClickOpen=this.handleClickOpen.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleSelect=this.handleSelect.bind(this)
    }
    handleClickOpen = () => {
        this.setState({
            open:true
           })
       
   }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }
    handleSelect(event){
        this.setState({
            taskLevel:event.target.value
        })
    }
    handleSubmit(event){
        this.setState({
            open:false,
            isSubmitted:true
        })
        console.log(this.state.taskTitle)
    }
    render(){
        return(
                <div className="container">
                    <div className="add-task">
                        <Button
                        className="add-task-btn"
                        color="primary"
                        startIcon={<AddIcon  />}
                        disableRipple={true}
                        onClick={this.handleClickOpen}
                        variant="outlined"
                        >
                        Add Task
                        </Button>
                        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="add-task-title" aria-describedby="add-task-description" maxWidth="sm" fullWidth={true}>
                            <DialogTitle id="add-task-title">{"Create Task"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="add-task-description">
                                    <div className="task-description">
                                        <label>
                                        Image for Task<br />
                                        <input className="image-upload" id="icon-button-file" type="file" />
                                        </label>
                                        <label>
                                        Task Title<br />
                                        <input type="text" name="taskTitle" onChange={this.handleChange} />
                                        </label>
                                        <label>
                                        Task Details<br />
                                        <textarea name="taskDetails" onChange={this.handleChange} rows="40" />
                                        </label><br />
                                        <label>
                                        Task Level<br />
                                        <Select
                                        className="select-task-level"
                                        value={this.state.taskLevel}
                                        onChange={this.handleSelect}
                                        variant="outlined"
                                        fullWidth
                                        >
                                            <MenuItem value="Beginner">Beginner</MenuItem>
                                            <MenuItem value="Intermediate">Intermediate</MenuItem>
                                            <MenuItem value="Advanced">Advanced</MenuItem>
                                        </Select>
                                        </label>
                                    </div>
                                </DialogContentText>
                                <Divider />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleSubmit} variant="contained" color="primary">Submit</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <DisplayTask data={this.state} />
                </div>
        )
    }
}

export default CreateTask;