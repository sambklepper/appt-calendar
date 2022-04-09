import moment from "moment";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import {useEffect, useState} from "react";
import CalTwo from "./CalTwo";

export default function Calendar() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = '/api/v1/appointments';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [data, loading, error]);

    return (
        <div className='calendar-wrapper'>
            <CalTwo />
            {/* Calendar Header */}
            {/*<div className='calendar-header'>*/}
            {/*    <div className='calendar-header-left'>*/}
            {/*        <div className='calendar-header-left-month'>*/}
            {/*            <div className='calendar-header-left-month-text'>*/}
            {/*                <span>{moment().format('MMMM')}</span>*/}
            {/*            </div>*/}
            {/*            <div className='calendar-header-left-month-arrow'>*/}
            {/*                <FaAngleLeft/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-header-left-year'>*/}
            {/*            <div className='calendar-header-left-year-text'>*/}
            {/*                <span>{moment().format('YYYY')}</span>*/}
            {/*            </div>*/}
            {/*            <div className='calendar-header-left-year-arrow'>*/}
            {/*                <FaAngleLeft/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className='calendar-header-center'>*/}
            {/*        <div className='calendar-header-center-text'>*/}
            {/*            <span>{moment().format('dddd')}</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className='calendar-header-right'>*/}
            {/*        <div className='calendar-header-right-month'>*/}
            {/*            <div className='calendar-header-right-month-text'>*/}
            {/*                <span>{moment().format('MMMM')}</span>*/}
            {/*            </div>*/}
            {/*            <div className='calendar-header-right-month-arrow'>*/}
            {/*                <FaAngleRight/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-header-right-year'>*/}
            {/*            <div className='calendar-header-right-year-text'>*/}
            {/*                <span>{moment().format('YYYY')}</span>*/}
            {/*            </div>*/}
            {/*            <div className='calendar-header-right-year-arrow'>*/}
            {/*                <FaAngleRight/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*/!*    Calendar body*!/*/}

            {/*<div className='calendar-body'>*/}
            {/*    <div className='calendar-body-week'>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Monday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Tuesday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Wednesday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Thursday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Friday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Saturday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Sunday</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className='calendar-body-week'>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Monday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Tuesday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Wednesday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Thursday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Friday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Saturday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Sunday</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className='calendar-body-week'>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Monday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Tuesday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Wednesday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Thursday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Friday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Saturday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Sunday</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className='calendar-body-week'>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Monday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Tuesday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Wednesday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Thursday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Friday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Saturday</span>*/}
            {/*        </div>*/}
            {/*        <div className='calendar-body-week-day'>*/}
            {/*            <span>Sunday</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    )
}