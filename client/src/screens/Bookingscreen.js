import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2'
function Bookingscreen({ match }) {
    const { roomid, fromdate, todate } = useParams();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const [room, setroom] = useState();

    const firstdate = moment(fromdate, 'DD-MM-YYYY')
    const lastdate = moment(todate, 'DD-MM-YYYY')

    const totaldays = moment.duration(lastdate.diff(firstdate)).asDays() + 1
    const [totalamount, settotalamount] = useState();
    useEffect(() => {
        const fetchData = async () => {

            if (!localStorage.getItem('currentUser')) {
                window.location.href = '/login'
            }
            try {
                setloading(true);
                const response = (await axios.post('/api/rooms/getroombyid', { roomid: roomid })).data;
                settotalamount(response.rentperday * totaldays)
                setroom(response);
                setloading(false);
            } catch (err) {
                setloading(false);
                seterror(true);
            }
        };

        fetchData();
    }, []);


    // async function bookRoom() {
    //     const bookingDetails = {
    //         room,
    //         userid: JSON.parse(localStorage.getItem('currentUser'))._id,
    //         fromdate,
    //         todate,
    //         totalamount,
    //         totaldays
    //     }

    //     try {
    //         const result = await axios.post('/api/bookings/bookroom', bookingDetails)
    //     } catch (error) {
    //     }
    // }

    async function onToken(token) {
        console.log(token)
        const bookingDetails = {
            room,
            userid: JSON.parse(localStorage.getItem('currentUser'))._id,
            fromdate,
            todate,
            totalamount,
            totaldays,
            token,
        }

        try {
            setloading(true)
            const result = await axios.post('/api/bookings/bookroom', bookingDetails)
            setloading(false)
            Swal.fire("Congratulations", "Your Room Booked Successfully", 'success').then(result => {
                window.location.href = '/profile'
            })
        } catch (error) {
            setloading(false)
            Swal.fire("Oops!!", "Something went wrong!", 'error')
        }
    }


    return (
        <div className='container'>
            {loading ? (<Loader />) : room ? (
                <div className="row mt-5 bs">
                    <div className="col-md-6">
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className="bigimg" alt="Room Image" />
                    </div>
                    <div className="col-md-6">
                        <div style={{ textAlign: 'right' }}>
                            <b><h1>Booking Details</h1></b>
                            <hr />

                            <b>
                                <p >Name : {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                                <p>From Date :{fromdate} </p>
                                <p>To Date : {todate} </p>
                                <p>Max Count : {room.maxcount}</p>
                            </b>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <b><h1>Amount</h1></b>
                            <b>

                                <hr />
                                <p>Total Days : {totaldays}</p>
                                <p>Rent Per Day : ₹ {room.rentperday}</p>
                                <p style={{ fontSize: 22 }}>Total Amount : ₹ {totalamount} </p>
                            </b>
                        </div>
                        <div style={{ float: 'right' }}>
                            {/* <button className="btn btn-primary" onClick={bookRoom}>Pay Now</button> */}
                            <StripeCheckout
                                amount={totalamount * 100}
                                token={onToken}
                                currency='INR'
                                stripeKey="pk_test_51No8g0SIBYo7PwHpQdrDvumytANXl37AvR20jfaexvnkdfH3eB5VXiFpvR8VvmIWmFaDBjGEKgFe6Yt1yQpmGWnu00KPohVP2A"
                            >
                                <button className="btn btn-primary" >Pay Now {" "}</button>

                            </StripeCheckout>


                        </div>
                    </div>
                </div>
            ) : (<Error />)
            }
        </div>
    );
}

export default Bookingscreen;
