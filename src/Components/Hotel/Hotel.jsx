import './Hotel.css'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import MailLIst from "../MailList/MailLIst"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)
    const photos = [
        {
            src: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            src: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            src: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            src: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            src: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            src: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
    ]

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNUmber;

        if (direction === "l") {
            newSlideNUmber = slideNumber === 0 ? 5 : slideNumber - 1;
        }else{
            newSlideNUmber = slideNumber === 5 ? 0 : slideNumber+1;
        }
        setSlideNumber(newSlideNUmber)
    }

  
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='Arrow' onClick={() => handleMove("l")} />
                    <div className="slidewrapper">
                        <img src={photos[slideNumber].src} alt="" className="slideImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className='Arrow' onClick={() => handleMove("r")} />


                </div>}
                <div className="hotelWrapper">
                    <button className='bookNow'>Reaserve or Book now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St New York</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent Location - 500m from Center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get  a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (

                            <div className="hotelImgWrapper">
                                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className='hotelImg' />
                            </div>

                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay In The Heart Of Ahmnedabad</h1>
                            <p className="hotelDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, assumenda aspernatur? Omnis commodi quos laudantium quibusdam dicta facilis, unde tenetur necessitatibus. Porro, nulla illum. Perspiciatis, velit quod impedit voluptatum odio voluptates quas, maxime suscipit blanditiis voluptas illum est voluptatibus, vero omnis necessitatibus ad praesentium dicta ipsum dolores. Facere sed odio tempore ipsum aliquid velit quod nihil aliquam veniam libero. Molestiae molestias, ut illo et magnam necessitatibus rerum fugiat ullam voluptates, quaerat deserunt dignissimos omnis quia nobis velit sint incidunt vel, ad iste? Odit deleniti error quis magnam tempore veritatis sapiente quidem inventore nihil. Vel sit recusandae maxime quae tempora. Placeat!</p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for  a 9-night stay!</h1>
                            <span>
                                located in the real heart of amd ,this oropert hase an exceelent locatiuon score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b>(9 nights)
                            </h2>
                            <button>Reserv or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailLIst />

                <Footer />
            </div>

        </div>
    )
}

export default Hotel
