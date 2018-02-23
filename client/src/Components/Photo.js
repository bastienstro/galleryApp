import React from 'react';
import '../css/App.css'; 

class Photo extends React.Component {
	
  constructor(props) {
	  super(props)
  }
  
  componentDidMount() {
	  
  }	
	
  render() {
    return (
      <div className="App-photo">
		 <img className="App-photo-img" src={this.props.url} />
	  </div> 
    );
  }
}

export default Photo;
