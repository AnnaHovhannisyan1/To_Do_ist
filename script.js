const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");
const button = document.getElementById('buttonAdd')

button.addEventListener('click', addText);
function addText(){
    if (inputBox.value === '') {
        alert('add text')
    }else{
        const li = document.createElement("li")
        li.innerHTML = inputBox.value
        listCont.append(li)
        const span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.append(span)
    }
    inputBox.value=""
    
}

listCont.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
    } else if (event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
    }
})