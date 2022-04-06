import {editAppointment, getAppointmentByIdAsync} from "../services/appointmentService";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Spinner from "./Spinner";
import UpdateForm from "./UpdateForm";


export default function Appointment() {
    const [appointment, setAppointment] = useState({});
    const [updatedAppointment, setUpdatedAppointment] = useState({});
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState( null);
    const [description, setDescription] = useState('');
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
        return <Spinner/>
    }

    const handleChange = (e) => {
        setUpdatedAppointment((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value, address: {
                ...prevState.address,
                [e.target.name]: e.target.value
            }
        }));
    }


    console.log(updatedAppointment);

    const onSubmit = (e) => {
        e.preventDefault();
       console.log('Submit fired', updatedAppointment);
        // editAppointment(newAppointment);
    }

    return (
        (<div className='form-wrapper'>
            <h1 className='text-center'>Edit Appointment</h1>
            {/*<form className='add-form-container' onSubmit={onSubmit}>*/}
            {/*    <div className='add-form-inputs'>*/}
            {/*        <label htmlFor='name'>Title</label>*/}
            {/*        <input type='text' name='title' id='title' placeholder='Enter title'*/}
            {/*               value={appointment.data.title} onChange={handleChange}/>*/}
            {/*    </div>*/}
            {/*    <div className='add-form-inputs'>*/}
            {/*        <label htmlFor='description'>Description</label>*/}
            {/*        <input type='text' name='description' id='description' placeholder='Enter description'*/}
            {/*            value={appointment.data.description} onChange={handleChange}>*/}

            {/*        </input>*/}
            {/*    </div>*/}
            {/*    <div className='add-form-inputs'>*/}
            {/*        <label htmlFor='date'>Date</label>*/}
            {/*        <input type='date' name='date' id='date' placeholder='Enter date' value={appointment.data.date} onChange={handleChange}/>*/}
            {/*    </div>*/}

            {/*    <div className='add-form-inputs'>*/}
            {/*        <label htmlFor='type'>Category</label>*/}
            {/*        <select className='add-form-select-textarea' name='type' id='type' value={appointment.data.type} onChange={handleChange}>*/}
            {/*            <option value='professional'>professional</option>*/}
            {/*            <option value='personal'>personal</option>*/}
            {/*            <option value='medical'>medical</option>*/}
            {/*            <option value='emergency'>emergency</option>*/}
            {/*            <option value='other'>other</option>*/}
            {/*        </select>*/}
            {/*    </div>*/}

            {/*    <div className='add-form-inputs'>*/}
            {/*        <label htmlFor='status'>Status</label>*/}
            {/*        <select className='add-form-select-textarea' name='status' id='status' value={appointment.data.status} onChange={handleChange}>*/}
            {/*            <option value='pending'>pending</option>*/}
            {/*            <option value='confirmed'>confirmed</option>*/}
            {/*            <option value='cancelled'>cancelled</option>*/}
            {/*        </select>*/}
            {/*    </div>*/}
            {/*    <div className="address-form-section">*/}
            {/*        <div className='address-heading text-center'>*/}
            {/*            <label htmlFor='address'>Address</label>*/}
            {/*        </div>*/}
            {/*        <div className='add-form-inputs'>*/}
            {/*            <div className="optional-wrapper">*/}
            {/*                <label htmlFor='street'>Street</label>*/}
            {/*                <p className='small-text'>Optional</p>*/}
            {/*            </div>*/}
            {/*            <input type='text' name='street' id='street' placeholder='Enter a street'*/}
            {/*                   value={appointment.data.address.street}*/}
            {/*                   onChange={handleChange}/>*/}
            {/*        </div>*/}
            {/*        <div className='add-form-inputs'>*/}
            {/*            <div className="optional-wrapper">*/}
            {/*                <label htmlFor='city'>City</label>*/}
            {/*                <p className='small-text'>Optional</p>*/}
            {/*            </div>*/}
            {/*            <input type='text' name='city' id='city' placeholder='Enter a city'*/}
            {/*                   value={appointment.data.address.city}*/}
            {/*                   onChange={handleChange}/>*/}
            {/*        </div>*/}
            {/*        <div className='add-form-inputs'>*/}
            {/*            <div className="optional-wrapper">*/}
            {/*                <label htmlFor='state'>State</label>*/}
            {/*                <p className='small-text'>Optional</p>*/}
            {/*            </div>*/}
            {/*            <input type='text' name='state' id='state' placeholder='Enter a state'*/}
            {/*                   value={appointment.data.address.state}*/}
            {/*                   onChange={handleChange}/>*/}
            {/*        </div>*/}
            {/*        <div className='add-form-inputs'>*/}
            {/*            <div className="optional-wrapper">*/}
            {/*                <label htmlFor='zipCode'>Zip Code</label>*/}
            {/*                <p className='small-text'>Optional</p>*/}
            {/*            </div>*/}
            {/*            <input type='text' name='zipCode' id='zipCode' placeholder='Enter a zip code'*/}
            {/*                   value={appointment.data.address.zipCode}*/}
            {/*                   onChange={handleChange}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className='add-form-inputs'>*/}
            {/*        <div className='optional-wrapper'>*/}

            {/*            <label htmlFor='notes'>Notes</label>*/}
            {/*            <p className="small-text">(Optional)</p>*/}
            {/*        </div>*/}
            {/*        <textarea className='add-form-select-textarea' name='notes' id='notes' cols='30' rows='6'*/}
            {/*                  placeholder='Enter some text' value={appointment.data.notes}*/}
            {/*                  onChange={handleChange}></textarea>*/}
            {/*    </div>*/}
            {/*    <div className='add-form-inputs'>*/}
            {/*        <div className="optional-wrapper">*/}
            {/*            <label htmlFor='url'>Url</label>*/}
            {/*            <p className="small-text">(Optional)</p>*/}
            {/*        </div>*/}
            {/*        <input type='text' name='url' id='url' placeholder='Enter an url' value={appointment.data.url}*/}
            {/*               onChange={handleChange}/>*/}
            {/*    </div>*/}
            {/*    <button className='add-form-button' type="submit">Submit</button>*/}
            {/*</form>*/}
            <UpdateForm appointment={appointment} />
        </div>)
    );
}
