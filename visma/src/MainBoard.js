import './App.css';
import Nav from './nav';
import Timeline from './timeline';
import Filter from './filter';
import FilterEvent from './filterEvent';
import Footer from './footer';

function nav() {
  return (
    <div>
        <Nav />
        <Timeline />
        <FilterEvent /> 
        <Filter /> 
        <Footer />  
    </div>
  );
}

export default nav;