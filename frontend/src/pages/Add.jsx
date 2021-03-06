import {useState} from "react";
import {setItem} from "../services/appointmentService"
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';

export default function Add() {
    const [appointment, setAppointment] = useState({
        title: '', description: '', startDate: '', endDate: '', type: '', status: '', start: '', end: '',
        street: '', state: '', city: '', zipCode: '', address: {street: '', state: '', city: '', zipCode: ''},
        notes: '', url: ''
    });

    const {
        title,
        description,
        startDate,
        endDate,
        type,
        status,
        start,
        end,
        street,
        state,
        city,
        zipCode,
        notes,
        url
    } = appointment;
    const navigate = useNavigate();

    const handleChange = (e) => {
        setAppointment((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value, address: {
                ...prevState.address,
                [e.target.name]: e.target.value
            }
        }));

    }

    const onSubmit = (e) => {
        e.preventDefault();
        setItem(appointment);
        toast.success('Appointment added!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        navigate('/');
    }

    return (<div className='form-wrapper'>
        {/*{console.log(title, description, date, type, status, street, state, city, zipCode, notes, url)}*/}
        <h1 className='text-center'>Add</h1>
        <form className='add-form-container' onSubmit={onSubmit}>
            <div className='add-form-inputs'>
                <label htmlFor='name'>Title</label>
                <input type='text' name='title' id='title' placeholder='Enter a title' value={title}
                       onChange={handleChange}/>
            </div>
            <div className='add-form-inputs'>
                <label htmlFor='description'>Description</label>
                <input type='text' name='description' id='description' placeholder='Enter a description'
                       value={description} onChange={handleChange}/>
            </div>


            <div className='add-form-inputs'>
                <label htmlFor='type'>Category</label>
                <select className='add-form-select-textarea' name='type' id='type' defaultValue='professional'
                        onChange={handleChange}>
                    <option value='professional'>professional</option>
                    <option value='personal'>personal</option>
                    <option value='medical'>medical</option>
                    <option value='emergency'>emergency</option>
                    <option value='other'>other</option>
                </select>
            </div>

            <div className='add-form-inputs'>
                <label htmlFor='status'>Status</label>
                <select className='add-form-select-textarea' name='status' id='status' defaultValue='pending'
                        onChange={handleChange}>
                    <option value='pending'>pending</option>
                    <option value='confirmed'>confirmed</option>
                    <option value='cancelled'>cancelled</option>
                </select>
            </div>
            <div className='add-form-inputs'>
                <label htmlFor='startDate'>Start Date</label>
                <input type='date' name='startDate' id='startDate' value={startDate} onChange={handleChange}/>
            </div>
            {console.log(startDate)}
            <div className='add-form-inputs'>
                <label htmlFor='start'>Start Time</label>
                <select className='add-form-select-textarea' name='start' id='start' defaultValue='8:00 AM'
                        onChange={handleChange}>
                    <option value={`${startDate}` + ` ` + `12:00 AM`}>12:00 AM</option>
                    <option value={`${startDate}` + ` ` + `1:00 AM`}>1:00 AM</option>
                    <option value={`${startDate}` + ` ` + `2:00 AM`}>2:00 AM</option>
                    <option value={`${startDate}` + ` ` + `3:00 AM`}>3:00 AM</option>
                    <option value={`${startDate}` + ` ` + `4:00 AM`}>4:00 AM</option>
                    <option value={`${startDate}` + ` ` + `5:00 AM`}>5:00 AM</option>
                    <option value={`${startDate}` + ` ` + `6:00 AM`}>6:00 AM</option>
                    <option value={`${startDate}` + ` ` + `7:00 AM`}>7:00 AM</option>
                    <option value={`${startDate}` + ` ` + `8:00 AM`}>8:00 AM</option>
                    <option value={`${startDate}` + ` ` + `9:00 AM`}>9:00 AM</option>
                    <option value={`${startDate}` + ` ` + `10:00 AM`}>10:00 AM</option>
                    <option value={`${startDate}` + ` ` + `11:00 AM`}>11:00 AM</option>
                    <option value={`${startDate}` + ` ` + `12:00 PM`}>12:00 PM</option>
                    <option value={`${startDate}` + ` ` + `1:00 PM`}>1:00 PM</option>
                    <option value={`${startDate}` + ` ` + `2:00 PM`}>2:00 PM</option>
                    <option value={`${startDate}` + ` ` + `3:00 PM`}>3:00 PM</option>
                    <option value={`${startDate}` + ` ` + `4:00 PM`}>4:00 PM</option>
                    <option value={`${startDate}` + ` ` + `5:00 PM`}>5:00 PM</option>
                    <option value={`${startDate}` + ` ` + `6:00 PM`}>6:00 PM</option>
                    <option value={`${startDate}` + ` ` + `7:00 PM`}>7:00 PM</option>
                    <option value={`${startDate}` + ` ` + `8:00 PM`}>8:00 PM</option>
                    <option value={`${startDate}` + ` ` + `9:00 PM`}>9:00 PM</option>
                    <option value={`${startDate}` + ` ` + `10:00 PM`}>10:00 PM</option>
                    <option value={`${startDate}` + ` ` + `11:00 PM`}>11:00 PM</option>
                </select>
            </div>
            <div className='add-form-inputs'>
                <label htmlFor='endDate'>End Date</label>
                <input type='date' name='endDate' id='endDate' value={endDate} onChange={handleChange}/>
            </div>

            <div className='add-form-inputs'>
                <label htmlFor='end'>End Time</label>
                <select className='add-form-select-textarea' name='end' id='end' defaultValue='8:00 AM'
                        onChange={handleChange}>
                    <option value={`${endDate}` + ` ` + `12:00 AM`}>12:00 AM</option>
                    <option value={`${endDate}` + ` ` + `1:00 AM`}>1:00 AM</option>
                    <option value={`${endDate}` + ` ` + `2:00 AM`}>2:00 AM</option>
                    <option value={`${endDate}` + ` ` + `3:00 AM`}>3:00 AM</option>
                    <option value={`${endDate}` + ` ` + `4:00 AM`}>4:00 AM</option>
                    <option value={`${endDate}` + ` ` + `5:00 AM`}>5:00 AM</option>
                    <option value={`${endDate}` + ` ` + `6:00 AM`}>6:00 AM</option>
                    <option value={`${endDate}` + ` ` + `7:00 AM`}>7:00 AM</option>
                    <option value={`${endDate}` + ` ` + `8:00 AM`}>8:00 AM</option>
                    <option value={`${endDate}` + ` ` + `9:00 AM`}>9:00 AM</option>
                    <option value={`${endDate}` + ` ` + `10:00 AM`}>10:00 AM</option>
                    <option value={`${endDate}` + ` ` + `11:00 AM`}>11:00 AM</option>
                    <option value={`${endDate}` + ` ` + `12:00 PM`}>12:00 PM</option>
                    <option value={`${endDate}` + ` ` + `1:00 PM`}>1:00 PM</option>
                    <option value={`${endDate}` + ` ` + `2:00 PM`}>2:00 PM</option>
                    <option value={`${endDate}` + ` ` + `3:00 PM`}>3:00 PM</option>
                    <option value={`${endDate}` + ` ` + `4:00 PM`}>4:00 PM</option>
                    <option value={`${endDate}` + ` ` + `5:00 PM`}>5:00 PM</option>
                    <option value={`${endDate}` + ` ` + `6:00 PM`}>6:00 PM</option>
                    <option value={`${endDate}` + ` ` + `7:00 PM`}>7:00 PM</option>
                    <option value={`${endDate}` + ` ` + `8:00 PM`}>8:00 PM</option>
                    <option value={`${endDate}` + ` ` + `9:00 PM`}>9:00 PM</option>
                    <option value={`${endDate}` + ` ` + `10:00 PM`}>10:00 PM</option>
                    <option value={`${endDate}` + ` ` + `11:00 PM`}>11:00 PM</option>
                </select>
            </div>
            <div className="address-form-section">
                <div className='address-heading text-center'>
                    <label htmlFor='address'>Address</label>
                </div>
                <div className='add-form-inputs'>
                    <div className="optional-wrapper">
                        <label htmlFor='street'>Street</label>
                        <p className='small-text'>Optional</p>
                    </div>
                    <input type='text' name='street' id='street' placeholder='Enter a street' value={street}
                           onChange={handleChange}/>
                </div>
                <div className='add-form-inputs'>
                    <div className="optional-wrapper">
                        <label htmlFor='city'>City</label>
                        <p className='small-text'>Optional</p>
                    </div>
                    <input type='text' name='city' id='city' placeholder='Enter a city' value={city}
                           onChange={handleChange}/>
                </div>
                <div className='add-form-inputs'>
                    <div className="optional-wrapper">
                        <label htmlFor='state'>State</label>
                        <p className='small-text'>Optional</p>
                    </div>
                    <input type='text' name='state' id='state' placeholder='Enter a state' value={state}
                           onChange={handleChange}/>
                </div>
                <div className='add-form-inputs'>
                    <div className="optional-wrapper">
                        <label htmlFor='zipCode'>Zip Code</label>
                        <p className='small-text'>Optional</p>
                    </div>
                    <input type='text' name='zipCode' id='zipCode' placeholder='Enter a zip code'
                           value={zipCode}
                           onChange={handleChange}/>
                </div>
            </div>
            <div className='add-form-inputs'>
                <div className='optional-wrapper'>
                    <label htmlFor='notes'>Notes</label>
                    <p className="small-text">(Optional)</p>
                </div>
                <textarea className='add-form-select-textarea' name='notes' id='notes' cols='30' rows='6'
                          placeholder='Enter some text' value={notes} onChange={handleChange}></textarea>
            </div>
            <div className='add-form-inputs'>
                <div className="optional-wrapper">
                    <label htmlFor='url'>Url</label>
                    <p className="small-text">(Optional)</p>
                </div>
                <input type='text' name='url' id='url' placeholder='Enter an url' value={url} onChange={handleChange}/>
            </div>
            <button className='add-form-button' type="submit">Submit</button>
        </form>
    </div>);
}