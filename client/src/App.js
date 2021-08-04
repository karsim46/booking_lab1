import {useState, useEffect} from "react";
import {getGuests} from "./booking_service";
import './App.css';

function App() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getGuests().then((allBookings)=> {
      setBookings(allBookings);
    })
  }, [])

  return (
    <div>
      Hello World!
     
    </div>
      
  );
}

export default App;
