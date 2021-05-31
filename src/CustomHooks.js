import {useState} from 'react';

const useForm = (initialValues, callback) => {
  const [Inputs, setInputs] = useState(initialValues);
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(Inputs => ({...Inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmit,
    handleInputChange,
    Inputs
  };
}
export default useForm;