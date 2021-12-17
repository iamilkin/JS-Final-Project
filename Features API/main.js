// const imgInput = document.querySelector(".imgInput")
const description = document.querySelector(".description")
const title = document.querySelector(".title")
const uploadImage = document.querySelector(".uploadImage")
const send = document.querySelector(".send")



const imgInput = document.querySelector(".imgInput")
let imgInput_url;

imgInput.addEventListener("change", (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        imgInput_url = reader.result
    }
    reader.readAsDataURL(file)
    console.log(imgInput_url);
})



send.addEventListener("click", () => {
    axios.post("https://ilkin-b243d-default-rtdb.firebaseio.com/features.json", {
            id: Date.now(),
            image: imgInput_url,
            title: title.value,
            description: description.value,
        }).then(
            title.value = "",
            description.value = "",
            uploadImage.value = "",
        )
        .catch(error => console.log(error))
})

// axios.delete("https://ilkin-b243d-default-rtdb.firebaseio.com/features.json")