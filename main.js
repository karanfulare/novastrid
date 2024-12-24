import express from "express" ;
import router from "./src/routes/index.js"
import bodyParser from "body-parser";

const app = express();
const port = 3000 ;

app.use(bodyParser())

app.use('/api',router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
