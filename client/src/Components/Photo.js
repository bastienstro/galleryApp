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
	    image.src = this.props.url_m;
	  });
  }	
	
  render() {
	  
	const { ownername,url_t,url_m,url_l,description,date_taken,views,title } = this.props;  
	  
    return (
      <div className="App-photo">
	  	 <img className={"App-photo-img "+(!this.state.loaded?"App-photo-img--blur":"")} src={this.state.loaded?url_m:url_t} />
	  	 <div className="App-photo-description">
	  	 	<h2 className="App-photo-caption">{title}</h2>
	  	 	<h2 className="App-photo-username">{ownername}</h2>
	  	 	
	  	 </div>
	  </div> 
    );
  }
}

export default Photo;
