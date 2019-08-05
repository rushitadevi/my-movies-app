import React,{Component} from "react";
import {Modal,ModalHeader,ModalBody,ModalFooter,Button} from "reactstrap";
class Model extends Component
{
  
   
  render()
  {
    console.log(this.props)
      return(
         
          <>
        <div>     
         
        <Modal  show={this.props.showMo} >
          <ModalHeader >Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={this.props.showModal}>Do Something</Button> */}
            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */} 
          </ModalFooter>
        </Modal>
      </div>
    
    </>
      );
  }
}

export default Model;