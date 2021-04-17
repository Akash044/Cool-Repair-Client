import React, { useState } from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {
    document.title = "Make Admin"
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
            data && alert('Admin added successfully');

        })

    }
    return (
        <div className="mt-5 make-admin-page shadow">
            <h4>Make an Admin</h4>
            <input onBlur={handleOnBlur} name="email" type="text" placeholder="Enter an email"/> <br/>
            <button class="btn btn-success mt-2" onClick={handleAddAdmin}>Add</button>
            
        </div>
    );
};

export default MakeAdmin;