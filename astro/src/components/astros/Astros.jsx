import {useState, useEffect} from "react"; 
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import "./Astros.css";

function Astro(props) {

    return (
        <div className="card">
            <h2>{props.astro.name}</h2>
            <p>{props.astro.craft}</p>
        </div>
    );

}


function Astros() {

    const [astros, setAstros] = useState();
    const URL = "http://api.open-notify.org/astros.json";

    useEffect( () => {
        async function fetchData() {
            const response = await fetch(URL);
            const data = await response.json();
            setAstros(data.people);
            console.log(astros);
        } 
        fetchData();
    }, []);

    console.log(astros);

    return (

        <>
        <Typography varant = "h2"> ASTROS </Typography>
        <div className="card-container">
            {
                astros ? (
                astros.map((astro, index) => 
                <Astro astro = {astro} key={index} />
                )) : (
                    <CircularProgress />
                )
            }
        </div>
        </>

    );
}

export default Astros;