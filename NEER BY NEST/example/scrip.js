// List of search options
const searchOptions = [
    "PICT"
   
    
  ];
  
  // Get references to HTML elements
  const searchBox = document.getElementById("search-box");
  const autocompleteList = document.getElementById("autocomplete-list");
  
  // Function to filter search options based on user input
  function filterOptions(input) {
    return searchOptions.filter(option =>
      option.toLowerCase().includes(input.toLowerCase())
    );
  }
  
  // Function to display autocomplete options
  function displayOptions(options) {
    const listItems = options.map(option => {
      const li = document.createElement("li");
      li.textContent = option;
      return li;
    });
  
    autocompleteList.innerHTML = "";
    listItems.forEach(li => autocompleteList.appendChild(li));
  }
  
  // Event listener for search box input
  searchBox.addEventListener("input", function() {
    const input = this.value;
    const filteredOptions = filterOptions(input);
    displayOptions(filteredOptions);
  });
  
  // Event listener for autocomplete list item click
  autocompleteList.addEventListener("click", function(event) {
    const selectedOption = event.target.textContent;
    const page = selectedOption.toLowerCase().replace(/\s/g, "-") + ".html";
    window.open("index.html") = page;
  });
  