// Create a function called `myFunction()`
function myFunction() {
    // Create a variable called `searchTerm` that will use `document.querySelector()` to target the `id` of the input
    // Use `.value` to capture the value of the input and store it in the variable
    var searchTerm = document.querySelector('#searchTerm').value;
  console.log(searchTerm)
    // Make a `fetch` request concatenating the `searchTerm` to the query URL
    fetch('https://foodish-api.herokuapp.com/api/images/' + searchTerm)
      .then(function(response) {
        console.log("first.then.response",response)
        return response.json()
      })
      .then(function(results) {
        console.log("second.then.results",results)
        console.log("logging image URL", results.image)
        document.querySelector("#food-container").innerHTML = `<div class="row"><div class="col s3"><img src="${results.image}" style="width:100%"></div></div>`
      })
        // Clear the search bar after the food is searched
       document.getElementById('searchTerm').value = ""
       // Create an error/null response if that food doesnt exist
       function CheckError(response) {
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
              return response.json();
            } else {
              throw Error(response.statusText);
            }
          })
          .then((Response) => {
    
          }).catch((error) => {
            // Handle the error
            console.log(error);
          });  
      
      
    }