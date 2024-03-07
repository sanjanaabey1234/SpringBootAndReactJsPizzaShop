import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { Link } from  "@reach/router";


const ProductCard = (props) => {
    let { image, price, name, id,description} = props.data;
    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
    }
    return (
        <Card 
            style={{ width: '18rem', height: 'auto' }}
            className={`${theme? 'bg-light-black text-light':'bg-lihgt text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
        >
            <Link to={`/product-details/${id}`}>
                <div style={{ background: 'white', height: '0.5rem', overflow: 'hidden', display: 'flex',
                justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
                    <div style={{ width: '1rem'}}>
         
                    </div>
                </div>
            </Link>
            <Card.Body>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                    {name}
                </Card.Title>
                <Card.Title>
                    Rs. <span className="h3">{price}</span>
                </Card.Title>
                <Card.Title>
                   <span className="h3">{description}</span>
                </Card.Title>
                <Button
                    onClick={()=> addToCart()}
                    className={`${theme? 'bg-dark-primary text-black':'bg-light-primary' } d-flex align-item-center m-auto border-0`}
                >
                    <BsCartPlus size="1.8rem" />
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;