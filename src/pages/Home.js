import React from 'react'
import {useState} from "react"
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'
import {AiFillFileText, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import '../styles/Home.css'

import Education from './Education'
import IntroView from './IntroView'
import Skills from './Skills'


function Home() {

    const [currentView, setCurrentView] = useState('intro')

    return (
        <div className='home'>
            <SwitchTransition>
                <CSSTransition key={currentView} timeout={300} classNames='fade'>
                    <div>
                    {currentView === 'intro' && <IntroView/>}
                    {currentView === 'education' && <Education/>}
                    {currentView === 'skills' && <Skills/>}
                    </div>
                </CSSTransition>
            </SwitchTransition>
            {/* <CSSTransition in={currentView === 'intro'} timeout={300} classNames='fade' unmountOnExit> <IntroView/> </CSSTransition>
            <CSSTransition in={currentView === 'education'} timeout={300} classNames='fade' unmountOnExit> <Education/> </CSSTransition>
            <CSSTransition in={currentView === 'skills'} timeout={300} classNames='fade' unmountOnExit> <Skills/> </CSSTransition> */}
            {/* {currentView === 'intro' && <IntroView/>}
            {currentView === 'education' && <Education/>}
            {currentView === 'skills' && <Skills/>} */}
            <div className='buttons'>
                <Button variant='outline-success' style={{margin:'20px'}} onClick={() => setCurrentView("intro")}><b>About Me</b></Button>
                <Button variant='outline-primary' style={{margin:'20px'}} onClick={() => setCurrentView("education")}><b>Education</b></Button>
                <Button variant='outline-danger' style={{ margin:'20px'}} onClick={() => setCurrentView("skills")}><b>Skills</b></Button>
            </div>
            <div className='icons'>
                <a href='https://www.linkedin.com/in/lushiliu/' target='_blank' style={{color:'mediumseagreen'}}><AiFillLinkedin /></a>
                <a href='https://github.com/LushiLiu57' target='_blank' style={{color:'dodgerblue', top:'60px'}}><AiFillGithub /></a>
                <a style={{color:'firebrick', top:'110px'}}><AiFillFileText/></a>
            </div>
            <div class="corner-line"></div>
        </div>
        

    )
}

export default Home