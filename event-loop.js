function a(){
    console.log('a')
    b()

    console.log('aa')
}


function b(){
    console.log('b')
    console.log('bb')
    d()
}

function d(){
    console.log('d')
    console.log('dd')
}
function x(){
    console.log('x')
    y()
    console.log('xx')
}
function x(){
    console.log('y')
    z()
    console.log('yy')
}
function x(){
    console.log('z')
    console.log('zz')
}
setTimeout(() => {
  console.log('inside time out')
}, 2000)

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
a()
x()
