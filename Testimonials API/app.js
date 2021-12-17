const choosePhoto = document.querySelector(".choosePhoto")
const exportPhoto = document.querySelector(".exportPhoto")
const header = document.querySelector(".header")
const feedback = document.querySelector(".feedback")
const specialty = document.querySelector(".specialty")
const exportBtn = document.querySelector(".exportBtn")

let choosePhoto_url;

choosePhoto.addEventListener("change", (e) => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        choosePhoto_url = reader.result
    }
    reader.readAsDataURL(file);
    // console.log(choosePhoto_url);
})

exportBtn.addEventListener("click", () => {
    axios.post("https://ilkin-b243d-default-rtdb.firebaseio.com/testimonials.json", {
            id: Date.now(),
            image: choosePhoto_url,
            header: header.value,
            specialty: specialty.value,
            feedback: feedback.value,
        }).then(
            header.value = "",
            specialty.value = "",
            feedback.value = "",
            exportPhoto.value = "",
        )
        .catch(error => console.log(error))
})

axios.delete("https://ilkin-b243d-default-rtdb.firebaseio.com/testimonials.json")