const express = require('express');
const app =  express();


const PORT = 3000;


app.get("/", (req, res)=>{
    res.send("Your request is accepted");
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});