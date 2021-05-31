import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { usersActions } from './actions';

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

function Form({users}){

  const dispatch = useDispatch();

  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPhone, setNewUserPhone] = useState('');
  const [newUserWebsite, setNewUserWebsite] = useState('');
  const [newUserCompany, setNewUserCompany] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

    const usersList = users;
    // const newUserId = usersList[usersList.length - 1].id + 1;
    
    console.log("values", newUserName, newUserEmail, newUserPhone, newUserWebsite, newUserCompany);
    // console.log("your id", newUserId)


      dispatch(usersActions.addUser({
        name:newUserName,
        email:newUserEmail,
        phone:newUserPhone,
        website:newUserWebsite,
        company:newUserCompany
      }));
   }

   const handleCancel = () => {};

    return (
    <div>
       <FormGroup>
         <Label htmlFor="name">Name</Label>
         <Input id="name"  onChange={e => setNewUserName(e.target.value)} name="name" value={newUserName} />
       </FormGroup>
       <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email"  onChange={e => setNewUserEmail(e.target.value)} name="email" value={newUserEmail}/>
      </FormGroup>

      <FormGroup>
    <Label htmlFor="phone">Phone</Label>
    <Input id="phone"  onChange={e => setNewUserPhone(e.target.value)} name="phone" value={newUserPhone} />
 </FormGroup>
 <FormGroup>
    <Label htmlFor="website">Website</Label>
    <Input id="website"  onChange={e => setNewUserWebsite(e.target.value)} name="website" value={newUserWebsite} />
 </FormGroup>
<FormGroup>
   <Label htmlFor="company">Company Name</Label>
  <Input id="company"  onChange={e => setNewUserCompany(e.target.value)} name="company" value={newUserCompany} />
</FormGroup>
     <Button type="submit" value="Submit" onClick={handleSubmit}>Add</Button>
     <Button onClick={handleCancel}>Cancel</Button> 
    </div>
    )
};

export default Form;





























