import React from 'react';

const FriendList = (props) => {
    return (
        <div>
            <h2>Friend Added: {props.friend.length}</h2>
        </div>
    );
};

export default FriendList;