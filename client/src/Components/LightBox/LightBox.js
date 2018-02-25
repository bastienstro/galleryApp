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
	      			<img src={photo.url_l} style={{height:photo.height_l+'px'}}/>
		  		</div>
		  		<div className="LightBox-description">
		  			<h2 className="LightBox-description-text LightBox-description-text--right">{photo.title}</h2> 
		  			<h2 className="LightBox-description-text LightBox-description-text--gray LightBox-description-text--left">{photo.ownername}</h2>
		  			<h2 className="LightBox-description-text LightBox-description-text--gray LightBox-description-text--right">{(typeof photo.datetaken!= "undefined"?photo.datetaken.slice(0,10):"")}</h2>
		  			<h2 className="LightBox-description-text LightBox-description-text--left"> {photo.views} views</h2>
		  			
			  			
		  		</div>
	  		</div>
      	</Modal>
      </React.Fragment> 
    );
  }
}

export default LightBox;
