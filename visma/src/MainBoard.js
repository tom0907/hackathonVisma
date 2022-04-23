import './App.css';
import Nav from './nav';
import Timeline from './timeline';
import Filter from './filter';
import Komponenticek from './komponentik';

function nav() {
  return (
    <div>
        <Nav />
        <Timeline />
        <Filter />
        <Komponenticek />    
    </div>
  );
}

export default nav;