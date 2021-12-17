import Rating from 'react-rating';
import './css/index.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function Product() {
    return (
        <div className="card" style={{ width: '250px' }}>
            <img src="https://static-01.daraz.pk/p/cf9a45356e37e8b5496c09382789ff28.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">China Airpods</h5>
                <span>Rs: <del>200</del> <u>100</u></span>
                <br />
                <Rating
                    emptySymbol={<AiOutlineStar color="#ffc600" />}
                    fullSymbol={<AiFillStar color="#ffc600" />}
                />
                <br />
                <a href="#" className="btn">Add to cart</a>
            </div>
            <div className="sale_box">
                50%
            </div>
        </div>
    )
}

export default Product;