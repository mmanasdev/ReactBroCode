import React, { useState } from "react";

function MyComponentUseState() {

    const [name , setName] = useState("GUEST");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Spongebob");
    };

    const incrementAge = () => {
        setAge(age + 1);
    };

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    };

    return <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Update Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
        <p>IsEmployed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>;
}

export default MyComponentUseState;