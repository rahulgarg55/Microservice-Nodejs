const gateway = require('fast-gateway');
const port = 9001;

const server = gateway({
    routes:[
        {
            prefix: '/order',
            target: 'http://localhost:8081',
            hooks: { 

            }
        },
        {
            prefix: '/product',
            target: 'http://localhost:8082'
        }   
    ]
})


server.get('/mytesting',(req,res)=>res.send('yes called Gateway'));


server.start(port).then(server=>{
    console.log(`Api Gateway is Running at 9001 port`)
})