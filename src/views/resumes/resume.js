/**
 * Resume module
 * @module resumes
 */

import React, { Component } from 'react';

import {  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import pdf from './harsh.pdf'


import axios from 'axios';

//import '../css/button1.css';
import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * class Resume
 */


class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            posts:[],
        
        };
       
      }
  


  componentDidMount () {
    
    this.getPosts()
   
}
/**
 * @property {Function} getPosts lists all the resumes 
 */
getPosts() {
  const sam =localStorage.getItem('token');
       
     const  headers ={
      
        "Content-Type": "application/json",
        "Accept":"*/*",
        'Authorization':sam
      }
      console.log(sam)

  axios.get('https://employee-referals.herokuapp.com/api/referee/resumes',{headers})
  .then(res => {
      console.log(res)
      this.setState({
        posts:res.data
        
      })
     console.log(this.state.posts)
    } )
  
}

  render() {

    const userList = this.state.posts;
    
   // console.log(this.state.posts)
  // const user = props.user

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                {/* <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small> */}
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">NAME</th>
                      <th scope="col">EMAIL</th>
                      <th scope="col">PHONE.NO</th>
                      <th scope="col">RESUME</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <tr >
      <th scope="row">{user.name}</th>
      <td>{user.email}</td>
       <td>{user.phone}</td>       
      
       <a download="harsh.pdf"  href={pdf} >DOWNLOAD</a> 

       
       
        
     
    
    
     
    </tr>
    
                    )
                    }

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

export default Resume;
