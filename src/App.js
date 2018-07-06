import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
     borderRadius: '10px',
     padding: '0px'
     //height: '100px'

  }
};


class Box extends Component {

constructor(props){
  super(props)

  this.state={
    name:'',
    phone:'',
    modalIsOpen: false,
    inputState: false
  }
  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
}


  openModal() {
    this.setState({modalIsOpen: true});
  }



  closeModal() {

    this.setState({modalIsOpen: false});

  }

  update(){
    this.setState({ inputState: true});
this
  }


  backround(){
    if(this.state.name !=='' || this.state.phone !=='' ){
      document.getElementById(this.props.time).style.backgroundColor = "#E3E3E3";
    } else {
      document.getElementById(this.props.time).style.backgroundColor = "#FFFFFF  ";
    }
  }


  onChangeName(e){

this.setState({name:e.target.value})
this.backround()
}

onChangePhone(e){
this.setState({phone:e.target.value})
this.backround()

}


  render(){
console.log(this.state.modalIsOpen);
    return (
      <button className='buttonNow' tooltip="Simple Tooltip"   onClick={this.openModal} id={this.props.time} style={{backgroundColor: '#FFFFFF', width: '200px', margin: 'auto',  border: '2px solid #FFFFFF', borderRadius: '7px', marginBottom: '5px ' }}>
        <Modal tooltip="Simple Tooltip"
                  isOpen={this.state.modalIsOpen}

                  onRequestClose={this.closeModal}

                  style={customStyles}
                  >
                  <div   style={{'borderStyle': 'solid',  width: '200px', margin: 'auto',  border: '3px solid white', }}>
                    <h4 style={{textAlign: 'center'}}>{this.props.time}</h4>
                  <div>
                <label style={{textAlign: 'left' , paddingRight: '3px'}}>Name:   </label>
                  <input
                    type="text"
                    value={this.state.name}
                   onChange={(e)=>this.onChangeName(e)}
                 />
                </div>
                <div>
                  <label style={{textAlign: 'left'}}>Phone: </label>
                    <input  type="text"
                      value={this.state.phone}
                 onChange={(e)=>this.onChangePhone(e)}
                  />
                    </div>

                        <button style={{textAlign: 'center'}} onClick={()=>this.update()}>Update</button>



                  </div>
         </Modal>


        <h4 >{this.props.time}</h4>
<div >
  <b> {this.state.inputState ? 'Name: ': ''}</b>
  <label> {this.state.inputState ? this.state.name: ''}</label>
</div>
<div>
  <b> {this.state.inputState ? 'Phone: ': ''}</b>
  <label> {this.state.inputState ? this.state.phone: ''}</label>
</div>



</button>
    )
  }
}


class App extends Component {

  constructor(props){
    super(props)

    this.state={call:0}
  }


  render() {
    return (
      <div className="App " style={{backgroundColor: '#1EAFFC', width: '500px', margin:'auto',  border: '4px solid #FFFFFF', borderRadius: '18px'}}>
          <h1 className="App-title">React Call Scheduler</h1>

        <Box time={'9am'} />
        <Box time={'10am'}/>
        <Box time={'11am'} />
        <Box time={'12pm'}/>
        <Box time={'1pm'} />
        <Box time={'2pm'} />
        <Box time={'3pm'} />
        <Box time={'4pm'} />
        <Box time={'5pm'} />


      </div>
    );
  }
}

export default App;
