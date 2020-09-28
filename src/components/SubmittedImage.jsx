import React from'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import SelectTaskScore from './SelectTaskScore';
import Divider from '@material-ui/core/Divider';
import './SubmittedImage.css'
class SubmittedImage extends React.Component {
    render(){
        return(
                <div className="card-container">
                    <Card className="score-task-details">
                        <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" style={{backgroundColor:"#181f1c"}}>
                        S
                        </Avatar>
                        }
                        title="Student Name"
                        subheader="  Task Submitted on September 28"
                        />
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="task-image"
                            image={this.props.src}
                            style={{width:"100%",height:"100%"}}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in velit dignissim, porta leo et, feugiat mauris. Morbi at erat cursus, laoreet diam in, tempor quam. Phasellus condimentum varius ipsum. Donec dictum porttitor viverra. Morbi dignissim sem non pharetra elementum. Quisque sagittis finibus tellus vitae fringilla. Morbi et magna sed justo feugiat dictum sed in erat. Nam nec sagittis neque.
                                </Typography>
                                <Divider style={{marginTop:"10px"}}/>
                                <SelectTaskScore />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
        )
    }
}

export default SubmittedImage;