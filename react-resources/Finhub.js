import React from 'react';
import { useState } from 'react';

export default function Finhub(props) {
    const [error, setError] = useState(true);
    const [response, setResponse] = useState(null);

    const finnhub = require('finnhub');
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    // api_key.apiKey = "sandbox_c6ogodaad3idb1ehlr8g" // Your API_KEY
    // const finnhubClient = new finnhub.DefaultApi()
    // //Company News
    // finnhubClient.companyNews("AAPL", "2020-01-01", "2020-05-01", (error, data, response) => {
    //     if (error) {
    //         console.error(error);
    //         setError(error);
    //     } else {
    //         console.log(data)
    //         setResponse(data);
    //     }
    // });

    /*  Initial State */
  
    /* The handleChange() function to set a new state for input */
    const handleChange = (event) => {
      console.log(event);
    }

    return (
        <button value='clicked' onChange={handleChange}>Click me</button>
    )
}