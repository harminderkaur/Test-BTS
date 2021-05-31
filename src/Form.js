import React, { useEffect, useState } from 'react';
import styled from 'styled-components'; 

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


const Input = styled.input`
	padding: 0.8em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

const Button = styled.button `
    background-color: pink;
    padding: 10px;
    border-radius: 4px;
    margin: 31px 20px 0px 0px;
    
`;



const handleChange = (e) =>{
    e.preventDefault();
    const {name, value} = useState(null)
    console.log(e.target.value)
    value(e.target.value)
    alert(`Submitting Name ${value}`);
  }

const handleSubmit = () => {
  console.log("submit")
}


const Form = (props) => {
    return (
    <div>
        <form onSubmit={handleSubmit}>
       <FormGroup>
         <Label htmlFor="name">Name</Label>
         <Input id="name" defaultValue={props.selectedCard.name} onChange={handleChange} />
       </FormGroup>
       <FormGroup>
         <Label htmlFor="email">Email</Label>
         <Input id="email" defaultValue={props.selectedCard.email}/>
       </FormGroup>
       <FormGroup>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" defaultValue={props.selectedCard.phone} />
        </FormGroup>
       <FormGroup>
          <Label htmlFor="website">Website</Label>
          <Input id="website" defaultValue={props.selectedCard.website} />
       </FormGroup>
     <FormGroup>
        <Label htmlFor="company">Company Name</Label>
       <Input id="company" defaultValue={props.selectedCard.company.name} />
     </FormGroup>
     <input type="submit" value="Submit" />
     <Button onClick={props.onCancel}>Cancel</Button>
     </form>
    </div>
    )
};

export default Form;





























