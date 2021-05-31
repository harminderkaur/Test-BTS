import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from './actions';
import Card from './Card';
import Modal from "./Modal";
import useModal from './useModal';
import Form from './Form';

export default function App() {
  const {isShowing, toggle} = useModal();
  const dispatch = useDispatch();
  const { users = [] } = useSelector(state => state.users);

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

  return (
    <div>
      <Modal
        isShowing={isShowing}
        hide={toggleHandler}
      >
        <p>{selectedCard?.name}</p>
        <Form selectedCard={selectedCard?.name} onCancel={toggleHandler}  />
      </Modal>

      {users.map(user => (
        <Card user={user} key={user.id} cardHandler = {cardHandler}/>
      ))}
    </div>
  );
}
