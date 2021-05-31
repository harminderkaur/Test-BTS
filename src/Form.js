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
`;

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

const Button = styled.button`
     display: table-footer-group;
    color: palevioletred;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
    width: 22%;
    float: left;
    margin-right: 20px;
    margin-top: 13px;
}
`;
const DEFAULT_FORM_DATA = {
  name: '',
  email: '',
  image: '',
  phone: '',
  website: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: ''
  },
  company: {
    name: '',
    catchPhrase: ''
  }
};
const Form = ({ selectedCard, onCancel }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  useEffect(() => {
    setFormData(selectedCard);
  }, []);

  const changeHandler = event => {
    const {
      name,
      value,
      dataset: { key }
    } = event.target;

    if (key) {
      const updatedKey = { ...formData[key], [name]: value };
      const updatedData = { ...formData, [key]: updatedKey };
      setFormData(updatedData);
    } else {
      const updatedData = { ...formData, [name]: value };
      setFormData(updatedData);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(usersActions.updateUser(formData));
    dispatch(usersActions.addUser(formData));
    onCancel();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            onChange={changeHandler}
            name="name"
            value={formData?.name}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            onChange={changeHandler}
            name="email"
            value={formData?.email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address">Street name</Label>
          <Input
            id="address"
            onChange={changeHandler}
            name="street"
            data-key="address"
            value={formData?.address?.street}/>
          </FormGroup>
          <FormGroup>
          <Label htmlFor="address">City</Label>
          <Input
            id="address"
            onChange={changeHandler}
            name="city"
            data-key="address"
            value={formData?.address?.city}/>
          </FormGroup>
          <FormGroup>
     <Label htmlFor="address">Zipcode</Label>
     <Input
       id="address"
       onChange={changeHandler}
       name="zipcode"
       data-key="address"
       value={formData?.address?.zipcode}/>
    </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            onChange={changeHandler}
            name="phone"
            value={formData?.phone}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            onChange={changeHandler}
            name="website"
            value={formData?.website}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            onChange={changeHandler}
            name="name"
            data-key="company"
            value={formData?.company?.name}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="company">Company Catch Phrase</Label>
          <Input
            id="catchPhrase"
            onChange={changeHandler}
            data-key="company"
            name="catchPhrase"
            value={formData?.company?.catchPhrase}
          />
        </FormGroup>
        <Button type="submit" value="Submit">
          Save
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </form>
    </div>
  );
};

export default Form;
