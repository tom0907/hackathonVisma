import './App.css';

function text() {

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

  return (
    <div className='abc'>
    <div className="tag3">
        CHALLENGES
    </div >
    <div className="podnadpis">
        Emilia Pietrikova
        </div>
        <div className="cas">
        {date}.{month<10?`${month}`:`${month}`}.{year}
        </div>
    </div>
  );
}

export default text;