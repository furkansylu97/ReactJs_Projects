import React from 'react'
import useInput from './useInput';

function PersonalInfo() {

    const[firstName, bindFirstName, resetFirstName] = useInput('');
    const[lastName, bindLastName, resetLastName] = useInput('');

    const submitForm = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    };

  return (
    <div>
        <form onSubmit={ submitForm }>
            <div>
                <label>Name</label>
                <input type="text" {...bindFirstName} />
            </div>
            <div>
                <label>Lastname</label>
                <input type="text" {...bindLastName} />
            </div>
            <button>Save</button>
        </form>
    </div>
  )
}

export default PersonalInfo