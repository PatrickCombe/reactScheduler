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
    transform             : 'translate(-50%, -50%)'
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
      document.getElementById(this.props.time).style.backgroundColor = "#9ECEE2";
    } else {
      document.getElementById(this.props.time).style.backgroundColor = "#3498DB  ";
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
      <div   onClick={this.openModal} id={this.props.time} style={{'borderStyle': 'solid',  width: '200px', margin: 'auto',  border: '2px solid #3D4D52', borderRadius: '10px', marginBottom: '5px ' }}>
        <Modal
                  isOpen={this.state.modalIsOpen}

                  onRequestClose={this.closeModal}

                  style={customStyles}
                  >
                  <div   style={{'borderStyle': 'solid',  width: '200px', margin: 'auto',  border: '3px solid blue' }}>
                    <h4>{this.props.time}</h4>
                  <div>
                <label>Name: </label>
                  <input
                    type="text"
                    value={this.state.name}
                   onChange={(e)=>this.onChangeName(e)}
                 />
                </div>
                <div>
                  <label>Phone: </label>
                    <input  type="text"
                      value={this.state.phone}
                 onChange={(e)=>this.onChangePhone(e)}
                  />
                    </div>
                    <button onClick={()=>this.update()}>Update</button>

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



        </div>
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
      <div className="App " style={{backgroundColor: '#3498DB    ', width: '500px', margin:'auto',  border: '10px solid #3D4D52', borderRadius: '20px'}}>
          <h1 className="App-title">React Scheduler</h1>
            
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
