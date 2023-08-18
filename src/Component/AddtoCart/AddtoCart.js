import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';

export default function AddtoCart() {
    const [data, setData] = useState([]);

    const getData = () => {
        const dataa = JSON.parse(localStorage.getItem('Product'));
        setData(dataa);
    }

    useEffect(() => {
        getData();
    }, []);

    const removeFromCart = (id) => {
        const dataa = JSON.parse(localStorage.getItem('Product'));

        const index = dataa.findIndex(item => item.id === id);
        if (index !== -1) {
            dataa.splice(index, 1);
            setData([...dataa]); // Trigger re-render by creating a new array reference
            localStorage.setItem('Product', JSON.stringify(dataa)); // Update the localStorage
        }
    }

    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {data ?

                    data.map((item) => (
                        <Card key={item.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                            </Card.Body>
                            <Card.Body>
                                <Button variant="danger" style={{ width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => removeFromCart(item.id)}>Remove</Button>
                            </Card.Body>
                        </Card>
                    ))

                    : null}
            </Row>
        </div>
    )
}
