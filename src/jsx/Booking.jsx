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
            <section className='updates'>
                <p>Updates:</p>
                <p>monday</p>
                <section className='updates-monday'></section>
                <p>tuesday</p>
                <section className='updates-tuesday'></section>
                <p>thursday</p>
                <section className='updates-thursday'></section>
                <p>saturday</p>
                <section className='updates-saturday'></section>
            </section>
            <section className='timetable'>
                <p>Timetable:</p>
                <section className='updates-monday'>
                    <p>monday</p>
                    <div className='timeslot'><p>18:00</p><p>Alicja</p></div>
                </section>
                <section className='updates-tuesday'>
                    <p>tuesday</p>
                    <div className='timeslot'><p>18:30</p><p>Alicja</p></div>
                    <div className='timeslot'><p>19:30</p><p>Alicja</p></div>
                </section>
                <section className='updates-thursday'>
                    <p>thursday</p>0
                    <div className='timeslot'><p>18:30</p><p>Alicja</p></div>
                    <div className='timeslot'><p>19:30</p><p>Alicja</p></div>
                </section>
                <section className='updates-saturday'>
                    <p>saturday</p>
                    <div className='timeslot'><p>11:00</p><p>Alicja</p></div>
                </section>
            </section>
        </div>
  )
}

export default Booking