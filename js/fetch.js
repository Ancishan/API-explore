// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// when using const >>>>>>>>>>>>>
        // const url = 'https://jsonplaceholder.typicode.com/todos/1';
        // fetch(url)
        //     .then(response => response.json())
        //     .then(json => console.log(json))

// >>>>>>>>>>>>>>when using function

const url = 'https://jsonplaceholder.typicode.com/todos/1';
function loadData() {
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}
