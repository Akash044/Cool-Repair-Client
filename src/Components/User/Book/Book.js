import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Book = () => {
    const {id} = useParams();
    const [ service, setService] = useState({});
    useEffect(() =>{
        fetch(`http://localhost:8080/service/${id}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    },[id])
    return (
        <div>
            <h4>this booking page{id}</h4>
        </div>
    );
};

export default Book;