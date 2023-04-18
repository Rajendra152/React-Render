import React, {useState }from 'react';


const initState = ['raj', 'prasad']

export const  ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);
  const handleClick = () => {
    // persons.push('charan')
    // persons.push('rajendra')
    // setPersons(persons)
    const newPersons = [...persons]
    newPersons.push('charan')
    newPersons.push('rajendra')
    setPersons(newPersons)
  }

  console.log("ArrayUseState render")
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  )
}
