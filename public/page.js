const submitButton = document.getElementById("submit-data")
const textArea = document.getElementById("input-text")

submitButton.addEventListener("click", () => {
    fetch("http://localhost:3000/list", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({text: textArea.value})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    }) 
})
