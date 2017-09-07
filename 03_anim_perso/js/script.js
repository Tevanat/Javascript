var yo = document.getElementById('yoshi').getElementsByTagName('div')[0]

console.log( [yo] )

function jump(){
  yo.className = "jump";

  setTimeout( function(){yo.className = 'run'}, 500)
}

yo.addEventListener("click", jump)
