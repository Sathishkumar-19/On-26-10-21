//step01:create an XHR object
//request has to be used in whole program
var request=new XMLHttpRequest();
//create a path or connection
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
//once data sucessfully received from server.
request.onload=function(){
    //conversion from string to arrayof json objects.
    var data=JSON.parse(request.response);
   var res =data.filter((ele)=>ele.population<100000);
   console.log(res);
    }

