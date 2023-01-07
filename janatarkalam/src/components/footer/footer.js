import React from 'react';
import "../footer/footer.css";

const footer = () => {
    return (
        <div id='footer'>
            <div className='fs'>
                <div className='first_part'>
                    <img src="https://www.janatarkalam.com/static/janatarkalam/images/janatar_kolom.png" alt='' />
                    <h3>জনতার ভাষায়, জনতার সাথে |
                    </h3></div>
                <div className='second_part'>
                    <div><a href="#" >important links</a></div>
                    <div><a href="#" >important links</a></div>
                    <div><a href="#" >important links</a></div>
                    
                </div>
            </div>
            <div>Vector images used in this application that are not part of the dyanamic news material are either propriatory or licensed exclusively to Chevichef Private Limited.
            </div>
            <div className='last_part'>© 2021-22 Janatar Kalam. All Rights Reserved
                A <devsiti /> production
            </div>

        </div>
    )
}

export default footer