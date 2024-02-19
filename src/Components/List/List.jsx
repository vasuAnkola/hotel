import './List.css'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from "date-fns"
import { DateRange } from 'react-date-range';
import SearchItem from '../SerchItem/SearchItem'

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setopenDate] = useState(false);

  const [Options, setOptions] = useState(location.state.Options)



  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">
              Search
            </h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setopenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} TO  ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
              {openDate && (<DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}

              />
              )}

            </div>

            <div className="lsItem">
              <label >Options</label>
              <div className="lsOptions">

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>Per Night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>Per Night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adults
                  </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={Options.adult} />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={Options.children} />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    room
                  </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={Options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
