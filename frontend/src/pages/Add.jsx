export default function Add() {
    return (<div className='form-wrapper'>
        <h1 className='text-center'>Add</h1>
        <form className='add-form-container'>
            <div className='add-form-inputs'>
                <label htmlFor='name'>Title</label>
                <input type='text' name='title' id='title' placeholder='Enter a title'/>
            </div>
            <div className='add-form-inputs'>
                <label htmlFor='description'>Description</label>
                <input type='text' name='description' id='description' placeholder='Enter a description'/>
            </div>
            <div className='add-form-inputs'>
                <label htmlFor='date'>Date</label>
                <input type='date' name='date' id='date'/>
            </div>

            <div className='add-form-inputs'>
                <label htmlFor='type'>Category</label>
                <select className='add-form-select-textarea' name='type' id='type' defaultValue='professional'>
                    <option value='professional'>professional</option>
                    <option value='personal'>personal</option>
                    <option value='medical'>medical</option>
                    <option value='emergency'>emergency</option>
                    <option value='other'>other</option>
                </select>
            </div>

            <div className='add-form-inputs'>
                <label htmlFor='status'>Status</label>
                <select className='add-form-select-textarea' name='status' id='status' defaultValue='pending'>
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
                    <input type='text' name='street' id='street' placeholder='Enter a street'/>
                </div>
                <div className='add-form-inputs'>
                    <div className="optional-wrapper">
                    <label htmlFor='city'>City</label>
                        <p className='small-text'>Optional</p>
                    </div>
                        <input type='text' name='city' id='city' placeholder='Enter a city'/>
                </div>
                <div className='add-form-inputs'>
                    <div className="optional-wrapper">
                    <label htmlFor='state'>State</label>
                        <p className='small-text'>Optional</p>
                    </div>
                    <input type='text' name='state' id='state' placeholder='Enter a state'/>
                </div>
                <div className='add-form-inputs'>
                    <div className="optional-wrapper">
                    <label htmlFor='zipCode'>Zip Code</label>
                        <p className='small-text'>Optional</p>
                    </div>
                    <input type='text' name='zipCode' id='zipCode' placeholder='Enter a zip code'/>
                </div>
            </div>
            <div className='add-form-inputs'>
                <div className='optional-wrapper'>

                    <label htmlFor='notes'>Notes</label>
                    <p className="small-text">(Optional)</p>
                </div>
                <textarea className='add-form-select-textarea' name='notes' id='notes' cols='30' rows='6'
                          placeholder='Enter some text'></textarea>
            </div>
            <div className='add-form-inputs'>
                <div className="optional-wrapper">
                    <label htmlFor='url'>Url</label>
                    <p className="small-text">(Optional)</p>
                </div>
                <input type='text' name='url' id='url' placeholder='Enter an url'/>
            </div>
            <button className='add-form-button' type="submit">Submit</button>
        </form>
    </div>);
}
