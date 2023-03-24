import { useParams } from "react-router-dom"
import Footer from "../components/Footer"

export default function About(){
    const {name } = useParams()
    return(
        <div>
            <p>Olá usuario {name}</p>
        </div>
    )
}