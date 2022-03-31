import React from 'react'
import { data } from '../data.js';

export const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);
    
    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }
    return (
    //React.Fragmeant shortcut
    <> 
    {people.map((person) => {
      const {id, name} = person;
        return <div key={id} className="item">
          <h4>{name}</h4> 
          <button onClick={() => removeItem(id)}>remove</button>
        </div>
    })}
        <button onClick={() => setPeople([])}>Delete</button>
    </>
    );
};

export default UseStateArray;
