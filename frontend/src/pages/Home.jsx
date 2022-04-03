import {useState, useEffect} from 'react';
import { getList } from "../services/appointmentService";


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
                    <div key={item._id} className="items">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.date}</p>
                        <p>{item.status}</p>
                        <p>{item.type}</p>
                        <p>{item.notes.map((note, index) => (<span key={index}>{note}</span>))}</p>
                        <p>
                            {item.url ? (
                                    <a href={item.url} target="_blank"
                                       rel="noopener noreferrer">{item.url}</a>)
                                : ''}
                        </p>
                        <p>
                            {item.address.street}
                        </p>
                        <p>
                            {item.address.city}, <span>{item.address.state}</span>
                        </p>
                        <p>
                            {item.address.zipCode}
                        </p>
                    </div>)))}
            </div>
        </div>)

}