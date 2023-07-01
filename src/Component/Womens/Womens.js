import { Button } from 'bootstrap';
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function AddtoCart() {
    const [data, setData] = useState();

    const getData = () => {
        const dataa = JSON.parse(localStorage.getItem('Product'));
        console.log(dataa); // Check the value of dataa
        setData(dataa);
        console.log(data); // Check the value of data after setting it
    }

    return (
        <div>
            {data && data.map((item) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                        <button onClick={getData}>Get Data</button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}
