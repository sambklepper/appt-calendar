import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

// const events = [
//     {
//         start: moment().toDate(),
//         end: moment()
//             .add(1, "days")
//             .toDate(),
//         title: "Some title"
//     },
//     {
//         start: 'Sat Apr 09 2022 11:00:00 GMT-0500 (Central Daylight Time)',
//         end: 'Sat Apr 09 2022 12:00:00 GMT-0500 (Central Daylight Time)',
//         title: "Tattoo removal appointment"
//     },
//     {
//         start: 'Tue Apr 12 2022 09:00:00 GMT-0500 (Central Daylight Time)',
//         end: 'Tue Apr 12 2022 18:00:00 GMT-0500 (Central Daylight Time)',
//         title: "Start new job @ Bouncing Pixel"
//     }
//
// ]




export default function CalTwo({data}) {
    const events = data.data.map(event => {
        return {
            start: new Date(event.start),
            end: new Date(event.end),
            title: event.title
        }
    })
    // console.log(events)
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{height: '85vh'}}
                popup
            />
        </div>
    )
}