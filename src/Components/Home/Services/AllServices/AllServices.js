import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/services')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setServices(data);
        })
    },[])
    return (
        <div className="row ms-5">
            {
                services.map(service => <SingleService key={service._id} serviceInfo={service}></SingleService>)

            }
            
        </div>
    );
};

export default AllServices;