import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from './actions';
import Card from './Card';
import Modal from "./Modal";
import useModal from './useModal';
import Form from './Form'
import styled from 'styled-components';

export default function App() {
  const {isShowing, toggle} = useModal();
  const dispatch = useDispatch();
  const { users = [] } = useSelector(state => state.users);
 console.log("initial data", users)
  const [selectedCard, setSelectedCard] = useState(null)
  useEffect(() => {
    dispatch(usersActions.getUsers());
  }, [dispatch]);

  const cardHandler = (data) =>{
    console.log(data)
    setSelectedCard(data)
    toggle()
  }
  const toggleHandler = ()=>{
       setSelectedCard(null)
      toggle()
  }

  const newUser = () =>{
    toggleHandler()
  }

  const Button = styled.button`
      display: inline-block;
      color: palevioletred;
      font-size: 1em;
      margin: 2em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
      display: block;
`;
  
      
  return (
    <div>

      <Button onClick={newUser}>Add New User</Button>
     
      <Modal
        isShowing={isShowing}
        hide={toggleHandler}
      >
        <Form selectedCard={selectedCard} onCancel={toggleHandler}  />
      </Modal>

      {users.map(user => (
        <Card user={user} key={user?.id} cardHandler = {cardHandler}/>
      ))}
    </div>
  );
}
