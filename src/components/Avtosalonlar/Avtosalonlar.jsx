import { useState } from 'react'
import '../Car.jsx'
import '../Avtosalonlar/Avtosalonlar.scss'
export default function Avtosalonlar({ name, coach, logo }) {
    return (
        <div className='Avtosalonlar'>
            <div className='Avtosalonlar2' >
                <div >
                    <img className='img2' src="https://logowik.com/content/uploads/images/282_mercedes_benz_logo.jpg" alt="" />
                </div>

                <div className='rigth'>
                    <h2>
                        Abşeron Mercedes-Benz
                    </h2>

                    <p>
                        (050) 289-09-85 (050) 289-09-80...
                    </p>
                    <p>10 elan</p>
                    <p>Abşeron Avtomobil Mərkəzi Mercedes-Benz<br /> markasının Azərbaycandakı rəsmi dileridir.</p>

                </div>
            </div>
            <div className='Avtosalonlar3' >
                <div >
                    <img className='img2' src="https://logowik.com/content/uploads/images/282_mercedes_benz_logo.jpg" alt="" />
                </div>

                <div className='rigth'>
                    <h2>
                        Abşeron Mercedes-Benz
                    </h2>
                    <p>
                        (050)289-09-85(050)289-09-80...
                    </p>
                    <p>10 elan</p>
                    <p>Abşeron Avtomobil Mərkəzi Mercedes-Benz<br /> markasının Azərbaycandakı rəsmi dileridir.</p>

                </div>

                
            </div>
            
        </div>
        
    )
}