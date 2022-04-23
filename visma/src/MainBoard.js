import './App.css';
import Nav from './nav';
import Timeline from './timeline';
import Filter from './filter';
import FilterEvent from './filterEvent';

function nav() {
  return (
    <div>
        <Nav />
        <Timeline />
        <FilterEvent /> 
        <Filter />   
    </div>
  );
}

export default nav;