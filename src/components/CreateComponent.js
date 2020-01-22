import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            password:'',
            agree: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    } 

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

 render(){
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Create Account</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Create New Account</h2>
                    <hr />
                </div>
            </div>
            <div className="col-md-10">
             <Form onSubmit={this.handleSubmit}>
                 <FormGroup row>
                     <Label htmlFor="firstName" md={2}>First Name</Label>
                     <Col md={10}>
                         <Input type="text" id="firstName" name="firstName"
                             placeholder="First Name"
                             value={this.state.firstName}
                             onChange={this.handleInputChange} />
                     </Col>
                 </FormGroup>
                 <FormGroup row>
                     <Label htmlFor="lastName" md={2}>Last Name</Label>
                     <Col md={10}>
                         <Input type="text" id="lastName" name="lastName"
                             placeholder="Last Name"
                             value={this.state.lastName}
                             onChange={this.handleInputChange} />
                     </Col>                        
                 </FormGroup>
                 <FormGroup row>
                     <Label htmlFor="phoneNum" md={2}>Phone</Label>
                     <Col md={10}>
                         <Input type="tel" id="phoneNum" name="phoneNum"
                             placeholder="Phone number"
                             value={this.state.phoneNum}
                             onChange={this.handleInputChange} />
                     </Col>
                 </FormGroup>
                 <FormGroup row>
                     <Label htmlFor="email" md={2}>Email</Label>
                     <Col md={10}>
                         <Input type="email" id="email" name="email"
                             placeholder="Email"
                             value={this.state.email}
                             onChange={this.handleInputChange} />
                     </Col>
                 </FormGroup>                 
                 <FormGroup row>
                     <Label htmlFor="password" md={2}>Password</Label>
                     <Col md={10}>
                         <Input type="text" id="password" name="password"
                             placeholder="Password"
                             value={this.state.password}
                             onChange={this.handleInputChange} />
                     </Col>
                 </FormGroup>

                 <FormGroup row>
                     <Col md={{size: 10, offset: 2}}>
                         <Button type="submit" color="primary">
                             Create Account
                         </Button>
                     </Col>
                 </FormGroup>
             </Form>
         </div>
  
        </div>
    );
}
}
export default Create;