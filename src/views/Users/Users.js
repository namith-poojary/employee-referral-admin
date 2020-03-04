/**
 * User Module
 * @module Users
 */

import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Table } from 'reactstrap';
import './users.css'
import axios from 'axios'

/**
 * class Users
 */
class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {            
      posts: [],
      departments:"",
      filtered:"",
    }
  }

  componentDidMount() {

    this.getPosts()
   

  }
  
/**
 * @property {Function} getPosts lists all the users with their department
 */
  getPosts() {
    const sam =localStorage.getItem('token');
       
     const  headers ={
      
        "Content-Type": "application/json",
        // "Accept":"*/*",
        'Authorization':sam
      }
      
 axios.get('https://employee-referals.herokuapp.com/api/users/',{headers:headers })
     

    
      .then(res => {
        // console.log(res)
          this.setState({
          posts: res.data,
          
         })
       
      })
  }
/**
 * @property {Function} getId deletes the user with the help of id
 */

  getId = (e) => {
    console.log(e._id)
    const samm =localStorage.getItem('token');
        
    
    const options={
      url:'https://employee-referals.herokuapp.com/api/users/userdelete',
      method:'POST',
      headers:{
       'Content-Type': 'application/json',
        'Authorization':samm
      },
      data:{
        _id: e._id
      }
    }
    const sam = {
      _id: e._id
    }
    axios(options)
      .then(res => {
        // const users = res.data
        console.log(res)
        this.getPosts()


      })
  }
  handleInputChange = event => {
    this.setState({ filtered: event.target.value });
  };


  render() {

    // const userList = this.state.posts
    const filteredData = this.state.posts.filter(val => {
      if(this.state.filtered.length){
        const lowerCaseValue= val["department"].toLowerCase()
        const lowerCase= val["name"].toLowerCase()
        const lower= val["role"].toLowerCase()
         return lowerCaseValue.includes(this.state.filtered.toLowerCase())||lowerCase.includes(this.state.filtered.toLowerCase())||lower.includes(this.state.filtered.toLowerCase())
      }
      return true
    });

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Users 
              </CardHeader> */}
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
        </div>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">E-mail</th>
                      <th scope="col">Department</th>
                      <th scope="col">Role</th>
                      <th scope="col">Phone.No</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((user) =>
                      <tr key={user._id}>
                        <th>{user.name}</th>
                        <td>{user.email}</td>
                        <td>{user.department}</td>
                        <td>{user.role}</td>
                        <td>{user.phone}</td>
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
    )
  }
}

export default Users;
