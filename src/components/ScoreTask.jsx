import React from 'react'
import SubmittedImage from './SubmittedImage';
import './ScoreTask.css'
class ScoreTask extends React.Component {
    constructor(){
        super();
        this.state={
            images:["https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
                    "https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
                    "https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w",
                    "https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I",
                    "https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs"],
            index:0
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            index:this.state.index+1
        })
    }
    render(){
        return(
                <>
                    {this.state.index === 0 && <SubmittedImage src={this.state.images[this.state.index]} />} 
                    {this.state.index === 1 && <SubmittedImage src={this.state.images[this.state.index]} />}
                    {this.state.index === 2 && <SubmittedImage src={this.state.images[this.state.index]} />}
                    {this.state.index === 3 && <SubmittedImage src={this.state.images[this.state.index]} />}
                    {this.state.index === 4 && <SubmittedImage src={this.state.images[this.state.index]} />}
                    <div className="next-btn-div">
                        <button className="next-btn" onClick={this.handleClick}>Next</button>
                    </div>
                </>
        )
    }
}
export default ScoreTask;