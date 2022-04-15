import useNewSubform from '../hooks/useNewSubform';
import formReducer from '../hooks/useNewSubform';
import { Sub } from '../types';

const INITIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: '',
};

interface FormProps {
  onNewSub: (sub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  // const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE);

  const [inputValues, dispatch] = useNewSubform();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // setInputValues({ ...inputValues, [evt.target.name]: evt.target.value });

    const { name, value } = evt.target;
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };

  const handleClear = () => {
    dispatch({ type: 'clear_form' });
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
      <button onClick={handleClear} type='button'>
        Clear
      </button>
      <button type='submit'>Send</button>
    </form>
  );
};

export default Form;
