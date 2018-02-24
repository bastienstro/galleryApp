import React from 'react';
import '../css/App.css'; 
import Photo from './Photo'
import LightBox from './LightBox/Modal'

import { getPhotos } from '../actions/photos'

class App extends React.Component {
	
  constructor(props) {
	  super(props)
	  
	  this.state = {
		  photos : [],
		  page : 1,
		  pages : 100
	  }
  }
  
  componentDidMount() {
	  
	 getPhotos().then(photos => 
	 	this.setState({photos : photos.photo,
					   page : photos.page,
					   pages : photos.pages 									
	 }))
	  
  }
  
  componentDidUpdate() {
	  
	this.infiniteScroll(50,() => {
	
	let nextPage = this.state.page+1;
	if (nextPage != this.state.pages)
		getPhotos(nextPage)
		.then(photos => this.setState({photos : [...this.state.photos,...photos.photo],
					  				   page : photos.page,
					  				   pages : photos.pages 									
	 		  }))
	}
	)
  }
  
  infiniteScroll(distance,callback) {
	  
	let trigger = false  
	window.onscroll = (e) => {
		
		
    var _windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    	_scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
		
    if ((_windowHeight + _scrollPos) >= document.body.offsetHeight-distance) {
        if (!trigger)
        	callback()
         trigger = true;
    }
    else 
    	trigger = false;
   };  
	  
  }
  	
	
  render() {
	  
	console.log(this.state.page)  
	  
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <div className="wrapper">
        <div className="App-gallery">
         { this.state.photos && 
	        this.state.photos.map(photo => <Photo  {...photo} />) 	 
	         
	     }
        </div>
        </div>
        <LightBox isOpen={true} />
      </div>
    );
  }
}

export default App;
