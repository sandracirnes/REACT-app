import "./Navbar.css";
import { Link } from "react-router-dom";
import RocketIcon from "@mui/icons-material/Rocket";

function Navbar ({header, links}) {

    return (

        <nav>

            <div>
                <RocketIcon/>
                <h2>{header}</h2> 
            </div>

            <div>

                {links.map ((link) => (
                    <Link className="link" to={link.link} key={link.id}>
                        {link.text}
                    </Link>
                ))}

            </div>
            
        </nav>
    )

    // Si estoy dentro de una funcion así se pone un comentario
    /*
    Así se pone un comentario linea
    */

}

export default Navbar;