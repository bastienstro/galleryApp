import React from 'react';
import '../css/App.css';
import LazyImage from './LazyImage/LazyImage'

class Photo extends React.Component {
	
  render() {
	  
	const { ownername,url_t,url_m,title } = this.props;  
	  
    return (
      <div className="App-photo" onClick={() => this.props.onClick()} >
	  	 <LazyImage thumbsrc={url_t} src={url_m} />
	  	 <div className="App-photo-description">
	  	 	<h2 className="App-photo-caption">{title}</h2>
	  	 	<h2 className="App-photo-username">{ownername}</h2>
	  	 </div>
	  </div> 
    );
  }
}

export default Photo;
