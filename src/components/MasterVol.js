import React, { Component } from 'react';
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class MasterVol extends Component {
    constructor(props){
        super(props);
        this.state = {
            volume: this.props.volumeState,
            mute: false,
            previousVolume: this.props.volumeState,
        }
    }

    muteVolume = (event, value) =>{
        let newMute = !this.state.mute
        this.setState({
            mute: newMute,
            previousVolume: this.state.volume,
            volume: ( newMute ? 0 : this.state.previousVolume )
        })
    };
    handleChange = ( event, value ) => {
        this.setState({volume: value})
        this.props.volumeFunc( value )
    }

    render() {
        return(
           
            <Card className='volume-card'>
               <CardContent>
                <Typography id='slider' gutterBottom>
                    Volume
                </Typography>
                <Slider
                    defaultValue={this.state.volume}
                    valueLabelDisplay='on'
                    step={10}
                    marks
                    min={0}
                    max={100}
                    value={this.state.volume}
                    onChange={this.handleChange}
                />
                <CardActions>
                    <Button size='small' onClick={()=>this.muteVolume()}>
                    {this.state.mute ? 'Unmute' : 'Mute'}</Button>
                </CardActions>
                </CardContent>
            </Card>
                
                
           
        )
    }
}









{/* <Card className="card">
          <CardContent className="insideCard">
            <Typography color="textSecondary" gutterBottom>
              Master Volume
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography variant="body2" component="p">
              Overrides all other sound settings in this application.
            </Typography>
          </CardContent>
          <CardActions className="switch">
          <Slider
            defaultValue={30}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={100}
          />
          </CardActions>
        </Card> */}
