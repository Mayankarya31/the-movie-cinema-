// new autoComplete({
//     data: {                              // Data src [Array, Function, Async] | (REQUIRED)
//       src: films,
//     },
//     selector: "#autoComplete",           // Input field selector              | (Optional)
//     threshold: 2,                        // Min. Chars length to start Engine | (Optional)
//     debounce: 100,                       // Post duration for engine to start | (Optional)
//     searchEngine: "strict",              // Search Engine type/mode           | (Optional)
//     resultsList: {                       // Rendered results list object      | (Optional)
//         render: true,
//         container: source => {
//             source.setAttribute("id", "movie_list");
//         },
//         destination: document.querySelector("#autoComplete"),
//         position: "afterend",
//         element: "ul"
//     },
//     maxResults: 5,                         // Max. number of rendered results | (Optional)
//     highlight: true,                       // Highlight matching results      | (Optional)
//     resultItem: {                          // Rendered result item            | (Optional)
//         content: (data, source) => {
//             source.innerHTML = data.match;
//         },
//         element: "li"
//     },
//     noResults: () => {                     // Action script on noResults      | (Optional)
//         const result = document.createElement("li");
//         result.setAttribute("class", "no_result");
//         result.setAttribute("tabindex", "1");
//         result.innerHTML = "No Results";
//         document.querySelector("#autoComplete_list").appendChild(result);
//     },
//     onSelection: feedback => {             // Action script onSelection event | (Optional)
//         document.getElementById('autoComplete').value = feedback.selection.value;
//     }
// });
// autocomplete.js
new autoComplete({
  data: {                              // Data src [Array, Function, Async] | (REQUIRED)
    src: films,
  },
  selector: "#autoComplete",           // Input field selector              | (OPTIONAL)
  threshold: 2,                        // Min. Chars length to start Engine | (OPTIONAL)
  debounce: 100,                       // Post duration for engine to start | (OPTIONAL)
  searchEngine: "strict",              // Search Engine type/mode           | (OPTIONAL)
  resultsList: {                       // Rendered results list object      | (OPTIONAL)
    render: true,
    container: source => {
      source.setAttribute("id", "movie_list");
    },
    destination: document.querySelector("#autoComplete"),
    position: "afterend",
    element: "ul"
  },
  maxResults: 5,                         // Max. number of rendered results | (OPTIONAL)
  highlight: true,                       // Highlight matching results      | (OPTIONAL)
  resultItem: {                          // Rendered result item            | (OPTIONAL)
    content: (data, source) => {
      source.innerHTML = data.match;
    },
    element: "li"
  },
  noResults: () => {                     // Action script on noResults      | (OPTIONAL)
    const result = document.createElement("li");
    result.setAttribute("class", "no_result");
    result.setAttribute("tabindex", "1");
    result.innerHTML = "No results found";
    document.querySelector("#movie_list").appendChild(result);
  },
  onSelection: feedback => {
    document.querySelector("#autoComplete").value = feedback.selection.value;
    document.querySelector("#autoComplete").blur();
    const searchBtn = document.querySelector(".movie-button");
    searchBtn.click();                   // Trigger search on selection
  }
});