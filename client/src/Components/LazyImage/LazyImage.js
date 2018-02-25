import React from 'react';
import '../../css/LazyImage/LazyImage.css';

class LazyImage extends React.Component {
	
  constructor(props) {
  	super(props)
  	  this.state = {
		  loaded : false
	  }
  }
  	
  render() {
	  
    const {thumbsrc,src,className} = this.props
	let additionalClass=typeof className !== 'undefined'?className:"";
	
    return (
    	<div className="Lazy-image">
   		  <img className={additionalClass+" Lazy-image-item Lazy-image-item--blur"+(this.state.loaded?" Lazy-image-item--hide":"")} 
   		  	   src={thumbsrc} />
   		  <img className={additionalClass+" Lazy-image-item "+(this.state.loaded?" Lazy-image-item--show":"Lazy-image-item--hide")} 
   		       src={src} onLoad={() => this.setState({loaded : true})}
   		        		       
   		       />
   		</div>
    );
  }
}

export default LazyImage;
