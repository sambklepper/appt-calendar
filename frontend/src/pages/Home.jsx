import {useState, useEffect} from 'react';


export default function Home() {
    const [appointments, setAppointments] = useState({});

    const fetchData = async () => {
        const response = await fetch(`/api/v1/appointments`);
        const data = await response.json();
        setAppointments(data);
    };

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div>
            <h1 className='text-center'>Appointments</h1>
            <div className="appointments-list">

                {appointments.data?.map((appointment => (
                    <div key={appointment._id} className="appointments">
                        <h3>{appointment.title}</h3>
                        <p>{appointment.description}</p>
                        <p>{appointment.date}</p>
                        <p>{appointment.status}</p>
                        <p>{appointment.type}</p>
                        <p>{appointment.notes.map((note) => (<p>{note}</p>))}</p>
                        <p>
                            {appointment.url ? (
                                    <a href={appointment.url} target="_blank"
                                       rel="noopener noreferrer">{appointment.url}</a>)
                                : ''}
                        </p>
                        <p>
                            {appointment.address.street}
                        </p>
                        <p>
                            {appointment.address.city}, <span>{appointment.address.state}</span>
                        </p>
                        <p>
                            {appointment.address.zipCode}
                        </p>
                    </div>)))}
            </div>
        </div>)

}