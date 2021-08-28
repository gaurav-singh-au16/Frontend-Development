import { PATHS } from "../config"
import HomePage from "../container/HomePage"
import Login from "../container/Login"
import Products from "../container/Products"
import Signup from "../container/Signup"
import Cart from "../container/Cart"


const routes = [
    {path : PATHS.HOME,  exact: true, component : HomePage},
    {path : PATHS.LOGIN, exact : true, component : Login},
    {path : PATHS.PRODUCTS, exact : true, component : Products},
    {path : PATHS.SIGNUP, exact : true, component : Signup},
    {path : PATHS.CART, exact : true, component : Cart}
]

export default routes
