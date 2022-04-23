import './App.css';
import Nav from './nav';
import Timeline from './timeline';
import Filter from './filter';

function nav() {
  return (
    <div>
        <Nav />
        <Timeline />
        <Filter />   
    </div>
  );
}

export default nav;