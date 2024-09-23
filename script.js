
const screenEl = document.getElementById("screen")

function screenValue(input){
    screenEl.innerHTML += `${input}`;
}


const buttonArray = Array.from(document.querySelectorAll('button'))
buttonArray.forEach(element => {
    element.addEventListener('click', (e)=>{
        e.preventDefault()
        let result="";
        let inputValue = e.currentTarget.value
        if(inputValue == 'AC'){
            screenEl.innerHTML = ""
        }
        else if(inputValue=="DE"){
            let currentValue = screenEl.innerText
            screenEl.innerHTML = currentValue.slice(0, -1)
        }
        else if(inputValue=="="){
            if(screenEl.innerHTML == ""){
                return
            }else{
                result = eval(screenEl.innerHTML)
                screenEl.innerHTML = result
            }
        }
        else{
            screenValue(inputValue)
        }
    })
});