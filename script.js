const box=document.querySelector('button.bno')
box.addEventListener("mouseover",naughty)
function naughty(){

  const i=Math.floor(Math.random()*90)+5;
  const j=Math.floor(Math.random()*90)+5;
  box.style.left=i+"%"
  box.style.top=j+"%"
}
