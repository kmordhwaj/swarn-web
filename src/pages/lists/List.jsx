import './list.css';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { useState } from 'react';
import {useLocation} from "react-router-dom";
import {format} from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {

  const location = useLocation() ;

  const [destination, setDestination] = useState(location.state.destination );
  const [date, setDate] = useState(location.state.date );
  const [openDate, setOpenDate] = useState(false );
  const [options, setOption] = useState(location.state.options );

  return (
    <div>
      <Navbar/>
      <Header type ="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">
              Search
            </h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder='Destination' />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy" )} to ${format(date[0].endDate, "dd/MM/yyyy" )}`}
              </span>
             { openDate && (<DateRange
              onChange={item => setDate([item.selection])} minDate = {new Date()} ranges={date}
              />)}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Minimum price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Maximum price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adult 
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Children 
                </span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">  
                  Room
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
              </div>
              </div>
              </div> 
              <button>Search</button>  
          </div>
        
            <SearchItem />
      
        </div>
      </div>
    </div>
  )
}

export default List