/* jshint esversion: 8 */
'use strict';
const BASE_URL =  "http://localhost:5000/api/v1/jokes"

async function get_joke() {
    var language = document.getElementById("selLang").value;
    var numberOfJokes = document.getElementById("selNum").value;
    var jokeCategory = document.getElementById("selCat").value;
    var jokeId = document.getElementById("jokeId").value;

    if (jokeId) {
        var fetchedJokes= await fetch(`${BASE_URL}/${language}/${jokeCategory}/${numberOfJokes}/${jokeId}`)
        .then(response => response.json());
        let jokeRow=document.querySelector("#response")
        for (let numberOfJokes in fetchedJokes){
            let jokeDiv=document.createElement("div");
            jokeDiv.setAttribute("class", "mui-btn mui-btn--flat");
            jokeDiv.setAttribute("style", "width:100%;margin-top:20px;");
            jokeDiv.innerHTML=fetchedJokes[numberOfJokes];
            jokeRow.appendChild(jokeDiv);
            }}
    else{
        
        var fetchedJokes= await fetch(`${BASE_URL}/${language}/${jokeCategory}/${numberOfJokes}`)
        .then(response => response.json());  
        let jokeRow=document.querySelector("#response")
        for (let numberOfJokes in fetchedJokes){
            let jokeDiv=document.createElement("div");
            jokeDiv.setAttribute("class", "mui-btn mui-btn--flat");
            jokeDiv.setAttribute("style", "width:100%;margin-top:20px;");
            jokeDiv.innerHTML=fetchedJokes[numberOfJokes];
            jokeRow.appendChild(jokeDiv);
        }
        }}

function disableSelect(){
    $('#selNum').val('1');
}
    
