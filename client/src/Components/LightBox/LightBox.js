import React from 'react'
import Modal from './Modal'
import LazyImage from '../LazyImage/LazyImage'
import '../../css/LightBox/LightBox.css'
 
class LightBox extends React.Component {
	
  constructor(props) {
	  super(props)
	  this.highResImage = {
		  highResUrl : '',
		  highResHeight : '100%',
		  highResWidth : '100%',
	  }
  }
  
  setMaxResImage() {
	
	const images = ["url_l", "url_c", "url_m"]
	
	for(var i = 0; i < images.length; i++) {
		if(this.props.photo.hasOwnProperty(images[i])) {
			let type = images[i].split('_')[1]
			return { highResUrl    : this.props.photo["url_"+type],
					 highResHeight : this.props.photo["height_"+type]+'px',
					 highResWidth : this.props.photo["width_"+type]+'px',
					}	
		}
	}
  }
  	
  render() {
	
	const { isOpen,photo } = this.props    
	let highResImage = {}
	if (isOpen)	
		highResImage = this.setMaxResImage()
	
    return (
      <React.Fragment>
      	<Modal isOpen={isOpen} onRequestClose={() => this.props.onRequestClose()} >
      	  {isOpen && 
      	 	<div className="LightBox">
      			<div className="LightBox-image" style={{height:`${highResImage.highResHeight}`,width:`${highResImage.highResWidth}` }}>
	      			<LazyImage  className="LightBox-lazy-item" thumbsrc={photo.url_m} src={highResImage.highResUrl} height={photo.height_l} alt={photo.title} />
		  		</div>
		  		<div className="LightBox-description">
		  			<h2 className="LightBox-description-text LightBox-description-text--right">{photo.title}</h2> 
		  			<h2 className="LightBox-description-text LightBox-description-text--gray LightBox-description-text--left">{photo.ownername}</h2>
		  			<h2 className="LightBox-description-text LightBox-description-text--gray LightBox-description-text--right">{(typeof photo.datetaken!== "undefined"?photo.datetaken.slice(0,10):"")}</h2>
		  			<h2 className="LightBox-description-text LightBox-description-text--left"> {photo.views} views</h2>
		  		</div>
		 	</div>
	  		}
      	</Modal>
      </React.Fragment> 
    );
  }
}

export default LightBox
