import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'

// import './progress.css'

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: ' ',
      salary: { value: 0 },
      email: ' ',
      password: ' ',
      usertype: ' ',
      phone: { value: 0 },
      department: ' ',
      role: ' ',

    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  
  
  handleSubmit = (e) => {
    const one = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      usertype: this.state.usertype,
      phone: this.state.phone,
      department: this.state.department,
      role: this.state.role,
      salary: this.state.salary
    }
   
    const sam =localStorage.getItem('token');
    console.log(sam);
        
    const headers= {
     
      "Content-Type": "application/json",
       "Accept":"*/*",
       "Authorization":sam
   }
 
    // console.log(one)
    axios.post('https://employee-referals.herokuapp.com/api/users',{headers},one)
      .then((response) => {
        if (response) {
          console.log(response)
          alert("added")
        }
      })
      .catch((error) => {
        console.log(error);
        
      })



  }
  render() {

    return (
      <div>
<h3>Add Admine/Employee</h3>
        <div className="base-container">

          <div className="content" >
            <div className="form">
              <div className="form-group">
                <label>Name       .</label>
                <p><input type="text" id="name" name="name" placeholder="name" onChange={this.handleChange} /></p>
              </div>
              <div className="form-group">
                <label>Email-Id         .</label>
                <p><input type="text" id="email" name="email" placeholder="email" onChange={this.handleChange} /></p>
              </div>
              <div className="form-group">
                <label>Password        .</label>
                <p> <input type="Password" id="password" name="password" placeholder="password" onChange={this.handleChange} /></p>
              </div>

              <div className="form-group">
                <label >Phone      .</label>
                <p> <input type="number" id="phone" name="phone" placeholder="phone" onChange={this.handleChange} /></p>
              </div>
              <div className="form-group">
                <label>Department       .</label>
                <p>  <input type="text" id="department" name="department" placeholder="department" onChange={this.handleChange} /></p>
              </div>
              <div className="form-group">
                <label>Role           .</label>
                <p>  <input type="text" id="role" name="role" placeholder="role" onChange={this.handleChange} /></p>
              </div>
              <div className="form-group">
                <label>Usertype.</label>
                <p>  <input type="text" id="usertype" name="usertype" placeholder="usertype" onChange={this.handleChange} /></p>
              </div>
              <div className="form-group">
                <label >Salary        .</label>
                <p> <input type="number" id="salary" name="salary" placeholder="salary" onChange={this.handleChange} /></p>
              </div>
            </div>
          </div>
        </div>

        <Button  color="primary" onClick={this.handleSubmit}>Submit</Button>


      </div>



    )
  }
}

export default Add;
