import React from "react"
import Nav from './nav';
import {Form,Button, Card} from 'react-bootstrap'


function NewEvent() {
  return (
      <div>
          <Nav />
          <Card>
            <Card.Body>
                <h2 className='text-center mb-4'> NEW EVENT</h2>
                <Form>
                    <Form.Group id="name">
                        <Form.Label>Name of event</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>
                    <Form.Group id="desctiption">
                        <Form.Label>Desctiption</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group id="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group id="photo">
                        <Form.Label>photo</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Button className="w-100 mt-4" type="submit">Log in</Button>
                </Form>
            </Card.Body>
        </Card>

      </div>
  )
}

export default NewEvent;