import './App.css';
//import HorizontalScroll from 'react-scroll-horizontal'
import Komponenticek from './komponentik';

function timeline() {
  //const child = {width: "300em",height: "20%"}
  return (
    <div>
<p style={{ color: 'inherit', textDecoration: 'inherit', font:'Ubuntu', fontSize:40,fontWeight: "bold",textAlign: "center"}}>Timeline</p> 

    <div className="timeline">
      
      <Komponenticek /> <Komponenticek /> <Komponenticek /> <Komponenticek /> <Komponenticek /> <Komponenticek /> <Komponenticek /> <Komponenticek /> <Komponenticek /> <Komponenticek /> <Komponenticek /> <Komponenticek /> 

      
    </div>
    </div>
  );
}

export default timeline;
