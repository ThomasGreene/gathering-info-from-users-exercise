const lego = {
        creator: "Per Sun",
        color: "Black",
        shape: "Animal",
        creation: "Black Cow"
}

document.querySelector('.lego__save').addEventListener("click", event => {
        const creatorInput = document.querySelector("#lego__creator").value
        const colorInput = document.querySelector("#lego__color").value
        const shapeInput = document.querySelector("#lego__shape").value
        const creationInput = document.querySelector("#lego__creation").value
        const legoObject = {
                creator: creatorInput,
                color: colorInput,
                shape: shapeInput,
                creation: creationInput
        }
console.log(legoObject);
// Now you must use fetch to create your lego in the API. 
// The default method for fetch is GET, so you've never had to specify and configuration options before. 
// However, with POST, you need to configure the request.
fetch("http://localhost:8088/legos", { // Replace "url" with your API's URL
        method: "POST",
         headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(legoObject)
})
})