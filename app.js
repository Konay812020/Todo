var getform = document.getElementById("form");
var gettextbox = document.getElementById("textbox");


var getul = document.getElementById("list-group");
$('#form').submit(function (e) {
    e.preventDefault();
    console.log("i am oks");
    addnew();
});
// getform.addEventListener("submit", function (event) {
//     if (document.querySelector('form').checkValidity()) {
//         event.preventDefault();
//         console.log("Prevent default submission");
//         alert("ALERT!!!!!");
//     }
// })

// getform.addEventListener('submit', (e) => {

//     // console.log("i am working");

//     // e.preventDefault();
//     // addnew();
//     console.log("i am working");
//     e.preventDefault();






// });

function addnew(todo) {
    var todotext = gettextbox.value;
    console.log(todotext);

    if (todo) {
        todotext = todo.text;
    }
    if (todotext) {
        const li = document.createElement("li");
        // console.log(todotext);
        // console.log(todo.done);
        if (todo && todo.done) {
            li.classList.add("done")
        }

        // console.log(li);
        li.appendChild(document.createTextNode(todotext));
        getul.appendChild(li);
        gettextbox.value = "";
        updatelocalstorage();

        //left click
        li.addEventListener("click", function () {
            li.classList.toggle("done");
            updatelocalstorage();
        })
        //right click(contextmenu)
        li.addEventListener("contextmenu", function () {
            li.remove();
            updatelocalstorage();
        })



    }

}

function updatelocalstorage() {
    var getalllis = document.querySelectorAll("li");
    const todos = [];
    getalllis.forEach(function (getallli) {
        todos.push({
            text: getallli.textContent,
            done: getallli.classList('done')
        });
    });
    // console.log(todos) 
    localStorage.setItem('todos', JSON.stringify(todos));
}

var getlstodos = JSON.parse(localStorage.getItem('todos'));


if (getlstodos) {
    getlstodos.forEach(function (getlstodo) {
        addnew(getlstodo);
    });
}

// 31TD