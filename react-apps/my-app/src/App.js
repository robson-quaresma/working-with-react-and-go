import React, { Fragment, useEffect, useState } from 'react';
import './App.css';

function App(props) {

    const [isTrue, setIsTrue] = useState(true);
    const [crowd, setCrowd] = useState([]);
    const [firstName, setFirstName] = useState("")
    const [lastName, setLasName] = useState("")
    const [dob, setDob] = useState("")

    const toggleTrue = () => {
        if (isTrue) {
            setIsTrue(false)
            return
        }
        setIsTrue(true)
    }

    useEffect(() => {
        console.log("useEffect fired!");

        let people = [
            {
                id: 1, 
                firstName: "Mary",
                lastName: "Jones",
                dob: "1997-05-02"
            },
            {
                id: 2, 
                firstName: "Jack",
                lastName: "Smith",
                dob: "1999-02-04"
            },
        ]
        setCrowd(people)
    }, []);

    return(
        <Fragment>
            <hr />
            <h1 className='h1-green'>{props.msg}</h1>
            <hr />
            {isTrue && 
                <Fragment>
                    <p>The current value of isTrue is true</p>
                    <hr />
                </Fragment>
            }
            <hr />

            {isTrue ? <p>Is True</p> : <p>Is False</p>}

            <hr />

            <a href='#!' className='btn btn-outline-secondary' onClick={toggleTrue}>Toggle isTrue</a>

            <hr />

                <form autoComplete='off'>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='first-name'>First Name</label>
                        <input 
                            type='text' 
                            name='first-name' 
                            id='first-name' 
                            autoComplete='first-name-new' 
                            className='form-control'
                            onChange={(event) => setFirstName(event.target.value)} />
                    </div>
                </form>

                <div>
                    First Name: {firstName} <br />
                    Last Name: {lastName} <br />
                    DOB: {dob} <br />
                </div>
            <hr />

            <h3>People</h3>
            <ul className='list-group'>
                {crowd.map((m) => (
                    <li key={m.id} className='list-group-item'>{m.firstName} {m.lastName}</li>
                ))}
            </ul>
        </Fragment>
    );
}

export default App;