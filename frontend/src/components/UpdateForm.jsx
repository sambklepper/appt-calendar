import {useState} from "react";
import {useNavigate} from "react-router-dom";
import moment from 'moment';
import {toast} from "react-toastify";

export default function UpdateForm({appointment}) {
    const navigate = useNavigate();
    const formatDate = moment(appointment.data.date).format('YYYY-MM-DD')//change the format string to your preference
    const [title, setTitle] = useState(appointment.data.title);
    const [date, setDate] = useState(formatDate);
    const [type, setType] = useState(appointment.data.type);
    const [start, setStart] = useState(appointment.data.start);
    const [end, setEnd] = useState(appointment.data.end);
    const [status, setStatus] = useState(appointment.data.status);
    const [description, setDescription] = useState(appointment.data.description);
    const [street, setStreet] = useState(appointment.data.address.street);
    const [city, setCity] = useState(appointment.data.address.city);
    const [state, setState] = useState(appointment.data.address.state);
    const [zipCode, setZipCode] = useState(appointment.data.address.zipCode);
    const [notes, setNotes] = useState(appointment.data.notes);
    const [url, setUrl] = useState(appointment.data.url);

    const onSubmit = (e) => {
        const timeZonedDate = moment(date).utcOffset(-60).format('YYYY-MM-DD HH:mm')
        e.preventDefault();
        fetch(`/api/v1/appointments/${appointment.data._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    _id: appointment.data._id,
                    title,
                    date: timeZonedDate,
                    type,
                    status,
                start,
                end,
                    description,
                    address: {
                        street,
                        city,
                        state,
                        zipCode,
                    },
                    notes,
                    url
                }
            )
        })
            .then(res => res.json())
            .then(toast.success('Appointment updated!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }))
            // .then(data => console.log(data))
            .catch(err => console.log(err));
        navigate('/');
        // console.log(appointment.data._id, title, date, type, status, description, street, city, state, zipCode, notes, url);
    };

    return (
        <div className='form-wrapper'>
            <h1 className='text-center form-header'>Edit Appointment</h1>
            <form className='add-form-container' onSubmit={onSubmit}>

                <div className='add-form-inputs'>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="add-form-inputs">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    {/*{console.log(date)}*/}
                </div>
                <div className="add-form-inputs">
                    <label htmlFor="start">Start Time</label>
                    <select className='add-form-select-textarea' id="start" value={start}
                            onChange={(e) => setStart(e.target.value)}>
                        <option value={`${date}` + ` ` + `12:00 AM`}>12:00 AM</option>
                        <option value={`${date}` + ` ` + `1:00 AM`}>1:00 AM</option>
                        <option value={`${date}` + ` ` + `2:00 AM`}>2:00 AM</option>
                        <option value={`${date}` + ` ` + `3:00 AM`}>3:00 AM</option>
                        <option value={`${date}` + ` ` + `4:00 AM`}>4:00 AM</option>
                        <option value={`${date}` + ` ` + `5:00 AM`}>5:00 AM</option>
                        <option value={`${date}` + ` ` + `6:00 AM`}>6:00 AM</option>
                        <option value={`${date}` + ` ` + `7:00 AM`}>7:00 AM</option>
                        <option value={`${date}` + ` ` + `8:00 AM`}>8:00 AM</option>
                        <option value={`${date}` + ` ` + `9:00 AM`}>9:00 AM</option>
                        <option value={`${date}` + ` ` + `10:00 AM`}>10:00 AM</option>
                        <option value={`${date}` + ` ` + `11:00 AM`}>11:00 AM</option>
                        <option value={`${date}` + ` ` + `12:00 PM`}>12:00 PM</option>
                        <option value={`${date}` + ` ` + `1:00 PM`}>1:00 PM</option>
                        <option value={`${date}` + ` ` + `2:00 PM`}>2:00 PM</option>
                        <option value={`${date}` + ` ` + `3:00 PM`}>3:00 PM</option>
                        <option value={`${date}` + ` ` + `4:00 PM`}>4:00 PM</option>
                        <option value={`${date}` + ` ` + `5:00 PM`}>5:00 PM</option>
                        <option value={`${date}` + ` ` + `6:00 PM`}>6:00 PM</option>
                        <option value={`${date}` + ` ` + `7:00 PM`}>7:00 PM</option>
                        <option value={`${date}` + ` ` + `8:00 PM`}>8:00 PM</option>
                        <option value={`${date}` + ` ` + `9:00 PM`}>9:00 PM</option>
                        <option value={`${date}` + ` ` + `10:00 PM`}>10:00 PM</option>
                        <option value={`${date}` + ` ` + `11:00 PM`}>11:00 PM</option>
                    </select>
                </div>
                <div className="add-form-inputs">
                    <label htmlFor="end">End Time</label>
                    <select className='add-form-select-textarea' id="end" value={end}
                            onChange={(e) => setEnd(e.target.value)}>
                        <option value={`${date}` + ` ` + `12:00 AM`}>12:00 AM</option>
                        <option value={`${date}` + ` ` + `1:00 AM`}>1:00 AM</option>
                        <option value={`${date}` + ` ` + `2:00 AM`}>2:00 AM</option>
                        <option value={`${date}` + ` ` + `3:00 AM`}>3:00 AM</option>
                        <option value={`${date}` + ` ` + `4:00 AM`}>4:00 AM</option>
                        <option value={`${date}` + ` ` + `5:00 AM`}>5:00 AM</option>
                        <option value={`${date}` + ` ` + `6:00 AM`}>6:00 AM</option>
                        <option value={`${date}` + ` ` + `7:00 AM`}>7:00 AM</option>
                        <option value={`${date}` + ` ` + `8:00 AM`}>8:00 AM</option>
                        <option value={`${date}` + ` ` + `9:00 AM`}>9:00 AM</option>
                        <option value={`${date}` + ` ` + `10:00 AM`}>10:00 AM</option>
                        <option value={`${date}` + ` ` + `11:00 AM`}>11:00 AM</option>
                        <option value={`${date}` + ` ` + `12:00 PM`}>12:00 PM</option>
                        <option value={`${date}` + ` ` + `1:00 PM`}>1:00 PM</option>
                        <option value={`${date}` + ` ` + `2:00 PM`}>2:00 PM</option>
                        <option value={`${date}` + ` ` + `3:00 PM`}>3:00 PM</option>
                        <option value={`${date}` + ` ` + `4:00 PM`}>4:00 PM</option>
                        <option value={`${date}` + ` ` + `5:00 PM`}>5:00 PM</option>
                        <option value={`${date}` + ` ` + `6:00 PM`}>6:00 PM</option>
                        <option value={`${date}` + ` ` + `7:00 PM`}>7:00 PM</option>
                        <option value={`${date}` + ` ` + `8:00 PM`}>8:00 PM</option>
                        <option value={`${date}` + ` ` + `9:00 PM`}>9:00 PM</option>
                        <option value={`${date}` + ` ` + `10:00 PM`}>10:00 PM</option>
                        <option value={`${date}` + ` ` + `11:00 PM`}>11:00 PM</option>
                    </select>
                </div>
                <div className="add-form-inputs">
                    <label htmlFor="type">Type</label>
                    <select className='add-form-select-textarea' id="type" value={type}
                            onChange={(e) => setType(e.target.value)}>
                        <option value='professional'>professional</option>
                        <option value='personal'>personal</option>
                        <option value='medical'>medical</option>
                        <option value='emergency'>emergency</option>
                        <option value='other'>other</option>
                    </select>
                </div>
                <div className="add-form-inputs">
                    <label htmlFor="status">Status</label>
                    <select className='add-form-select-textarea' id="status" value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                        <option value='pending'>pending</option>
                        <option value='confirmed'>confirmed</option>
                        <option value='cancelled'>cancelled</option>
                    </select>
                </div>
                <div className="add-form-inputs">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" value={description}
                           onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="add-form-inputs">
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" value={street} onChange={(e) => setStreet(e.target.value)}/>
                </div>
                <div className="add-form-inputs">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)}/>
                </div>
                <div className="add-form-inputs">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)}/>
                </div>
                <div className="add-form-inputs">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input type="text" id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
                </div>
                <div className="add-form-inputs">
                    <label htmlFor="notes">Notes</label>
                    <input type="text" id="notes" value={notes} onChange={(e) => setNotes(e.target.value)}/>
                </div>
                <div className="add-form-inputs">
                    <label htmlFor="url">Url</label>
                    <input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)}/>
                </div>
                <button className='add-form-button' type="submit">Update</button>
            </form>
        </div>);
}