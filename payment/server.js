const express = require('express');
const app = express();

const port = 8082;


app.get('/payment-list', (req, res) => {
    let response = {
        data:{
            item:[
                {
                    id:1, name:'order 1'
                },
                {
                    id:2, name:'order 2'
                }  
            ]

            
        }
    }
    res.status(200).json(response);
}); 

app.listen(port, ()=>{
    console.log(`Payment service is listening at http://localhost:${port}`);
})


