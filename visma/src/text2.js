import './App.css';

function text() {

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

  return (
    <div className='abc'>
    <div className="tag1">
        NEW PROJECT
    </div >
    <div className="podnadpis">
        Peter Fecilak
        </div>
        <div className="cas">
        {date}.{month<10?`${month}`:`${month}`}.{year}
        </div>
    </div>
  );
}

export default text;