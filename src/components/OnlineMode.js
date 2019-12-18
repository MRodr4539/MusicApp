import React from 'react';
// import { Card, CardContent, Typography, Switch } from '@material-ui/core';
import { FormControlLabel, FormGroup, Switch, } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const OnlineMode = props => (

    
      <Card className='online-switch'>
        <CardContent>
        <h3>Online Mode</h3>  
          <p>Is this application connected to the internet?</p>
        <div classname='on-off'>
          <FormGroup>
              <FormControlLabel
                control={
                    <Switch
                        checked={props.onlineState}
                        onChange={props.onlineFunc}
                      />}
                    label='Online'
              />

          </FormGroup>
          </div>  
        </CardContent>
      </Card>
    


)

export default OnlineMode;




{/* <Card className="card">
    <CardContent className="insideCard">
    <Typography color="textSecondary" gutterBottom>
     Online Mode
     </Typography>
    <Typography variant="h5" component="h2">
     </Typography>
    <Typography variant="body2" component="p">
     Is this application connected to the internet?
        </Typography>
        </CardContent>
        <CardActions className="switch">
         <Switch
        checked={this.state.online}
         onChange={this.handleChange('online')}
        value="online"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </CardActions>
        </Card> */}