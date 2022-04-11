import Moment from "react-moment";
import Spinner from "../components/Spinner";
import {FaEdit, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import {deleteItem} from "../services/appointmentService";
import {useEffect, useMemo, useState} from "react";
import {toast} from 'react-toastify';
import CalTwo from "../components/CalTwo";

export default function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = '/api/v1/appointments';

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url);
    //             const json = await response.json();
    //             setData(json);
    //             setLoading(false);
    //         } catch (error) {
    //             setError(error);
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, [data, url]);

    // Memoize the function to avoid re-rendering
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const dataMemoized = useMemo(() => fetchData(), []);

    console.log(data);

    if (loading) {
        return <Spinner/>
    }

    const deleteAppointment = async (id) => {
        try {
            if (window.confirm('Are you sure you want to delete this appointment?')) {
                await deleteItem(id);
                toast.error('Appointment deleted!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            setError(error);
            console.log(error.message);
            toast.error('Error deleting appointment!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (<div>
        <h1 className='text-center'>Appointments</h1>
        <div className="items-list">

            {/*{console.log(data?.data)}*/}
            {data?.data.map((item => (// <Link to={`/appointment/${item._id}`}>
                <div key={item._id} className="card">
                    <div className="icon-nav">
                        <span className="icon-nav-item">
                            <Link to={`/edit/appointment/${item._id}`}>
                                 <FaEdit className='edit-icon'/>
                            </Link>
                        </span>
                        <span className="icon-nav-item">
                            <FaTimes className='delete-icon' onClick={() => deleteAppointment(item._id)}/>
                        </span>
                    </div>
                    <div className="card-header">
                        <h3>{item.title}</h3>


                    </div>
                    <div className="time-info">

                        <p className='card-date'><Moment format="MM/DD/YYYY">{item.startDate}</Moment></p>
                        <p className='card-time'>{item.time}</p>
                    </div>
                    <div className="card-description">
                        <p>{item.description}</p>
                    </div>

                    <div className="card-body">
                        <div className="notes">
                            <h4>Notes</h4>
                            <p>{item.notes.map((note, index) => (<span key={index}>{note}</span>))}</p>
                        </div>
                        <div className="address">
                            <h4>Address</h4>
                            <p>
                                {item.address.street}
                            </p>
                            <p>
                                {item.address.city}, <span>{item.address.state}</span>
                            </p>
                            <p>
                                {item.address.zipCode}
                            </p>
                        </div>
                    </div>
                    <div className="links">
                        <h4>Links</h4>
                        <p>
                            {item.url ? (<a href={item.url} target="_blank"
                                            rel="noopener noreferrer">{item.url}</a>) : ''}
                        </p>
                    </div>

                    <div className="card-footer">
                        <div
                            className={item.status === 'pending' ? 'pill-pending' : item.status === 'confirmed' ? 'pill-confirmed' : item.status === 'cancelled' ? 'pill-cancelled' : 'pill'}>
                            <p>{item.status}</p>
                        </div>
                        <div
                            className={item.type === 'professional' ? 'pill-professional' : item.type === 'personal' ? 'pill-personal' : item.type === 'medical' ? 'pill-medical' : item.type === 'emergency' ? 'pill-emergency' : item.type === 'other' ? 'pill-other' : 'pill'}>
                            <p>{item.type}</p>
                        </div>
                    </div>
                </div>
                // </Link>
            )))}
        </div>
        <CalTwo data={data}/>
    </div>)

}