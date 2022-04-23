import './App.css';
import Calendar from 'react-calendar'


function filter() {
  return (
    <div className="filter">
      <header>
        TU DAJ DATUM
        <Calendar />
      </header>
    </div>
  );
}

export default filter;
