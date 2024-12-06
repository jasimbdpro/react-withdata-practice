import React from 'react';
import '../Person/Person.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Person = (props) => {

    const { title, intro, followers } = props.person;

    return (
        <div className='personbox'>
            <img className='profile-pic' src="https://picsum.photos/200" alt="" />
            <div className='profile-details'>
                <h2>{title}</h2>
                <p>{intro}</p>
                <p>Followers: {followers}</p>
                <button onClick={() => props.addingFriend(props.person)}>
                    <FontAwesomeIcon icon={faPlus} /> friend
                </button>
            </div>
        </div>
    );
};

export default Person;
