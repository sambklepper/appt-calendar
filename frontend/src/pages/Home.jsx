import Moment from "react-moment";
import useFetch from '../hooks/useFetch';
import Spinner from "../components/Spinner";
import {FaEdit, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import {deleteItem} from "../services/appointmentService";


export default function Home() {
    const url = '/api/v1/appointments';
    const {data, loading} = useFetch(url);
    // const navigate = useNavigate();

    if (loading) {
        return <Spinner/>
    }

    return (<div>
        <h1 className='text-center'>Appointments</h1>
        <div className="items-list">
            {/*{console.log(data?.data)}*/}
            {data?.data.map((item => (<div key={item._id} className="card">
                <div className="icon-nav">
                        <span className="icon-nav-item">
                            <Link to={`/appointment/${item._id}`}>
                                 <FaEdit/>
                            </Link>
                        </span>
                    <span className="icon-nav-item">
                            <FaTimes onClick={() => deleteItem(item._id)}/>
                    </span>
                </div>
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
                        {item.url ? (<a href={item.url} target="_blank"
                                        rel="noopener noreferrer">{item.url}</a>) : ''}
                    </p>
                </div>

                <div className="card-footer">
                    <div
                        className={item.status === 'pending' ? 'pill-pending' : item.status === 'confirmed' ? 'pill-confirmed' : item.status === 'cancelled' ? 'pill-cancelled' : 'pill'}>
                        <p>{item.status}</p>
                    </div>
                    <div
                        className={item.type === 'professional' ? 'pill-professional' : item.type === 'personal' ? 'pill-personal' : item.type === 'medical' ? 'pill-medical' : 'pill'}>
                        <p>{item.type}</p>
                    </div>
                </div>
            </div>)))}
        </div>
    </div>)

}