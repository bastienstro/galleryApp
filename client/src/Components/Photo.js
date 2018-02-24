import React from 'react';
import '../css/App.css'; 

class Photo extends React.Component {
	
  constructor(props) {
	  super(props)
	  this.state = {
		  loaded : false,
		  error  : false
	  }
  }
  
  componentDidMount() {
	  this.loadImage().then(() => this.setState({loaded : true}))
  }
  
  loadImage() {
	  return new Promise((resolve, reject) => {
	    const image = new Image();
	    image.onload = () => resolve();
	    image.onerror = err => reject(err);
	    image.src = this.props.url;
	  });
  }	
	
  render() {
    return (
      <div className="App-photo">
     
		 {<img className={"App-photo-img "+(!this.state.loaded?"App-photo-img--blur":"")}
		 	   src={this.state.loaded?this.props.url:this.props.thumbnail} /> }
		 
	  </div> 
    );
  }
}

export default Photo;
