// console.log("Hello World");
// alert("Hello you are in the website");

let btn = document.getElementById("btn") as HTMLButtonElement

let isOrginalColor = true;
let orginalColor = "white";
let ChangedColor = "wheat";

btn.addEventListener("click",() =>{
    document.body.style.backgroundColor = isOrginalColor ? ChangedColor : orginalColor;
    isOrginalColor=!isOrginalColor;
    console.log("Clicked");
    
})

