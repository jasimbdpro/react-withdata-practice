import React from 'react';
import '../Person/Person.css'

const Person = (props) => {

    const { url, title, intro, followers } = props.person;

    return (
        <div className='personbox'>
            <img className='profile-pic' src={url} alt="" />
            <div className='profile-details'>
                <h2>{title}</h2>
                <p>{intro}</p>
                <p>{followers}</p>
                <button onClick={() => props.addingFriend(props.person)}>Add Friend</button>
            </div>
        </div>
    );
};

export default Person;