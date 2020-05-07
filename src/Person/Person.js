import React from 'react'
import styled from 'styled-components'


    

const Person = (props) => {
    return (
              
        <div className='Person'>
       
            <p>I am {props.name} and my age is {props.age} and {props.children} !!</p>

            <input type='text' onChange={props.changed} />

        </div>
        
        
    );

}
export default Person;