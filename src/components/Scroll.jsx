import React from 'react';

const Scroll = (props) => {
    console.log(props)
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;

// props.children inseamna tot ce este cuprins intre tagurile Scroll din App.jsx , children vine de la copii adica tot ce contine el