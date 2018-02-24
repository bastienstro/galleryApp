import React from 'react'; 
import './Modal'

class LightBox extends React.Component {
	
  constructor(props) {
	  super(props)
  }
  
  componentDidMount() {

  }
	
  render() {
	
	const { isOpen } = this.props
	  
	  
    return (
      <React.Fragment>
      	<Modal isOpen={isOpen} onRequestClose={() => this.props.onRequestClose()} >
      	
      	
      	</Modal>
      </React.Fragment> 
    );
  }
}

export default LightBox;
