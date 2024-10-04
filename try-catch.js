function checkAge(){
    const ageFiled = document.getElementById('age')
    const ageText = ageFiled.value
    const errorTag = document.getElementById('error')
  
   

    try{
       const age = parseInt(ageText)
       if(isNaN(age)){
       throw "Please enter a number"
    }
    }
    catch(error){
       console.log('Error...', error)
       errorTag.innerHTML = 'Error' + error
    }
    finally{
       console.log('All done inside try catch')
    }
    console.log(11111)
}