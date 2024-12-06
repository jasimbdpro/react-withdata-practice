import { useEffect, useState } from 'react';
import Person from './Wrapper/Person';
import "./Wrapper/Wrapper.css";
import FriendList from './Wrapper/FriendList';

const Wrapper = () => {
    const [friend, setFriend] = useState([]);

    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/jasimbdpro/jasim-cdn/main/uploads/friendData32xfasdfw2498yinf4uhti9esdci92.json')
            .then(res => res.json())
            .then(data => setPeople(data))
            .catch(error => alert('Remote data is not loaded'))

    }, [])
    const addingFriend = (i) => {
        const newFriend = [...friend, i];
        setFriend(newFriend);
    }
    return (
        <div className='home-page'>
            <div>
                {
                    people.map(i =>
                        <Person person={i} key={i.id} addingFriend={addingFriend}></Person>
                    )
                }
            </div>
            <div>
                <FriendList friend={friend}></FriendList>
            </div>

        </div>
    );
};

export default Wrapper;   