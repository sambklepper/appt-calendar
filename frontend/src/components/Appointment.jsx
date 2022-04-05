import {editAppointment, getAppointmentById} from "../services/appointmentService";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Appointment({}) {
    const [appointment, setAppointment] = useState({});
    const params = useParams();
    useEffect(() => {
        const {id} = params;
        getAppointmentById(id).then(appointment => {
            setAppointment(appointment);
        });
    }, []);

    // console.log(appointment.data.title);
    return (
        <div className='appointment-wrapper'>
            <h1>
                {appointment.data.title}
            </h1>
            <h2>
                {appointment.data.description}
            </h2>
        </div>
    )
}
