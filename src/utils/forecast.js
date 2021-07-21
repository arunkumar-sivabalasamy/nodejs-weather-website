const request = require('postman-request');


const forecast=(latitude,longitude,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=899a1d0d4ceb1a8cd96f9b99f8bf8f67&query=${latitude},${longitude}`;

request({url:url,json:true},(err,res)=>{
    if(err){
        callback('unable to access weather stack',undefined);
    }else if(res.body.error){
        callback('enter your valid location',undefined);
    }else{
        callback(undefined,`It is currently ${res.body.current.temperature} degrees out and there is a ${res.body.current.precip}% chance of rain`);
    }
    
});
} 
module.exports=forecast;