import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function UpdateForm({appointment}) {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/v1/appointments/${appointment.data._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    _id: appointment.data._id,
                    title,
                    date,
                    type,
                    status,
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
            .then(data => console.log(data))
            .catch(err => console.log(err));
        navigate('/');
        console.log(appointment.data._id, title, date, type, status, description, street, city, state, zipCode, notes, url);
    };

    const [title, setTitle] = useState(appointment.data.title);
    const [date, setDate] = useState(appointment.data.date);
    const [type, setType] = useState(appointment.data.type);
    const [status, setStatus] = useState(appointment.data.status);
    const [description, setDescription] = useState(appointment.data.description);
    const [street, setStreet] = useState(appointment.data.address.street);
    const [city, setCity] = useState(appointment.data.address.city);
    const [state, setState] = useState(appointment.data.address.state);
    const [zipCode, setZipCode] = useState(appointment.data.address.zipCode);
    const [notes, setNotes] = useState(appointment.data.notes);
    const [url, setUrl] = useState(appointment.data.url);

    return (
        <div>

            <form onSubmit={onSubmit}>
                <div className="update-form-container">
                    <div className="form-label">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="form-label">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>

                    </div>
                    <div className="form-label">
                        <label htmlFor="type">Type</label>
                        <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value='professional'>professional</option>
                            <option value='personal'>personal</option>
                            <option value='medical'>medical</option>
                            <option value='emergency'>emergency</option>
                            <option value='other'>other</option>
                        </select>
                    </div>
                    <div className="form-label">
                        <label htmlFor="status">Status</label>
                        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value='pending'>pending</option>
                            <option value='confirmed'>confirmed</option>
                            <option value='cancelled'>cancelled</option>
                        </select>
                    </div>
                    <div className="form-label">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" value={description}
                               onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="form-label">
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" value={street} onChange={(e) => setStreet(e.target.value)}/>
                    </div>
                    <div className="form-label">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div className="form-label">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)}/>
                    </div>
                    <div className="form-label">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="text" id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
                    </div>
                    <div className="form-label">
                        <label htmlFor="notes">Notes</label>
                        <input type="text" id="notes" value={notes} onChange={(e) => setNotes(e.target.value)}/>
                    </div>
                    <div className="form-label">
                        <label htmlFor="url">Url</label>
                        <input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)}/>
                    </div>
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>);
}