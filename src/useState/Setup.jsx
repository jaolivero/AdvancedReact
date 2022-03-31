import React from 'react'

const Setup = () => {
    let title = 'Random Title';
    const handleClick = () => {
      title = 'hello people';
        console.log(title);
    }
    return (
        <React.Fragment>
        <h2>{title}</h2>
        <button type='button' className='btn' onClick={handleClick}>Change Title</button>
        </React.Fragment>
    );
}

export default Setup;