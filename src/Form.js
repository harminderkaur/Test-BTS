import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useForm from './CustomHooks';

const input = styled.input`
  padding: 0.8em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`

const FormGroup = styled.div`
	color: palevioletred;
    display: inline;
	width: 100%;
`;

const Label = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;

const Button = styled.button `
    background-color: pink;
    padding: 10px;
    border-radius: 4px;
    margin: 31px 20px 0px 0px;
    
`;

const Form = (props) => {

  const form = () => {
    alert(`form data 
            Name: ${inputs.name}
            email: ${inputs.email}
            phone: ${inputs.phone}
            website: ${inputs.website}
            company: ${inputs.company} 
            `);
   }

  const {inputs, handleInputChange, handleSubmit} = useForm({name: '', email:'',phone:'', website:'',company:''}, form);


    return (
    <div>

      <form onSubmit={handleSubmit}>
       <FormGroup>
         <Label htmlFor="name">Name</Label>
         <input id="name" className="input"  onChange={handleInputChange} name="name" value={inputs.name} />
       </FormGroup>
       <FormGroup>
        <Label htmlFor="email">Email</Label>
        <input id="email"  onChange={handleInputChange} name="email" value={inputs.email}/>
      </FormGroup>
     <FormGroup>
        <Label htmlFor="phone">Phone</Label>
        <input id="phone"  onChange={handleInputChange} name="phone" value={inputs.phone} />
     </FormGroup>
     <FormGroup>
        <Label htmlFor="website">Website</Label>
        <input id="website"  onChange={handleInputChange} name="website" value={inputs.website} />
     </FormGroup>
    <FormGroup>
       <Label htmlFor="company">Company Name</Label>
      <input id="company"  onChange={handleInputChange} name="company" value={inputs.company} />
    </FormGroup>
     <Button type="submit" value="Submit">Save</Button>
     <Button onClick={props.onCancel}>Cancel</Button>
     </form>
   
    </div>
    )
};

export default Form;





























