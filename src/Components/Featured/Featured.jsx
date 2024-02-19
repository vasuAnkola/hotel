import './Featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src= "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" className="featured" />
            <div className="featuredTitles">
                <h2>London</h2>
                <h3>123 Properties</h3>
            </div>
        </div>    
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featured" />
            <div className="featuredTitles">
                <h2>Dubai</h2>
                <h3>250 Properties</h3>
            </div>
        </div>    
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="featured" />
            <div className="featuredTitles">
                <h2>Tokyo</h2>
                <h3>305 Properties</h3>
            </div>
        </div>    
    </div>
  )
}

export default Featured
