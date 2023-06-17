const express = require("express");
const app = express();
let port = "3000"

app.get("/",(req,res)=>{
     return res.send('hi");
})
app.listen(port, () => console.log("Server started on port 3000"));
