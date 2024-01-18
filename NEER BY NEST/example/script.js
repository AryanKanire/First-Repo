function search() {
    var searchTerm = document.getElementById("search-input").value;
  
    // Replace with your own logic to perform the search and determine the results
    var searchResults = performSearch(searchTerm);
  
    displaySearchResults(searchResults);
  }
  
  function performSearch(searchTerm) {
    // Replace with your own logic to perform the search
    // This could involve making an API request or searching through data
    // In this example, we'll assume we have a predefined list of search results
  
    var predefinedResults = [
      {
        title: "PICT",
        url: "index.html"
      },
      {
        title: "Result 2",
        url: "result2.html"
      },
      {
        title: "Result 3",
        url: "result3.html"
      }
    ];
  
    // Filter the results based on the search term (optional)
    var filteredResults = predefinedResults.filter(function(result) {
      return result.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  
    return filteredResults;
  }
  
  function displaySearchResults(searchResults) {
    var resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";
  
    if (searchResults.length === 0) {
      resultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
      searchResults.forEach(function(result) {
        var resultLink = document.createElement("a");
        resultLink.href = result.url;
        resultLink.innerText = result.title;
        resultsContainer.appendChild(resultLink);
        resultsContainer.appendChild(document.createElement("br"));
      });
    }
  }
  