
const request = require('postman-request');


const geocode=(address,callback)=>{
    const geocodeurl=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYXJ1bjEwMDAiLCJhIjoiY2tyYWVqeWYyMHhqMTJ2bHE4dGkzbWo4dCJ9.5dc4oSLhg6wVodhU8tLpPA&limit=1`;
    request({url:geocodeurl,json:true},(err,{body}={})=>{
        if(err){
           callback('unable to access map box',undefined);
        }else if(body.features.length===0){
           callback('enter your valid location',undefined);
        }else{
        callback(undefined,{ latitude:body.features[0].center[1],
             longitude:body.features[0].center[0],location:body.features[0].place_name});
        
        }
    })

}

module.exports=geocode;