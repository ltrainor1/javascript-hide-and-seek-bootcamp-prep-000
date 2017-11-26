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
  var a = document.querySelector('ranked-1st').querySelectorAll('li')
  
  for (var i = 0; i < a.length; i++){
    a[i].innerHTML.set(a[i].innerHTML + n)
  }
}