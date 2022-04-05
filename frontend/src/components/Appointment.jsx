import {editAppointment,getAppointmentByIdAsync} from "../services/appointmentService";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Spinner from "./Spinner";

export default function Appointment() {
    const [appointment, setAppointment] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const {id} = params;
        // const fetchData = async () => {
        //     const data = await fetch(`/api/v1/appointments/${id}`)
        //     const json = await data.json();
        //     setAppointment(json);
        //     setLoading(false);
        // };
        // fetchData();
        getAppointmentByIdAsync(id).then(data => {
            setAppointment(data);
            setLoading(false);
        });
    }, [params]);

    console.log(appointment);

    if (loading) {
        return <Spinner/>
    }

    return (
        <div className='form-wrapper'>
            <p>{appointment?.data.title}</p>
            <p>{appointment?.data.date}</p>
            <p>{appointment?.data.description}</p>
            <p>{appointment?.data.notes}</p>
        </div>
    );
}
