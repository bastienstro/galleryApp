import React from 'react';
import '../css/App.css'; 
import Photo from './Photo'
import { getPhotos } from '../actions/photos'

class App extends React.Component {
	
  constructor(props) {
	  super(props)
	  
	  this.state = {
		  photos : {}
	  }
  }
  
  componentDidMount() {
	  
	 getPhotos().then(photos => this.setState({photos : photos.photos}))
	  
  }	
	
  render() {
	  
	console.log(this.state.photos)  
	  
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <div className="wrapper">
        <div className="App-gallery">
         { this.state.photos.photo && 
	        this.state.photos.photo.map(photo => 
	        	<Photo  thumbnail={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_t.jpg`} 
		         		url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
		        />
		        	) 	 
	         
	     }
        </div>
        </div>
      </div>
    );
  }
}

export default App;
