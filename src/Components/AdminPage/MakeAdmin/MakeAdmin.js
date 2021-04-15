import React, { useState } from 'react';

const MakeAdmin = () => {
    const [newAdmin, setNewAdmin] = useState({});
    

    const handleOnBlur = (e) => {
        const newData = { ...newAdmin, [e.target.name]: e.target.value };
        setNewAdmin(newData);
    }
    const handleAddAdmin = () => {
        fetch('http://localhost:8080/addAdmin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newAdmin)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

        })

    }
    return (
        <div>
            <h4>this is make admin page</h4>
            <input onBlur={handleOnBlur} name="email" type="text" placeholder="Enter an email"/> <br/>
            <button class="btn btn-success mt-2" onClick={handleAddAdmin}>Add</button>
            
        </div>
    );
};

export default MakeAdmin;