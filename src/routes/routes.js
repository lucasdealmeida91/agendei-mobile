import RoutesAuth from "./routesAuth"
import RoutesUnauth from "./routesUnauth"
import { useContext } from "react"
import { AuthContext } from "../contexts/auth"

function Routes(){
    const {user} = useContext(AuthContext)
    return user.id_user ? <RoutesAuth/> : <RoutesUnauth/>
}

export default Routes