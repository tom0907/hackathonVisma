import React from "react"
import Nav from './nav';
import {Form, Card} from 'react-bootstrap'
import Calendar from 'react-calendar';




function NewEvent() {
  return (
      <div className="formular">
          <Nav />
          <h2> NEW EVENT</h2>
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
                    <a href="" className="kak"><div className="kok">Pridat obrazok</div></a>
                    <a href="" className="kak"><div className="kek">POTVRDIT</div></a>
                    
                </Form>
            </Card.Body>
        </Card>


      </div>
  )
}

export default NewEvent;