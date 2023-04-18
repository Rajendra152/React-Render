import React, { useState }from 'react';

const initState = {
    fname: 'Raj',
    lname: 'prasad'
}

export const ObjectUseState = () => {
    const [person, setPerson] = useState(initState);
    
    const changeName = () => {
        // person.fname = 'charan'
        // person.lname = 'rajendra'
        // setPerson(person)
        const newPerson = {...person}
        newPerson.fname = 'charan'
        newPerson.lname = 'rajendra'
        setPerson(newPerson)
    }
    console.log("ObjectUseState render");
  return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
