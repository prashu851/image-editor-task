import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
class DisplayTask extends React.Component {
    render(){
        return(
            <div className="task-card">
                {this.props.data.isSubmitted === true?
            <Card className="task-card-details">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="task-image"
                    height="140"
                    width="400"
                    image={this.props.data.taskImage}
                    style={{width:"100%",height:"100%"}}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.data.taskTitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{overflow:"hidden"}}>
                    {this.props.data.taskDetails}
                    </Typography>
                    <h3 className="task-level-indicator">{this.props.data.taskLevel}</h3>
                    </CardContent>
                </CardActionArea>
            </Card>
            :''}
        </div>
        )
    }
}
export default DisplayTask;