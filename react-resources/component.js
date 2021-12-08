import React from 'react-js';

export default function Component(props) {
    const name = props.name;
    return (
        <h1>Hello, {props.name}</h1>
    )
}