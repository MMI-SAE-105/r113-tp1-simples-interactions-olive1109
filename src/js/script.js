// TODO
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")
aMettreEnRouge.style.color="red"

const enROugeSuiteAClick = document.querySelector("#en-rouge-suite-a-click")
enRougeSuiteAClick.addEventListener("click", (evt)=>{
  enROugeSuiteAClick.style.color="red"
});

const collH2 = document.querySelectorAll("h2")
NodeList(3) [h2, h2, h2]
collH2.forEach((elm)=>{
    elm.addEventListener("click",(evt)=>{
        evt.target.style.color="red";
    });
});
