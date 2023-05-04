let quotes=[
    "The whole secret of existence is to have no fear" ,
    "Dream,dream,dream.Dreams transform into thoughts and thoughts result in action",
    "Time is the best author.It always writes the perfect ending",
    "If you don't like to read ,you haven't found the right book",
];
let authors=[
    "swami vivekananda",
    "A.P.J Abdul kalam",
    "charlie chaplin",
    "J.K. Rowling",
];
let images=[
    "img/vivekananda.jfif","img/abdulkalam.png","img/charliechaplin.jfif","img/jkrowling.jfif",

]
let quote=document.querySelector("div h2");
let author=document.querySelector("div h3");
let image=document.querySelector("div img");
let button=document.querySelector("button");
let body=document.querySelector("body");
function randomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")";

}

button.addEventListener("click",function(e) {
    let random=Math.floor(Math.random()*quotes.length);
    quote.textContent=quotes[random];
    author.textContent=authors[random];
   // body.style.backgroundImage="linear-gradient"
   console.log(body.style.backgroundColor);
   image.src=images[random];


});