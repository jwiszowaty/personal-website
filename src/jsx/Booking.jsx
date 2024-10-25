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
                    <td>18:00 Alicja</td>
                    <td>18:30 Martyna</td>
                    <td>18:30 Gleb</td>
                    <td>11:00 Rafał</td>
                </tr>
                <tr>
                    <td></td>
                    <td>19:30 Rafał</td>
                    <td>19:30 Grzegorz</td>
                </tr>
                
            </table>
        </div>
  )
}

export default Booking