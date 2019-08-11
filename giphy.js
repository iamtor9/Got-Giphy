const Topics = ["spring","summer", "winter", "fall", "rain", "snow", "sunshine", "storms"]







//Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.
const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);

//add item
function addItem(event) {
    event.preventDefault();
//getinput value
let newItem = document.getElementById('item').value;
//create new li element
let li = document.createElement('li');

//add a class
li.className = 'list-group-item';
//add text node with input value
li.appendChild(document.createTextNode(newItem));

//create
 itemList.appendChild(li);   
}
let input = document.querySelector('input');
input.value = 'type here'

let submit = document.querySelector('input[type="submit"]');
submit.value="send"