import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../signin/Signin.css";

const signin = () => {
  return (
    <div>
      
      <div className='whole'>
      <div className="first_box">sign in
</div>
     <div className="second_box">
     <h3>আপনার যোগদান আমাদের অনুপ্রাণিত করে |</h3>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" placeholder="Enter your email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
        
      
      </Form>
      </div>
     </div>
    </div>
  )
}

export default signin