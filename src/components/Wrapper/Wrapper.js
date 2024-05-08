import React from 'react';
import { useEffect, useState } from 'react';
import Person from '../Person/Person';
import "../Wrapper/Wrapper.css";
import FriendList from '../FriendList/FriendList';

const Wrapper = () => {
    const [count, setCount] = useState(0);
    const addingFriend = () => console.log('Clicked');
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/jasimbdpro/jasim-cdn/main/uploads/sdfasdfasdfaweir9w3089qw458qcmj93fhqwj9wcm4j1j81h.json')
            .then(res => res.json())
            .then(data => setPeople(data.slice(0, 20)))
            .catch(error => alert('Remote data is no loaded'))

    }, [])
    return (
        <div className='home-page'>
            <div>
                {
                    people.map(person =>
                        <Person person={person} key={person.id} addingFriend={addingFriend}></Person>
                    )
                }
            </div>
            <div>
                <FriendList></FriendList>
            </div>

        </div>
    );
};

export default Wrapper;   