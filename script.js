
const screenEl = document.getElementById("screen")

function screenValue(input){
    screenEl.innerHTML += `${input}`;
}

//clear screen
// const clearScreenButon = document.getElementById('clear')
// clearScreenButon.addEventListener("click", (e)=>{
//     // console.log(e.target.value)
//     if(e.currentTarget.value = 'AC'){
//         const x = ""
//         screenValue(x)
//     }
// })

//showing number on screen
// console.log(Array.from(document.querySelectorAll('button')))


//feeding input to the screen
const buttonArray = Array.from(document.querySelectorAll('button'))
buttonArray.forEach(element => {
    element.addEventListener('click', (e)=>{
        let inputValue = e.currentTarget.value
        if(inputValue == 'AC'){
            console.log("yes it is ac")
            const x = ""
            screenValue(x)
        }else{
            screenValue(inputValue)
        }
        
    })
});