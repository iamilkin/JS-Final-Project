const navBar = document.querySelector(".navBar")
const menu_bar = document.querySelector(".menu_nav")

navBar.addEventListener("click", () => {
    menu_bar.classList.toggle("menu_nav_show")
})



// Section 3
let newFile = [];
axios.get("https://ilkin-b243d-default-rtdb.firebaseio.com/features.json")
    .then(response => response.data)
    .then(data => {
        for (let key in data) {
            newFile.push(data[key])
        }
        newFile.map(item => {
            console.log("", item)
            let main_ul = document.querySelector(".main_ul");
            main_ul.innerHTML +=
                `
      <li>
         <div>
            <div>
                <figure>
                  <img src="${item.image}" alt="">
                </figure>
            <h5>${item.title}</h5>
            </div>
            <p>${item.description}</p>
         </div>
                           
       </li>
      `
        })
    })
    .catch(error => console.log(error))

setTimeout(() => {}, 900)













//Slider Section 4
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Section 5
// const section5_images_part1 = document.querySelector(".section5_images_part1")
// const section5_images_part2 = document.querySelector(".section5_images_part2")
// const section5_btn1 = document.querySelector(".section5_btn1")
// let newFilePart = [];
// section5_btn1.addEventListener("click", () => {
//     section5_images_part2.style.display = "block";
//     section5_btn1.style.display = "none";
// })
const section5_images_part1 = document.querySelector(".section5_images_part1")
const section5_images_part2 = document.querySelector(".section5_images_part2")
const section5_btn1 = document.querySelector(".section5_btn1")
let newFilePart = [];
section5_btn1.addEventListener("click", () => {
    if (section5_images_part2.style.display === "flex") {
        section5_btn1.innerHTML = "See More";
        section5_images_part2.style.display = "none";
    } else {
        section5_btn1.innerHTML = "See Less";
        section5_images_part2.style.display = "flex";
    }
})




//Section 7
let newArray = [];
axios.get("https://ilkin-b243d-default-rtdb.firebaseio.com/testimonials.json")
    .then(response => response.data)
    .then(data => {
        for (let key in data) {
            newArray.push(data[key])
        }
        newArray.map(item => {
            console.log("", item)
            let section7_main_part_cards = document.querySelector(".section7_main_part_cards");
            section7_main_part_cards.innerHTML +=
                `
      <div class="section7_main_part_card">
        <div>
          <figure>
           <img src="${item.image}" alt="">
          </figure>
        <div>
        <h5>${item.header}</h5>
        <h5>${item.specialty}</h5>
        </div>
        </div>
        <p>${item.feedback}</p>
      </div>
      `
        })
    })
    .catch(error => console.log(error))

setTimeout(() => {}, 900)