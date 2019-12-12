import React, {Component} from "react";
import OnlineMode from '../components/OnlineMode';
import MasterVol from '../components/MasterVol';
import SoundQual from '../components/SoundQual';



class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      online: true,
      notifications: [],
      volume: 30,
      qulaity: 'normal',
    };
  } 


toggleNotification = (msg) => {
  const msgIndex = this.state.notifications.indexOf( msg )

      if ( this.state.notifications.includes( msg )){
            this.state.notifications.splice( msgIndex, 1)
      } else {
          this.setState({ notifications: [...this.state.notifications, msg] })
      }
}
addNotification = ( msg ) => {
  this.setState({ notifications: [...this.state.notifications, msg] })
}
removeNotification = ( msg ) => {
  const msgIndex = this.state.notifications.indexOf( msg )
  this.state.notifications.splice( msgIndex, 1 )
}


toggleOnline = () => {
  this.setState({ online: !this.state.online })

  const msg = "Your application is offline. You won't be able to share or stream to other devices"

  this.toggleNotification( msg )
}

volumeSlider = ( newValue ) => {
  this.setState({ volume: newValue })
  
  const msg = 'Listening to music at a high volume could cause long-term hearing loss.'

  if( (newValue > 80) && !this.state.notifications.includes( msg )) {
    this.addNotification( msg )
  }
  if ( (newValue <= 80) && !this.state.notifications.includes( msg )){
    this.removeNotification( msg )
  }
}

soundQuality = ( event ) => {
  this.setState({ quality: event.target.value })

  const msg = "Music quality is degraded. Increase quality if your connection allows it."

  if ( (event.target.value === 'low') && !this.state.notifications.includes( msg )){
    this.addNotification( msg )
  }
  if ( (event.target.value !== 'low') && this.state.notifications.includes( msg )){
    this.removeNotification( msg )
  }
}

render(){
  return (
    <div className='dashboard-wrap'>
          <div className='dashboard-control'>
              <OnlineMode
                  onlineState={this.state.online}
                  onlineFunc={this.toggleOnline}>
              </OnlineMode>
          </div>
          <div classname='dashboard-control'>
              <MasterVol
                  volumeState={this.state.volume}
                  volumeFunc={this.volumeSlider}>
              </MasterVol>
          </div>
          <div className='dashboard-control'>
              <SoundQual
                  qualityState={this.state.quality}
                  qualityFunc={this.soundQuality}>
              </SoundQual>
          </div>
    
          <div className='notifications frame-top'>
                <h3>Notifications:</h3>
                {this.state.notifications.map((item, index)=>(
                    <p key={index}>{item}</p>
                ))}
          </div>
    </div>
  )
}
  
}


//   render(){
//   return (
// <div>
//      <OnlineMode></OnlineMode>

//      <MasterVol></MasterVol>

//      <SoundQual></SoundQual>

        
        
        
// </div>
   
    
//   );
// }
// }

export default Dashboard;



