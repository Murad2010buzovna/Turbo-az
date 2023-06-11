import { useState } from "react";
import "./Car.scss"
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";


export default function Car({ car }) {
    const [favorite, setfavorite] = useState(false);
    function toggleFavorite() {
        setfavorite((prev) => !prev)
    }


    return (


        <div>
            

            <div className="car">



                <div className="imageBox">
                    <img className="image" src="https://turbo.azstatic.com/uploads/f460x343/2023%2F05%2F27%2F19%2F11%2F56%2F5aabf1cb-fb1e-4015-b422-4a0faa99d73b%2F77297_3V36aGusr0bFelRG8psVOA.jpg" alt="" />
                    {favorite ? <AiFillHeart className="icon" onClick={toggleFavorite} /> : <AiOutlineHeart className="icon emptyHeart" onClick={toggleFavorite} />}
                </div>
                <h2>230 000 EUR</h2>
                <p>Porsche Cayenne Turbo G..</p>
                <p>2022,4.0 L,1 300 km</p>
            </div>
        </div>
    )

}