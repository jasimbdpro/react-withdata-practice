import React from 'react';
import '../Person/Person.css'

const Person = (props) => {

    const { url, title } = props.person;


    return (
        <div className='personbox'>
            <h2>{title}</h2>
            <img src={url} alt="" />
        </div>
    );
};

export default Person;