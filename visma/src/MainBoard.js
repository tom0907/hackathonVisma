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
        <Komponenticek /> 
        <Filter />   
    </div>
  );
}

export default nav;