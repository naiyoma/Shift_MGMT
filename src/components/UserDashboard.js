import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar.css'

const localizer = momentLocalizer(moment)

const MyCalendar = (props) => (
  <div className="my-calendar-container">
    <Calendar
      localizer={localizer}
      events={props.events}
      startAccessor="start"
      endAccessor="end"
      className='text-black  rounded px-2 py-1 md:shadow-lg md:rounded-lg p-4 bg-white dark:bg-gray-700 md:w-96 mx-4 md:mx-auto mt-16'
      style={{
            width: '400px',
            maxWidth: '100%',
            backgroundColor: '#fff',
            color: '#222',
            borderRadius: '8px',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
            fontFamily: 'Arial, Helvetica, sans-serif',
            lineHeight: '1.125em',
            height: '600px',
            border: "transparent !important",
            textAlign: "center"
      }}
      dayClassName={date => moment().isSame(date, 'day') ? 'current-day' : ''}
      messages={{
          next: '>',
          previous: '<',
          today: 'Today',
          month: '',
          week: '',
          day: '',
          agenda: ''
      }}
    />
  </div>
)

export default MyCalendar;
