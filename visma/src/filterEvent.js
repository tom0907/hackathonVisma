
import './App.css';






function filterEvent() {
  return (
    <div className="filterEventov">  
        <h1>Filters</h1>
       <a href="https://www.w3schools.com"  style={{ color: 'inherit', textDecoration: 'inherit', font:'Open Sans', fontSize:18,fontWeight: "bold",padding:"2%"}}><div className="cc">Newcomers</div></a> 
       <a href="https://www.visma.sk/produkty/"  style={{ color: 'inherit', textDecoration: 'inherit', font:'Open Sans', fontSize:18,fontWeight: "bold"}}><div className="cc">Challenges</div></a> 
       <a href="https://www.visma.sk/kariera/"  style={{ color: 'inherit', textDecoration: 'inherit', font:'Open Sans', fontSize:18,fontWeight: "bold",padding:"2%"}}><div className="cc">Sport events</div></a> 
       <a href="https://www.visma.sk/blog"  style={{ color: 'inherit', textDecoration: 'inherit', font:'Open Sans', fontSize:18,fontWeight: "bold"}}><div className="cc">Tournaments</div></a> 
       <a href="https://www.visma.sk/kontakt/"  style={{ color: 'inherit', textDecoration: 'inherit', font:'Open Sans', fontSize:18,fontWeight: "bold",padding:"2%"}}><div className="cc">Other events</div></a> 
    </div>
  );
}

export default filterEvent;
