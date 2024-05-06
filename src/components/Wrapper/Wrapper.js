import React from 'react';
import { useEffect, useState } from 'react';
import Person from '../Person/Person';

const Wrapper = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setPeople(data.slice(0, 20)))

    }, [])
    return (
        <div>
            {
                people.map(person =>
                    <Person person={person} key={person.id}></Person>
                )
            }
        </div>
    );
};

export default Wrapper;