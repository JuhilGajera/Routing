import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card, Row } from "react-bootstrap";
import '../Electronic/Electronic.css';

function Mens(props) {
    const [electronicdata, setElectronicData] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products/category/men's clothing")
            .then((res) => {
                setElectronicData(res.data);
            }).catch((err) => {
                console.log('err===>', err)
            });
    }, []);

    const myArr = []
    const handleClick = (e, data) => {
        e.preventDefault();
        myArr.push(data);
        localStorage.setItem('Product', JSON.stringify(myArr))

    }

    return (
        <div>
            <h2 style={{ color: "red" }}>Men's clothing Product</h2>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {electronicdata.map((data, i) => {
                        return <div className="card">
                            <img src={data.image} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{data.title}</h3>
                                <p className="card-description">This ia an Electronic Product</p>
                                <button className="card-button" onClick={(e) => handleClick(e, data)}>Add to cart</button>
                            </div>
                        </div>
                    })}
                </Row>
            </div>
        </div>
    );
}

export default Mens;