import express from 'express';// This line is module javascript

const app = express();

// app.get('/',(req, res)=>{
//    res.send('server is ready');
// });

// get a list of 5 jokes
app.get('/api/jokes',(req, res)=>{
    const jokes = [
        {
            id:1,
            title:'Atif',
            content: 'Atif ki GF Ayehsa'
        },
        {
            id:2,
            title:'Ayesha',
            content: 'Ayesha ki BF Atif'
        },
        {
            id:3,
            title:'Ryan',
            content: 'Ryan ki GF Niharika'
        },
        {
            id:4,
            title:'Bilal',
            content: 'Bilal ki GF Naaz'
        },
        {
            id:5,
            title:'This is me',
            content: 'MD shams raza '
        }
    ];
    res.send(jokes);
});

const port =  process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
});