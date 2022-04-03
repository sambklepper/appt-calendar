import {useEffect, useState} from 'react';
import axios from "axios";

// export async function getAppointments() {
//     try {
//         const response = await axios.get('/api/v1/appointments');
//         console.log('response', response)
//         return await response.data;
//     } catch (error) {
//         console.log(error);
//         return []
//     }
// }

const useFetch = (url, options) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios(url, options);
                setData(response.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [url, options]);

    return { data, loading, error };
};

export default useFetch;