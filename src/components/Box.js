import React, { useState } from 'react';
import Result from './Result';

export default function Box() {
    const [country, setCountry] = useState({
        from:'INR',
        to:'USD'
    });

    const [text,newText] = useState("")

    const [box, setBox] = useState(null);

    function handleSelectFrom(event) {
        setCountry((prevCountry) => ({
            ...prevCountry,
            from: event.target.value
        }
    
    ))  
    setBox(null)
    }

    function handleSelectTo(event) {
        setCountry((prevCountry) => ({
            ...prevCountry,
            to: event.target.value
        }))
        setBox(null)
    }

    function handleClick() {
        setBox('show');
    }

    function handle_onchange(event) {
        newText(event.target.value);
        setBox(null)
    }

    return (
        <>
            <div className="container text-center exchange-box">
                <div className="row align-items-center box-row">
                    <div className="col">
                        <div className='content-1'>
                            <p id='amount'>Amount</p>
                            <div className="col-auto">
                                <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" value={text}  onChange={handle_onchange} />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='content-2'>
                            <p id='amount'>From</p>
                            <select className="form-select" aria-label="Default select example" onChange={handleSelectFrom}>
                                <option value="INR">INR-Indian Rupee</option>
                                <option value="USD">USD-US Dollar</option>
                                <option value="AUD">AUD-Australian Dollar</option>
                                <option value="GBP">GBP-Pound Sterling</option>
                                <option value="CAD">CAD-Canadian Dollar</option>
                                <option value="JPY">JPY-Japanese Yen</option>
                                <option value="EUR">EUR-Euro</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className='content-3'>
                            <p id='amount'>To</p>
                            <select className="form-select" aria-label="Default select example" onChange={handleSelectTo}>
                                <option value="USD">USD-US Dollar</option>
                                <option value="INR">INR-Indian Rupee</option>
                                <option value="AUD">AUD-Australian Dollar</option>
                                <option value="GBP">GBP-Pound Sterling</option>
                                <option value="CAD">CAD-Canadian Dollar</option>
                                <option value="JPY">JPY-Japanese Yen</option>
                                <option value="EUR">EUR-Euro</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-danger button" onClick={handleClick}>Convert</button>
            </div>
            <Result from={country.from} to={country.to} show={box} text={text} />
        </>
    );
}
