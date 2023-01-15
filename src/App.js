import React from 'react'
import './App.css';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home'

import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/education' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      {/* <header className='App-header'>
        <Container>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId='formEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='example@email.com'/>
                <Form.Text className='text-muted'>
                  Time to steal your email!
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Your password...'/>
                <Form.Text className='text-muted'>
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          
          <Button variant='secondary' type='submit'>Sign In</Button>  
        </Form>
        <Card className='mb-3' style={{color:'blue'}}>
          <Card.Img src='https://picsum.photos/200/60'/>
          <Card.Body>
            <Card.Title>
              Card Title
            </Card.Title>
            <Card.Text>
              Card Text Text Text aosijdoanidknaso
            </Card.Text>
            <Button variant='primary'>Expand</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>1st</Breadcrumb.Item>
          <Breadcrumb.Item>2nd</Breadcrumb.Item>
          <Breadcrumb.Item active>3rd</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='success'>ALERT</Alert>
        <Button>THIS</Button>
      </Container>
      </header> */}
    </div>
  );
}

export default App;
