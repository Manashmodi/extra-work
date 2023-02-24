function recommended() {
    var selected = document.getElementById('city').value;
    localStorage.setItem('cityName', selected)
   
 } 

 const showRec=()=>{
    var userSelection=localStorage.getItem('cityName');
    userSelection=userSelection?`in ${userSelection}`:''
    document.getElementById('username').innerText= userSelection
 }  
 
 var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Delhi&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

 function getCity() {
   fetch(url)
     .then((res) => res.json())
     .then((data) => {
       var element = document.createElement('option');
       var text = document.createTextNode(data.city.name);
       element.appendChild(text);
       element.value = data.city.name;
       document.getElementById('city').appendChild(element);
     });
 }
 
 getCity();
 
 
/*
var city = ["Delhi", "Mumbai", "Nice", "Pune", "Amsterdam", "London","Helsinki"]

function getCity(){
    city.map((item)=>{ 
        
            var element = document.createElement('option');
            var text=document.createTextNode(item);
            element.appendChild(text);
            element.value=item;
            document.getElementById('city').appendChild(element);
    }   )
}  
/*
function getCity(){

    for(i=0;i<city.length;i++){
        var element = document.createElement('option')
        var text=document.createTextNode(city[i]);
        element.appendChild(text);
        element.value=city[i];
        document.getElementById('city').appendChild(element);
    }
}
*/