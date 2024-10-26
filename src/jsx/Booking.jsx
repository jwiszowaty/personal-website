import React from 'react'
import '../styles/booking.css'
function Booking() {
    return (
        <div className='booking'>
            <iframe className='schedule'
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2KQJfwa4yAFo5uNZ9VCbJMK2rNoCcdWHG3KxGC5FDw1O7HhbMfnJfVPDHlfwyBS80KVMrxUsLb?gv=true"
                style={{border: 0}}
                // width={{100}}
                // height="600"
                // frameBorder="0"
            >    
                </iframe>
            <table className='updates'>
                <caption>Updates</caption>
                <tr>
                    <th>mondays</th>
                    <td>no updates</td>
                </tr>
                <tr>
                    <th>tuesdays</th>
                    <td>no updates</td>
                </tr>
                <tr>
                    <th>thursday</th>
                    <td>no updates</td>
                </tr>
                <tr>
                    <th>saturdays</th>
                    <td>no updates</td>
                </tr>
            </table>
            <table className='timetable'>
                <caption>Timetable</caption>
                <tr>
                    <th>monday</th>
                    <th>tuesday</th>
                    <th>thursday</th>
                    <th>saturday</th>
                </tr>
                <tr>
                    <td className='reserved'>18:00 Reserved</td>
                    <td className='reserved'>18:30 Reserved</td>
                    <td className='reserved'>18:30 Reserved</td>
                    <td className='reserved'>11:00 Reserved</td>
                </tr>
                <tr>
                    <td></td>
                    <td className='reserved'>19:30 Reserved</td>
                    <td className='reserved'>19:30 Reserved</td>
                    <td>12:00 Available</td>
                </tr>
                
            </table>
        </div>
  )
}

export default Booking