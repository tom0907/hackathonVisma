import React from "react"
import Nav from './nav';
import {Form, Card} from 'react-bootstrap'
import Calendar from 'react-calendar';
//import { addEvent, uploadEvent } from "database/databaseHandler.js";
//onClick={addEvent(formik.value, formik2.value, uploadEvent(formik1.value))}


function NewEvent() {
  return (
      <div className="formular">
          <Nav />
          <p style={{ color: 'inherit', textDecoration: 'inherit', font:'Ubuntu', fontSize:40,fontWeight: "bold",textAlign: "center"}}>New Event</p>
          <Card className="teloCard">
            <Card.Body >
                <Form>
                    <Form.Group id="name">
                        <Form.Control type="text" required value="Pridaj meno eventu" className="formik"/>
                    </Form.Group>
                    <Form.Group id="desctiption">
                        <Form.Control type="text" required value="Pridaj popis eventu" className="formik1"/>
                    </Form.Group>
                    <Form.Group id="tag">
                        <Form.Control type="text" required value="Pridaj tag" className="formik2"/>
                    </Form.Group>
                    <div className="kik"><Calendar /></div>
                    <a href="" className="kak"><div className="kok">Pridať obrázok</div></a>
                    <a href="" className="kak"><div className="kek" >Potvrdiť</div></a>
                    


                </Form>
            </Card.Body>
        </Card>


      </div>
  )
}

export default NewEvent;