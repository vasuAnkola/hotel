import './SearchItem.css'



const SearchItem = () => {
    return (
        <div className='searchItem' >
            <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m From Center</span>
                <span className='siTaxiOp'>Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment With Air Conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>

                <div className="siDetailsTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and Fees</span>
                    <button className='siCheckButton'>See availability</button>
                </div>
            </div>
           
        </div>
    )
}

export default SearchItem
