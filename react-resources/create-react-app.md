# Developer Resources

# Open Source API Libraries
- https://finnhub.io/docs/api
- https://www.npmjs.com/package/finnhub


# Package and Library Installation
```sh
PS C:\Users\Oliver Rush\Documents\GitHub> npm -v
8.2.0

PS C:\Users\Oliver Rush\Documents\GitHub> node -v
v16.13.1
```

# Create React App
1. Navigate in terminal to the directory where your new project will reside
2. Copy and paste the following into the terminal, and press enter:
```sh
npx create-react-app my-app
cd my-app
npm start
```

# Workspace Location
```sh
C:\Users\Oliver Rush\Documents\GitHub
```

# ReactJS

## Functional Component
```js
import React from 'react-js';

export default function Component(props) {
    const name = props.name;
    return (
        <h1>Hello, {props.name}</h1>
    )
}
```

## React Hooks
```js
import React from 'react';

function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }
}
```

## React Class Component
```js
import React, { Component } from 'react';

export class Input extends Component {
    // initialize the state
    constructor(props) {
        super(props);
        this.state = { name: props.name }
    }
    // function for handling change events
    changeTitle = (e) => {
        this.setState({ name: e.target.value });
    }
    // onChange is handed a function to display text input as html
    render() {
        return (
            <div textalign="left">
                <input type="text" onChange={this.changeTitle} />&nbsp;
                {this.state.name}
            </div>
        );
    }
}
```


## Index.html Boilerplate (Includes Bootstrap)
```html

```
