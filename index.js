function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelectorAll('#nested')[0]
}

function deepestChild(){
  
  var node = document.querySelector('#grand-node')
  
  for (var i = 0; i < 4; i++){
    node = node.querySelector('div')
  }
 return node
}

function increaseRankBy(n){
  
  var a = document.getElementsByClassName('ranked-list')
  
  for (var i = 0; i < a.length; i++){
    var b = a[i].getElementsByTagName('li')
  
  for (var j = 0; j < b.length; j++){
   b[j].innerHTML = parseInt(b[j].innerHTML) + n
  }
  }
  }

