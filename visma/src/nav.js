import './App.css';

function nav() {
  return (
    <div className="Nav">
        <img 
      src="data:image/png;base64,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"
      alt="new"
      style={{ float: 'left', width: '10%',paddingLeft:"3%"}}
      />    
       <a href="https://www.w3schools.com" style={{ color: 'inherit', textDecoration: 'inherit', font:'Open Sans', fontSize:18,fontWeight: "bold",padding:"2%"}}>Úvod</a> 
       <a href="https://www.visma.sk/produkty/" style={{ color: 'inherit', textDecoration: 'inherit', font:'Open Sans', fontSize:18,fontWeight: "bold"}}>Produkty</a> 
       <a href="https://www.visma.sk/kariera/" style={{ color: 'inherit', textDecoration: 'inherit', font:'Open Sans', fontSize:18,fontWeight: "bold",padding:"2%"}}>Kariéra</a> 
       <a href="https://www.visma.sk/blog" style={{ color: 'inherit', textDecoration: 'inherit', font:'Open Sans', fontSize:18,fontWeight: "bold"}}>Blog</a> 
       <a href="https://www.visma.sk/kontakt/" style={{ color: 'inherit', textDecoration: 'inherit', font:'Open Sans', fontSize:18,fontWeight: "bold",padding:"2%"}}>Kontakt</a> 
    </div>
  );
}

export default nav;
