function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => consosle.log(err))
}

async function loadUserAsync(){
    const res =  await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    const data = await res.json()
    console.log(data)
}
const loadUserArrow = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
   const data = await res.json()
   console.log(data)

}

const loadUserCatch = async() => {
  try{
     const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
     const data = await res.json()
     console.log(data)
  }
  catch(error){

  }
}