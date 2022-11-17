import React from 'react';


const InputField = () => {
  return (
    <div>
      <form className='inputForm'>
        <input type='text' placeholder='Enter a task' className='input__field'/>
        <button type='submit' className='input__submit'>Add</button>
      </form>
    </div>
  );
};

export default InputField;
