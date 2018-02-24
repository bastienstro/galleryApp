import React from 'react'; 
import Modal from './Modal'
import '../../css/LightBox/LightBox.css'; 
 

class LightBox extends React.Component {
	
  constructor(props) {
	  super(props)
  }
  
  componentDidMount() {

  }
	
  render() {
	
	const { isOpen,photo } = this.props;    
	 console.log(photo)
    return (
      <React.Fragment>
      	<Modal isOpen={isOpen} onRequestClose={() => this.props.onRequestClose()} >
      		<div className="LightBox">
	      		<div className="LightBox-image">
	      			<img src={photo.url_m} />
		  		</div>
		  		<div className="LightBox-description">
		  			<h2 className="LightBox-description-title">{photo.title} <span>{photo.ownername}</span></h2>
		  			<h2 className="LightBox-description-title">{photo.datetaken}</h2>
			  			
		  		</div>
	  		</div>
      	</Modal>
      </React.Fragment> 
    );
  }
}

export default LightBox;
