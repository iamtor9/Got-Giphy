//api_key = UTWQgYBFOWnw4r21kPuXpEEwIP5iG3xZ

let topics = ["mad", "sneaky", "speechless", "tantrum" "success", "laughing"];

document.querySelectorAll(".gif").forEach(function (img) {
    img.addEventListener("click", function (event) {

      // The javascript getAttribute method allows us to get or set the value of any attribute on our HTML element
      let state = event.target.getAttribute("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        event.target.setAttribute("src", event.target.getAttribute("data-animate"));
        event.target.setAttribute("data-state", "animate");
      } else {
        event.target.setAttribute("src", event.target.getAttribute("data-still"));
        event.target.setAttribute("data-state", "still");
      }

      //form function
      function myFunction() {
        let userInput = document.createElement("FORM");
        userInput.setAttribute("id", "myForm");
        document.body.appendChild(userInput);
      
        let userText = document.createElement("INPUT");
        userText.setAttribute("type", "text");
        userText.setAttribute("value", "Donald");
        document.getElementById("myForm").appendChild(userText);
      }

  
      // I believe this goes in the html doc. will need to 
      //adjust it to make sense in this code, tweak it!

//let topics = ["mad", "sneaky", "speechless", "tantrum" "success", "laughing"];

      // Generic function for capturing the movie name from the data-attribute
      //function alertMovieName() {
        //document.getElementById("submit").innerHTML = JSON.stringify(responseJson);
       
        // YOUR CODE GOES HERE!!!

      }

      //<input onclick="submit()">Try it</input>
      //function alertMovieName() {
      //alert(type).append("submit");
      




//Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.
//const form = document.getElementById('addForm');
//const itemList = document.getElementById('items');

//form submit event
//form.addEventListener('submit', addItem);

//add item
//function addItem(event) {
    //event.preventDefault();
//getinput value
//let newItem = document.getElementById('item').value;
//create new li element
//let li = document.createElement('li');

//add a class
//li.className = 'list-group-item';
//add text node with input value
//li.appendChild(document.createTextNode(newItem));

//create
 //itemList.appendChild(li);   
//}
//let input = document.querySelector('input');
//input.value = 'type here'

//let submit = document.querySelector('input[type="submit"]');
//submit.value="send"