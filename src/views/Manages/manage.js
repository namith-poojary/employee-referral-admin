/**
 * Module to add job,view and delete job
 * @module Manage
 */


import React, { Component } from 'react';
import {
  Card, CardBody, Col, Row, Table, Button, 
 Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './manage.css'


/**
 * class which is used to manage all the jobs
 */
class Manage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      model: false,
      role: '',
      qualification: '',
      salary: { value: 0 },
      department: '',
      experience: '',
      con: true,
      referalbonus: { value: 0 },
      filterer:"",
      
 
 

    }
    this.toggle = this.toggle.bind(this);
    this.toggles = this.toggles.bind(this);
    
  }
  componentDidMount() {

    this.getPosts()

    
  }
  toggles(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
    this.setState({
      dropdownOpen: newArray,
    });
  }
  /**
   * 
   * @property {Function} getPosts gets the header details for that admin
   */
  getPosts() {
    const sam =localStorage.getItem('token');
        
    const  headers ={
      
      "Content-Type": "application/json",
      // "Accept":"*/*",
      'Authorization':sam 
    }
  
    axios.get('https://employee-referals.herokuapp.com/api/job/adminjob/',{headers})
      .then(res => {
        this.setState({
          posts: res.data,
      
        })
        
        console.log(res)
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  //add job
  /**
   * 
   * @param {Object} postObject contains all the details of the job
   * @property {Function} addPosts adds the job
   */
  addPosts(postObject) {
    const sam =localStorage.getItem('token');
        
    const options={
      url:'https://employee-referals.herokuapp.com/api/job',
      method:'POST',
      headers:{
       'Content-Type': 'application/json',
        'Authorization':sam
      },
      data:postObject
     
    }
    const  headers ={
      
      "Content-Type": "application/json",
      // "Accept":"*/*",
      'Authorization':sam 
    }
    console.log(postObject)
    
    axios(options)
      .then((response) => {
        if (response) {
          this.getPosts()
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
    });
  }
  handleSubmit = (e) => {
    
   
    // if (this.state.department == test)   //test is token to be taken from login data
    // {
      const one = {
      role: this.state.role,
      qualification: this.state.qualification,
      salary: this.state.salary,
      department: this.state.department,
      experience: this.state.experience,
      referalbonus: this.state.referalbonus,
    }
    this.addPosts(one)
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  // }
  // else{
  //   window.alert("cannot add job to this department");
  // }
    
  
  

  }
/**
 * 
 * deletes the job with the help of ID
 */
  //delete post
  getId = (e) => {
    console.log(e._id)
    const samm =localStorage.getItem('token');
    
       
    const headers= {
      "Accept":"*/*",
       "Content-Type": "application/json",
        // "Accept":"*/*",
        'Authorization':samm,
        
    }
    const options={
      url:'https://employee-referals.herokuapp.com/api/job/jobdelete',
      method:'POST',
      headers:{
       'Content-Type': 'application/json',
        'Authorization':samm
      },
      data:{
        _id: e._id
      }
    }
    console.log(options)
 
    axios(options)
      .then(res => {
        
        console.log(res)
        this.getPosts()


      })
  }
 
  // handleInputChange = (e) => {
  //    this.setState({ [e.target.id]: e.target.value })
  //   }  

  //   handleSubmits = (e) => {
  //    // e.preventDefault();
  //     const body = {
  //       search: this.state.searchkey
  //     }
  //    console.log(body)
  //     axios.post('https://employee-referals.herokuapp.com/api/job/search',body)
  //     .then(res => {
  //         this.setState({
  //         posts: res.data.data
  //        })
        
  //        //console.log(this.state.posts)
  //        console.log(res)

  //       })

  //   }
  handleInputChange = event => {
    this.setState({ filterer: event.target.value });
  };

  

render() {
   const filteredData = this.state.posts.filter(val => {
      if(this.state.filterer.length){
        const lowerCaseValue= val["department" ].toLowerCase()
        const lower=val["qualification"].toLowerCase()
        const lowers= val["role"].toLowerCase()
      return (lowerCaseValue.includes(this.state.filterer.toLowerCase()) || lower.includes(this.state.filterer.toLowerCase()) ||lowers.includes(this.state.filterer.toLowerCase()))
      
      }
    
      return true
    });

    
     return (
      <div>
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
               <CardBody>
              <div className="searchForm">
        <form>
          <input
            id="searchkey"
            placeholder="Search for..."
            name="filter"
            onChange={this.handleInputChange}
          />
        </form>
        {/* <Button onClick={this.handleSubmits}></Button> */}
        {/* <div>{this.state.filteredData.map(e => <p>{e.name}</p>)}</div> */}
      </div>
              </CardBody>
            </Card>
            </Col>
            </Row>
            </div>
        <div className="animated fadeIn">
          <Row>
            <Col xl={12} >
              <Card>
                {/* <CardHeader>
                  <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
                </CardHeader> */}
                <CardBody>
                  <Table responsive hover>
                    <thead>
                      <tr>
                      <th scope="col">Role</th>
                        <th scope="col">Qualification</th>
                        <th scope="col">Department</th>
                        <th scope="col">Experience</th>
                        <th scope="col">Salary</th>
                        <th scope="col">ReferalBonus</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((user, index) =>
                        <tr key={user._id}>
                        <th>{user.role}</th>
                          <th>{user.qualification}</th>
                          <td>{user.department}</td>
                          <td>{user.experience}</td>
                          <td>{user.salary}</td>
                          <td>{user.referalbonus}</td>
                          <button className="btn btn-danger" onClick={(e) => { this.getId(user) }}>Delete</button>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="but">
          <Button className="Button" onClick={this.toggle}>{this.props.buttonLabel}ADD</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>ADD JOB</ModalHeader>
            <ModalBody>
              <div className="base-container">
              <div className="content" >
                  <div className="form">
                    <div className="form-group">
                      <label htmlFor="empid">Role    .</label>
                      <input type="text" id="role" name="role" placeholder="role" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="empid">Qualification.</label>
                      <input type="text" id="qualification" name="qualification" placeholder="qualification" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="username">Salary.</label>
                      <input type="number" id="salary" name="salary" placeholder="salary" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Department.</label>
                      <input type="text" id="department" name="department" placeholder="department" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Experience.</label>
                      <input type="text" id="experience" name="experience" placeholder="experience" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">ReferalBonus.</label>
                      <input type="number" id="referalbonus" name="referalbonus" placeholder="referalbonus" onChange={this.handleChange} />
                    </div>

                 </div> 
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleSubmit} >Submit</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
         </div>
</div>


        )
      }
    }
    
    export default Manage;
    