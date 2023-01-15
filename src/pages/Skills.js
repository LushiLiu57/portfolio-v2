import React from 'react';
import '../styles/Home.css'

function Skills() {
  return (
    <div className='skills'>
        <h1><b style={{color:'firebrick'}}>Skills</b></h1>
        <ol className='list'>
            <li className='skill-type'>
                <h3 style={{color:'dodgerblue'}}>Programming Language</h3>
                <span>JavaScript, TypeScript, Python, Java, C++</span>
            </li>
            <li className='skill-type'>
                <h3 style={{color:'dodgerblue'}}>Front End</h3>
                <span>HTML, CSS, ReactJS, NPM, Yarn, Redux</span>
            </li>
            <li className='skill-type'>
                <h3 style={{color:'dodgerblue'}}>Back End</h3>
                <span>NodeJS, ExpressJS, MySQL, MongoDB, AWS</span>
            </li>
        </ol>
        <ol className='list'>
            <li className='skill-type'>
                <h3 style={{color:'mediumseagreen'}}>Hard Skills</h3>
                <span>Data Structures, Algorithims, Dynamic Programming, Object Orientated Programming, Databases, Networking, STEM, Web Development, Machine Learning, Data Science</span>
            </li>
            <li className='skill-type'>
                <h3 style={{color:'mediumseagreen'}}>Soft Skills</h3>
                <span>Adaptable, Organized, Open Minded, Ctritical Problem Solver, Attention to Detail</span>
            </li>
        </ol>
    </div>
  );
}

export default Skills;