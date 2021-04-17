import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const BookingsList = () => {
    document.title = "Booking list"
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [bookings, setBooking] = useState([]);
    const {email} = loggedUser;

    useEffect(() => {
        fetch(`http://localhost:8080/allAppointment/${email}`)
        .then(res => res.json())
        .then(data =>{
            setBooking(data);
        })
    },[email])
    let i=1;
    return (
        <div className="mt-5">
            <h2>Your Booking list:</h2>
            {
                <table className="mt-3"
                border="1"
                style={{ width: "95%", textAlign: "center" }}
              >
                <thead>
                  <tr
                    style={{ borderBottom: "1px solid black", padding: "10px" }}
                  >
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
                    style={{ borderBottom: "1px solid black", padding: "10px" }}
                  >
                    <th> {i++} </th>
                    <th>{booking.serName}</th> <th>{booking.serDesc}</th>
                    <th>${booking.serCharge}</th>
                    <th>
                      <button
                        className="btn btn-info"
                      >
                        <FontAwesomeIcon icon={faSyncAlt} /> {booking.serStatus}
                      </button>
                    </th>
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