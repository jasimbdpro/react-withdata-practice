import React from 'react';
import { useEffect, useState } from 'react';
import Person from '../Person/Person';
import "../Wrapper/Wrapper.css";

const Wrapper = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/jasimbdpro/jasim-cdn/main/uploads/friendData645454551245414.json')
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