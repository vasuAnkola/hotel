import './FeaturedProperties.css'

const FeaturedProperties = () => {
    return (
        <div className='fp'>
           <div className="fpItem">
            <img src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="fpImg" />
            <span className="fpName">ApartHotel Stare Mistry</span>
            <span className="fpCity">Dubai</span>
            <span className="fpPrice">  Starting From 6500$</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>
            <div className="fpItem">
            <img src="https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="fpImg" />
            <span className="fpName">Sky Nights</span>
            <span className="fpCity">Tokyo</span>
            <span className="fpPrice"> Starting from 2500$</span>
            <div className="fpRating">
                <button>8.4</button>
                <span>Excellent</span>
            </div>
            </div>
            <div className="fpItem">
               <img src="https://images.pexels.com/photos/417289/pexels-photo-417289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="fpImg" />
            <span className="fpName">Empario </span>
            <span className="fpCity">New York City</span>
            <span className="fpPrice"> Start From 3500$</span>
            <div className="fpRating">
                <button>9.1</button>
                <span>Excellent</span>
            </div>
            </div>
            <div className="fpItem">
            <img src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="fpImg" />
            <span className="fpName">Gulbai Tekra</span>
            <span className="fpCity">Ahmedabad</span>
            <span className="fpPrice"> Starting From 25000$</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>
        </div>
    )
}

export default FeaturedProperties
