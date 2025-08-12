import { useEffect, useState } from "react";
import './Jokes.css'

export default function JokesApi(){
    let [joke, setJoke] = useState({  });

    let URL = "https://official-joke-api.appspot.com/jokes/random";

    const getNewJoke = async () => {
        try {
            let response = await fetch(URL);
            let responsejoker = await response.json();

            console.log(responsejoker.setup, "useeffect");
            console.log(responsejoker.punchline, "useffect");
            console.log("\n");

            setJoke({
                setup: responsejoker.setup,
                punchline: responsejoker.punchline,
            });

        } catch (err) {
            console.error("Error fetching joke:", err);
        }
    };

    useEffect(() => {
        async function getfirstJoke() {
            
            let response = await fetch(URL);
            let responsejoker = await response.json();

            // console.log("I am useEffect ", endl);
            console.log(responsejoker.setup);
            console.log(responsejoker.punchline);
            console.log("\n");

            setJoke({
                setup: responsejoker.setup,
                punchline: responsejoker.punchline,
            });
        }

        getfirstJoke(); // fetch joke only once on mount
    }, []);

    return (
        <div className="appdiv">
            <div className="jokerdiv">
                <h3 className="Joker">Joker?</h3>
            </div>
            
            <div className="jokes">                
                <h2 className="setup">{joke.setup}</h2>                
                <h2 className="punchline">{joke.punchline}</h2>
            </div>
            
            <br />
            <button onClick={getNewJoke} >New Joke</button>
            <br /><br />
        </div>
    );
}