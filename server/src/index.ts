import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";


// Connections and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then( () => {

        app.listen( PORT, () => console.log( "Server open & connected to the database" ) );
    } )
    .catch( ( err ) => console.log( err ) );