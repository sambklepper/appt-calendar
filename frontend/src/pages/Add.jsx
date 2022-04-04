import {useState} from "react";

export default function Add() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');
    const [street, setStreet] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [notes, setNotes] = useState('');
    const [url, setUrl] = useState('');

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'date':
                setDate(value);
                break;
            case 'type':
                setType(value);
                break;
            case 'status':
                setStatus(value);
                break;
            case 'street':
                setStreet(value);
                break;
            case 'state':
                setState(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'zipCode':
                setZipCode(value);
                break;
            case 'notes':
                setNotes(value);
                break;
            case 'url':
                setUrl(value);
                break;
            default:
                break;
        }
    };

    return (<div className='form-wrapper'>
        {console.log(title, description, date, type, status, street, state, city, zipCode, notes, url)}
        <h1 className='text-center'>Add</h1>
        <form className='add-form-container'>
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
                <label htmlFor='date'>Date</label>
                <input type='date' name='date' id='date' value={date} onChange={handleChange}/>
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
                           onChange={handleChange} />
                </div>
                <div className='add-form-inputs'>
                    <div className="optional-wrapper">
                        <label htmlFor='city'>City</label>
                        <p className='small-text'>Optional</p>
                    </div>
                    <input type='text' name='city' id='city' placeholder='Enter a city' value={city} onChange={handleChange} />
                </div>
                <div className='add-form-inputs'>
                    <div className="optional-wrapper">
                        <label htmlFor='state'>State</label>
                        <p className='small-text'>Optional</p>
                    </div>
                    <input type='text' name='state' id='state' placeholder='Enter a state' value={state} onChange={handleChange} />
                </div>
                <div className='add-form-inputs'>
                    <div className="optional-wrapper">
                        <label htmlFor='zipCode'>Zip Code</label>
                        <p className='small-text'>Optional</p>
                    </div>
                    <input type='text' name='zipCode' id='zipCode' placeholder='Enter a zip code' value={zipCode} onChange={handleChange} />
                </div>
            </div>
            <div className='add-form-inputs'>
                <div className='optional-wrapper'>

                    <label htmlFor='notes'>Notes</label>
                    <p className="small-text">(Optional)</p>
                </div>
                <textarea className='add-form-select-textarea' name='notes' id='notes' cols='30' rows='6'
                          placeholder='Enter some text' value={notes} onChange={handleChange} ></textarea>
            </div>
            <div className='add-form-inputs'>
                <div className="optional-wrapper">
                    <label htmlFor='url'>Url</label>
                    <p className="small-text">(Optional)</p>
                </div>
                <input type='text' name='url' id='url' placeholder='Enter an url' value={url} onChange={handleChange} />
            </div>
            <button className='add-form-button' type="submit">Submit</button>
        </form>
    </div>);
}
