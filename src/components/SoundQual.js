import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const SoundQual = props => (
    <Card className='sound-quality'>
      <CardContent>
        <h3>Sound Quality</h3>
          <p>Manually control the music quality in the event of a poor connection.</p>
          <div className='high-low'>
            <CardActions>
              <FormControl>
                    <Select
                        value={props.qualityState}
                        onChange={props.qualityFunc}>
                            <MenuItem value={'low'}>Low</MenuItem>
                            <MenuItem value={'normal'}>normal</MenuItem>
                            <MenuItem value={'high'}>High</MenuItem>
                        </Select>
                </FormControl>
            </CardActions>
              
          </div>
      </CardContent>
    </Card>
)


export default SoundQual;









{/* <Card className="card">
          <CardContent className="insideCard">
            <Typography color="textSecondary" gutterBottom>
              Sound Quality
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography variant="body2" component="p">
              Manually control the music quality in event of poor connection.
            </Typography>
          </CardContent>
          <CardActions className="switch">
          <TextField className="dropDown"
            select label="Low"
            select label="Normal"
            select label="High"> 
          </TextField>
          
         
          </CardActions>
        </Card> */}