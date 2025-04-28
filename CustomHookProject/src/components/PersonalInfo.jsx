import React from 'react'
import { useState } from 'react'

function PersonalInfo() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

  return (
    <div>
        <form >
            <div>
                <label>Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Lastname</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <button>Save</button>
        </form>
    </div>
  )
}

export default PersonalInfo