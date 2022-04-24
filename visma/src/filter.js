
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';





function filter() {
  return (
    <div className="filter">
      <header>
        <h3>Filter by date</h3>
        <Calendar/>
      </header>
    </div>
  );
}

export default filter;
