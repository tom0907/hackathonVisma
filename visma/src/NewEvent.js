import React from "react"
import Nav from './nav';
import {Form, Button, Card} from 'react-bootstrap'
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
                        <Form.Control type="text" required value="Pridaj popis eventu" className="formik"/>
                    </Form.Group>
                    <Form.Group id="tag">
                        <Form.Control type="text" required value="Pridaj tag" className="formik"/>
                    </Form.Group>
                    <Form.Group id="photo">
                        <Form.Control type="file" className="custom-file-upload"/>
                    </Form.Group>
                    <Button type="submit">Pridať event</Button>
                    <Calendar className="formik"/>
                </Form>
            </Card.Body>
        </Card>

      </div>
  )
}

export default NewEvent;