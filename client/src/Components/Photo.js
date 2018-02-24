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

  render() {
	  
	const { ownername,url_t,url_m,url_l,description,date_taken,views,title } = this.props;  
	  
    return (
      <div className="App-photo" onClick={() => this.props.onClick()} >
	  	 <img className={"App-photo-img App-photo-img--blur"+(this.state.loaded?" App-photo-img--hide":"")} src={url_t} />
	  	 <img className={"App-photo-img "+(this.state.loaded?" App-photo-img--show":"App-photo-img--hide")} src={url_m} onLoad={() => this.setState({loaded : true})}/>
	  	 <div className="App-photo-description">
	  	 	<h2 className="App-photo-caption">{title}</h2>
	  	 	<h2 className="App-photo-username">{ownername}</h2>
	  	 	
	  	 </div>
	  </div> 
    );
  }
}

export default Photo;
