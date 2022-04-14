import { useState } from 'react';
import { Sub } from '../types';

interface FormProps {
  onNewSub: (sub: Sub) => void;
}

interface FormState {
  inputValues: Sub;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, setInputValues] = useState<FormState['inputValues']>({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: '',
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewSub(inputValues);
  };

  console.log({ inputValues });

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type='text' name='nick' placeholder='nick' value={inputValues.nick} />
      <input
        onChange={handleChange}
        type='number'
        name='subMonths'
        placeholder='subMonths'
        value={inputValues.subMonths}
      />
      <input onChange={handleChange} type='text' name='avatar' placeholder='avatar' value={inputValues.avatar} />
      <textarea onChange={handleChange} name='description' placeholder='description' value={inputValues.description} />
      <button>Enviar</button>
    </form>
  );
};

export default Form;
