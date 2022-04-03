import {useState, useEffect} from 'react';
import {getList} from "../services/appointmentService";
import Moment from 'react-moment';


export default function Home() {
    const [list, setList] = useState({});

    useEffect(() => {
        getList().then(items => {
            setList(items);
            // console.log(items);
        })
    }, []);


    return (
        <div>
            <h1 className='text-center'>Appointments</h1>
            <div className="items-list">
                {/*{console.log(list)}*/}
                {list.data?.map((item => (
                    <div key={item._id} className="card">
                        <div className="card-header">
                            <h3>{item.title}</h3>
                            <p><Moment format="MM/DD/YYYY">{item.date}</Moment></p>
                        </div>
                        <div className="card-description">

                            <p>{item.description}</p>
                        </div>

                        <div className="card-body">
                            <div className="notes">
                                <h4>Notes</h4>
                                <p>{item.notes.map((note, index) => (<span key={index}>{note}</span>))}</p>
                            </div>
                            <div className="address">
                                <h4>Address</h4>
                                <p>
                                    {item.address.street}
                                </p>
                                <p>
                                    {item.address.city}, <span>{item.address.state}</span>
                                </p>
                                <p>
                                    {item.address.zipCode}
                                </p>
                            </div>
                        </div>
                        <div className="links">
                            <h4>Links</h4>
                            <p>
                                {item.url ? (
                                        <a href={item.url} target="_blank"
                                           rel="noopener noreferrer">{item.url}</a>)
                                    : ''}
                            </p>
                        </div>

                        <div className="card-footer">
                            <div className={item.status === 'pending' ? 'pill-pending' : 'pill'}>
                                <p>{item.status}</p>
                            </div>
                            <div className={item.type === 'professional' ? 'pill-professional' : 'pill'}>
                                <p>{item.type}</p>
                            </div>
                        </div>
                    </div>)))}
            </div>
        </div>)

}