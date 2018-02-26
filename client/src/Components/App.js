import React from 'react';
import '../css/App.css'; 
import Photo from './Photo'
import LightBox from './LightBox/LightBox'

import { getPhotos } from '../actions/photos'

class App extends React.Component {
	
  constructor(props) {
	  super(props)
	  
	  this.state = {
		  photos : [],
		  page : 1,
		  pages : 100,
		  selectedPhoto : {}
	  }
	  /** attributes for handling infiniteScroll **/
	  this.scroll = {
		  	triggered : false,
		  	triggerDistance : 50
	  }
	 
	  this.handleScroll = this.handleScroll.bind(this)
  }
  
  componentDidMount() {
	  
	getPhotos().then(photos => 
	 	this.setState({photos : photos.photo,
					   page : photos.page,
					   pages : photos.pages 									
	 }))
	 
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnMount() {
	window.addEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(e) {
	/* When we scroll to the bottom of the page */
	/* It will call the API to fetch the next 10 photos (10 is specified server-side) */
	/* and add it to our state	*/
		  
	this.infiniteScroll(() => {
		let nextPage = this.state.page+1;
		if (nextPage !== this.state.pages)
			getPhotos(nextPage)
			.then(photos => this.setState({photos : [...this.state.photos,...photos.photo],
						  				   page : photos.page,
						  				   pages : photos.pages 									
		 		  }))
	})
  }
  
  infiniteScroll(callback) {
	/** We use a triggered boolean to just call our callback once when the condition is met */  
	let _windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    	_scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
		
    if ((_windowHeight + _scrollPos) >= document.body.offsetHeight-this.scroll.triggerDistance) {
        if (!this.scroll.triggered) callback()
         this.scroll.triggered = true
    }
    else 
    	this.scroll.triggered = false
  }
  	
  render() {
	  
	const isLightBoxOpen = this.state.selectedPhoto.hasOwnProperty('id')  
	  
    return (<div className="App">
        <header className="App-header">
         	 <h1 className="App-header-title">Gallerist</h1>
        </header>
        <div className="wrapper">
        <div className="App-gallery">
         	{this.state.photos && this.state.photos.map((photo,index) => <Photo key={index} {...photo} onClick={() => this.setState({selectedPhoto : photo})} />)}
        </div>
        </div>
        <LightBox isOpen={isLightBoxOpen} photo={this.state.selectedPhoto} onRequestClose={() => this.setState({selectedPhoto: {}})} />
      </div>
    );
  }
}

export default App