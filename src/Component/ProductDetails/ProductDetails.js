import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Productdetails(props) {
    const [product, setProduct] = useState({
        title: "",
        id: "",
        image: "",
        price: "",
        category: "",
    });
    const navigate = useNavigate();
    const { id } = useParams(); //params = {id:9,price:99}

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            console.log(res);
            setProduct(res.data);
        });
    }, []);
    return (
        <div>
            <h2>{product.category.toUpperCase()}</h2>
            <img src={product.image} width={300} height={300} />
            <br />
            <br />
        </div>
    );
}

export default Productdetails;