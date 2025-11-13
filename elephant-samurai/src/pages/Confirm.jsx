import { useEffect, useState } from 'react';

export default function Confirm() {
    return (
        <section id="displayArea">
            <div id='title'>
                <h4 className=''></h4>
            </div>

            <div id='DetailBox' className='flex flex-col2 md:flex-row items-center md:items-start gap-6 md:gap-12'>

                <div id='imgPart'><img src="" alt="" /></div>
                <div id='textPart'>
                    <div id='textContent'>
                        <h1>Booking Confirmed!</h1>
                        <p>Your booking has been successfully completed. We look forward to seeing you at the event!</p>
                    </div>
                </div>
            </div>

            <button>View My Ticket</button>
        </section>
    )
}