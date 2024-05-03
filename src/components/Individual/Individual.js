import React from 'react';

const Individual = (props) => {
    const person = props.person;
    console.log(person)
    return (
        <div>
            {
                person.map(i =>
                    <div>
                        <p>{i.title}</p>
                        <img src={i.thumbnailUrl} alt={i.title}></img>
                        <br />
                        <button>Add Friend</button>
                    </div>
                )
            }
        </div>
    );
};

export default Individual;