import React from 'react'

const Home = (props:{username:string}) => {
  

    return (
        <div>
            {props.username ? 'Hi ' + props.username : 'You are not Logged in.'}
        </div>
    );
};

export default Home;


