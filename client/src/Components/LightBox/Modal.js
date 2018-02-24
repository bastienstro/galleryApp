import React from 'react';
import '../../css/LightBox/Modal.css'; 

class Modal extends React.Component {
	
  componentDidMount() {

  }
  
  
  componentDidUpdate() {
	  
	  if (this.props.isOpen) {
		  this.overlay.style.display="flex"
		  setTimeout(() => {this.overlay.style.opacity=1},500)
	   }
	  else {
  	      this.overlay.style.opacity=0;
	  	  setTimeout(() => {this.overlay.style.display="none"},500)
	  }
  }
	
  render() {
	  
		  
    return (
      <div ref={(overlay) => {this.overlay=overlay}} 
      	   style={{display:'none'}}
      	   className="Modal-overlay" 
      	   onClick={() => this.props.onRequestClose()} >	
	  		<div className={"Modal-container"}>
	  			{this.props.children}
	  		</div>		 
	  	
	  </div> 
    );
  }
}

export default Modal;
