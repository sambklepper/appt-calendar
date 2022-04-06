import {getAppointmentByIdAsync} from "../services/appointmentService";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Spinner from "./Spinner";
import UpdateForm from "./UpdateForm";

export default function Appointment() {
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

    // console.log(appointment);

    if (loading) {
        return <Spinner/>
    }

    return (
        (<div className='form-wrapper'>
            <h1 className='text-center'>Edit Appointment</h1>
            <UpdateForm appointment={appointment}/>
        </div>)
    );
}
