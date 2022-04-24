import './App.css';
//import HorizontalScroll from 'react-scroll-horizontal'
import Komponenticek from './komponentik';
import Komponenticek1 from './komponentik1';
import Komponenticek2 from './komponentik2';
import Komponenticek3 from './komponentik3';

function timeline() {
  //const child = {width: "300em",height: "20%"}
  return (
    <div>
<p style={{ color: 'inherit', textDecoration: 'inherit', font:'Ubuntu', fontSize:40,fontWeight: "bold",textAlign: "center"}}>Timeline</p> 

    <div className="timeline">
      
      <Komponenticek /> <Komponenticek1 /> <Komponenticek2 /> <Komponenticek3 /> <Komponenticek /> <Komponenticek1 /> <Komponenticek2 /> <Komponenticek3 /><Komponenticek /> <Komponenticek1 /> <Komponenticek2 /> <Komponenticek3 /><Komponenticek /> <Komponenticek1 /> <Komponenticek2 /> <Komponenticek3 /><Komponenticek /> <Komponenticek1 /> <Komponenticek2 /> <Komponenticek3 /><Komponenticek /> <Komponenticek1 /> <Komponenticek2 /> <Komponenticek3 />

      
    </div>
    </div>
  );
}

export default timeline;
