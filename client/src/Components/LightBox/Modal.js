import React from 'react';
import '../../css/LightBox/Modal.css'; 

class Modal extends React.Component {
	
  componentDidMount() {

  }
	
  render() {
	  
	const { isOpen } = this.props
	  
    return (
      <div className={"Modal-overlay "+(isOpen?"Modal-overlay-in":"Modal-overlay-out")} 
      	   onClick={() => this.props.onRequestClose()}	   
      >
	  		<div className={"Modal-container"}>
	  			{this.props.children}
	  		</div>		 
	  </div> 
    );
  }
}

export default Modal;
