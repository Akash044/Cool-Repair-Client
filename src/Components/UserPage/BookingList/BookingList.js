import './BookingList.css'
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const BookingsList = () => {
    document.title = "Booking list"
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);
    const {email} = loggedUser;

    useEffect(() => {
        fetch(`https://fierce-waters-48255.herokuapp.com/allAppointment/${email}`)
        .then(res => res.json())
        .then(data =>{
            setBookings(data);
        })
    },[email])
    let i=1;
    return (
        <div className="mt-5 booking-list-page">
            <h2>Your Booking list:</h2>
            {
                <table className="mt-3 booking-table" border="1">
                <thead>
                  <tr>
                    <th>
                      <h4>SI</h4>
                    </th>
                    <th>
                      <h4>Service Name</h4>
                    </th>
                    <th>
                      <h4>Description</h4>
                    </th>
                    <th>
                      <h4>Charge</h4>
                    </th>
                    <th>
                      <h4>Status</h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                  >
                    <td data-label="SI"> {i++} </td>
                    <td data-label="Service Name">{booking.serName}</td> 
                    <td data-label="Description">{booking.serDesc}</td>
                    <td data-label="Charge">${booking.serCharge}</td>
                    <td data-label="Status">
                      <button
                        className="btn btn-info"
                      >
                        <FontAwesomeIcon icon={faSyncAlt} /> {booking.serStatus}
                      </button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
               
            }
            
        </div>
    );
};

export default BookingsList;
// bookings.map(booking =><p>{booking.serName}</p> )