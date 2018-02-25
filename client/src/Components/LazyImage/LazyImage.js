import React from 'react';
import '../../css/App.css'; 

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

    return (
    	<div className="Lazy-image">
   		  <img className={" Lazy-image-item Lazy-image-item--blur"+(this.state.loaded?" Lazy-image-item--hide":"")} src={thumbsrc} />
   		  <img className={" Lazy-image-item "+(this.state.loaded?" Lazy-image-item--show":"Lazy-image-item--hide")} src={src} onLoad={() => 					this.setState({loaded : true})}/>
   		</div>
    );
  }
}

export default LazyImage;
