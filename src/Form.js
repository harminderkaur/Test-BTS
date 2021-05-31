import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useForm from './CustomHooks';

const Input = styled.input`
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
            Name: ${Inputs.name}
            email: ${Inputs.email}
            phone: ${Inputs.phone}
            website: ${Inputs.website}
            company: ${Inputs.company} 
            `);
   }

  const {Inputs, handleInputChange, handleSubmit} = useForm({name: '', email:'',phone:'', website:'',company:''}, form);


    return (
    <div>

      <form onSubmit={handleSubmit}>
       <FormGroup>
         <Label htmlFor="name">Name</Label>
         <Input id="name"  onChange={handleInputChange} name="name" value={Inputs.name} />
       </FormGroup>
       <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email"  onChange={handleInputChange} name="email" value={Inputs.email}/>
      </FormGroup>
     <FormGroup>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone"  onChange={handleInputChange} name="phone" value={Inputs.phone} />
     </FormGroup>
     <FormGroup>
        <Label htmlFor="website">Website</Label>
        <Input id="website"  onChange={handleInputChange} name="website" value={Inputs.website} />
     </FormGroup>
    <FormGroup>
       <Label htmlFor="company">Company Name</Label>
      <Input id="company"  onChange={handleInputChange} name="company" value={Inputs.company} />
    </FormGroup>
     <Button type="submit" value="Submit">Save</Button>
     <Button onClick={props.onCancel}>Cancel</Button>
     </form>
   
    </div>
    )
};

export default Form;





























