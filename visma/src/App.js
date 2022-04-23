import React from "react"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import MainBoard from "./MainBoard"
import NewEvent from "./NewEvent"
import Event from "./event"
import Tv from "./tv"


function App() {
  return (
      <div>
        <Router>
            <Routes>
              <Route path="/" element={<MainBoard />}/>
              <Route path="/newEvent" element={<NewEvent />}/>
              <Route path="/event" element={<Event />}/>
              <Route path="/tv" element={<Tv />}/>
            </Routes>
        </Router>
      </div>
  )
}

export default App;
