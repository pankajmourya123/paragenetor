const input = document.getElementById("numOfwords");
const container=document.querySelector(".container")

const generateWords=(n)=>{
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<n;++i){
        // const random = (Math.random()*(letters.length-1)).toFixed(0)
      const random =(Math.random()*25).toFixed(0)
        text += letters[random]
    }
    return text;
}





let numOfwords;
const generatePara = ()=>{
    numOfwords=Number(input.value)  //jab bhi hum input se value lete hai toh 99% string mai aata hai
    // console.log(numOfwords)
   const para = document.createElement("p");

   let data ="";
   for(let i=0;i<numOfwords;++i){
       const randomNumber = (Math.random()*15).toFixed(0)
       data += generateWords(randomNumber)
       data += " ";
   }
   para.innerText=data
   para.setAttribute("class","paras");

   container.append(para)
};