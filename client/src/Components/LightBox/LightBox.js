import React from 'react'; 
import Modal from './Modal'

class LightBox extends React.Component {
	
  constructor(props) {
	  super(props)
  }
  
  componentDidMount() {

  }
	
  render() {
	
	const { isOpen,photo } = this.props;    
	 console.log(photo)
    return (
      <React.Fragment>
      	<Modal isOpen={isOpen} onRequestClose={() => this.props.onRequestClose()} >
      		<img src={photo.url_l} />
      	
      	</Modal>
      </React.Fragment> 
    );
  }
}

export default LightBox;
