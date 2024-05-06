import React from 'react';

const Person = (props) => {

    const { url, title } = props.person;


    return (
        <div>
            <h2>{title}</h2>
            <img src={url} alt="" />
        </div>
    );
};

export default Person;