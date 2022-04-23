import React from "react"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import MainBoard from "./MainBoard"
import NewEvent from "./NewEvent"


function App() {
  return (
      <div>
        <Router>
            <Routes>
              <Route path="/" element={<MainBoard />}/>
              <Route path="/newEvent" element={<NewEvent />}/>
            </Routes>
        </Router>
      </div>
  )
}

export default App;
