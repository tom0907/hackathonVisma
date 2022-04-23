import React from "react"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import MainBoard from "./MainBoard"
import NewEvent from "./NewEvent"
import Event from "./event"


function App() {
  return (
      <div>
        <Router>
            <Routes>
              <Route path="/" element={<MainBoard />}/>
              <Route path="/newEvent" element={<NewEvent />}/>
              <Route path="/event" element={<Event />}/>
            </Routes>
        </Router>
      </div>
  )
}

export default App;
