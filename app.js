const input = document.querySelector('#todo')
const ol = document.querySelector('ol')
const arr =[];

function runTodo() {
    ol.innerHTML = '';
    arr.push(input.value)
    input.value = ''
    console.log(arr);

    for (let i = 0; i < arr.length; i++) { 
        ol.innerHTML += `<li>${arr[i]}
        <img onclick="deleteTodo(${i})" src="./image/Delete.png" alt="">
        <img onclick="editTodo(${i})" src="./image/Edit.png" alt="">
        </li>`

      }
}

function deleteTodo(index) {
    ol.innerHTML = ''
    console.log('delete todo', index);
    arr.splice(index , 1)

    for (let i = 0; i < arr.length; i++) { 
        ol.innerHTML += `<li>${arr[i]}
        <img onclick="deleteTodo(${i})" src="./image/Delete.png" alt="">
        <img onclick="editTodo(${i})" src="../image/Edit.png" alt="">
        </li>`

      }


    
}

function editTodo(index) {
    ol.innerHTML=""
    console.log(`edit todo`, index);
    let updatedvalue = prompt("Enter Updated Value");
    arr.splice(index,1,updatedvalue)

    for (let i = 0; i < arr.length; i++) { 
        ol.innerHTML += `<li>${arr[i]}
        <img onclick="deleteTodo(${i})" src="./image/Delete.png" alt="">
        <img onclick="editTodo(${i})" src="../image/Edit.png" alt="">
        </li>`

      }
}


// const input = document.querySelector('#todo')
// const ol = document.querySelector('ol')
// const arr = [];

// function runTodo() {
//     ol.innerHTML = ''
//     arr.push(input.value)
//     input.value = ''
//     console.log(arr);

//     for (let i = 0; i < arr.length; i++) {
//                ol.innerHTML += `<li>${arr[i]}
//                <button onclick="editTodo(${i})">edit</button>
//                <button onclick="deleteTodo(${i})">delete</button>
//                </li>`
//     }
       
// }

// function deleteTodo(index) {
//     ol.innerHTML = ''
//     console.log('delete todo', index);
//     arr.splice(index , 1);

//     for (let i = 0; i < arr.length; i++) {
//         ol.innerHTML += `<li>${arr[i]}
//         <button onclick="editTodo(${i})">edit</button>
//         <button onclick="deleteTodo(${i})">delete</button>
//         </li>`
// }

    
// }

// function editTodo(index) {
//     ol.innerHTML = ''
//     console.log('edit todo' , index);
//     const updateValue = prompt('enter edit value')
//     arr.splice(index , 1 , updateValue)

//     for (let i = 0; i < arr.length; i++) {
//         ol.innerHTML += `<li>${arr[i]}
//         <button onclick="editTodo(${i})">edit</button>
//         <button onclick="deleteTodo(${i})">delete</button>
//         </li>`
// }


    
// }