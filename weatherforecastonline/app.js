const express=require('express');
const app=express();
const request=require('request');
//const exphbs=require('express-handlebars');
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json());
//app.engine('hsebs',exphbs({ extname: '.hbs'}))
const path=require('path');
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');


//var weather=0;
app.get("/",function(req,res){
    //const city='delhi';
    var  city= 'mumbai';
    const url='https://openweathermap.org/data/2.5/weather?q='+city+'&appid=xxxxxxxxxxxx';
    request(url,function(error,response,body){
        weather_json=JSON.parse(body);
     
        var weather={
            city:weather_json.name ,
            temperature:weather_json.main.temp,
            description:weather_json.weather[0].description,
            
        };
        
        console.log(weather);
    // Weather={};
        res.render('home',{weather:weather});
    })

})
app.post("/",function(req,res){
    // var city='london';
    console.log(req.body)
    var  city= req.body.city;
    const url='https://openweathermap.org/data/2.5/weather?q='+city+'&appid=xxxxxxxxxxxxxx';
    request(url,function(error,response,body){
        weather_json=JSON.parse(body);
     
        var weather={
            city:weather_json.name ,
            temperature:weather_json.main.temp,
            description:weather_json.weather[0].description,
            
        };
        
        console.log(weather);
    // Weather={};
        res.render('home',{weather:weather});
    })


})

app.listen(8000,function(){
    console.log('started at 8000');
})