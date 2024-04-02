import { useState, useEffect } from "react"; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
    const dispatch = useDispatch();
    
    const [products, getProducts] = useState([]);
    useEffect(()=>{
        //api
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => getProducts(result));
    }, []);

    const addToCart = (product) => {
        // dispatch an add action (don't call directily the action)
        dispatch(add(product))

    }

    const cards = products.map(product => (
        <div className="col-md-3"  style={{ margin: '5px', width:'23.6%' }}>
            <Card key={product.id} className="h-100">
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{width:'100px', height: '130px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                     EU : {product.price}
                    </Card.Text>
                </Card.Body>
                
                <Card.Footer style={{background: 'white'}}>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>   
        </div>
    ))
    
    return((
        <>
            <h1>Product Dashboard</h1>
            <div className="row">
                {cards}
            </div>
        </>
    ))
}

export default Product;