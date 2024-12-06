import './FriendList/FriendList.css'

const FriendList = (props) => {
    const friend = props.friend;
    const totalFollower = friend.reduce((acc, person) => acc + parseInt(person.followers, 10), 0)


    return (
        <div className='friend-list'>
            <h2>Friend Added: {friend.length}</h2>
            <h3>Total followers: {totalFollower}</h3>
            <p className='description'>
                This is my react practice assignment which include dynamic data from cdn, using font Awesome, using event handler, use of state etc. here github cdn is used for remote data hosting.
            </p>

        </div>
    );
};

export default FriendList;