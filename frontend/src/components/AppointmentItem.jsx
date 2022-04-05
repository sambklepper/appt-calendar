import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getAppointmentByIdAsync} from "../services/appointmentService";
import Spinner from "./Spinner";

export default function AppointmentItem() {
    const [appointment, setAppointment] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const {id} = params;
        getAppointmentByIdAsync(id).then(data => {
            setAppointment(data);
            setLoading(false);
        });
    }, [params]);

    console.log(appointment);

    if (loading) {
        return <Spinner />
    }

    return (
        <h1>
            {appointment.data.title}
        </h1>
    )
}