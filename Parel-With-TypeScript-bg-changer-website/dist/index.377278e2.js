// console.log("Hello World");
// alert("Hello you are in the website");
let btn = document.getElementById("btn");
let isOrginalColor = true;
let orginalColor = "white";
let ChangedColor = "wheat";
btn.addEventListener("click", ()=>{
    document.body.style.backgroundColor = isOrginalColor ? ChangedColor : orginalColor;
    isOrginalColor = !isOrginalColor;
    console.log("Clicked");
});

//# sourceMappingURL=index.377278e2.js.map
