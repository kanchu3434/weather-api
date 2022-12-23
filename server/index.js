import express from  'express'

const app =express();
app.use(express.json());

app.get('weather-app',(req,res)=>{
   res.json("Weather APP")
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})