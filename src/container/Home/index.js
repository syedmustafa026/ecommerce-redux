import { useSelector, useDispatch } from 'react-redux'
import { getDataFromApi } from '../../store/Actions'
import { Slider, Product } from '../../components'
import './css/index.css'
function Home() {
    const store = useSelector(state => state.auth);
    const dispatch = useDispatch()

    return (
        <div>
            <Slider />
            <div className="products">
                <div>
                    <h4>Products</h4>
                    <div className="border_line">
                    </div>
                </div>
                <Product />
            </div>
        </div>
    )
}

export default Home;