import service_items from "./item.js";

const serviceDetails = document.querySelector(".service_details");
let booked_item_array = [];
let currentServiceIndex = 0;

// Error/success message setup
const secondPageRightBottom = document.querySelector(".second_page_right_bottom");

const showError = document.createElement("p");
showError.className = "show_error";
showError.innerText = "🔴 Add the items to cart to book";
secondPageRightBottom.append(showError);

const showSuccess = document.createElement("p");
showSuccess.className = "show_error_green";
showSuccess.innerText = "🟢 Email has been sent successfully";
secondPageRightBottom.append(showSuccess);

// Inputs
const inp = document.querySelectorAll(".innp");
let objForInp = {};
inp.forEach((input) => {
  input.addEventListener("input", (e) => {
    objForInp[e.target.name] = e.target.value;
    // Hide error when user starts typing
    showError.classList.remove("visible");
  });
});

(function () {
  emailjs.init("0XQP5oGzz1f94YaBZ");
})();

function sendEmail(name, email) {
  const params = {
    name,
    email,
    subject: "Laundry Service",
  };
  emailjs
    .send("service_hx3k37t", "template_fvun5om", params)
    .then(() => console.log("Email sent"))
    .catch((error) => console.error("Email sending failed:", error));
}

function displayCurrentService() {
  serviceDetails.innerHTML = "";

  if (currentServiceIndex >= service_items[0].length) currentServiceIndex = 0;
  const item = service_items[0][currentServiceIndex];

  const renderServices = document.createElement("div");
  renderServices.className = "render_services";

  const img = document.createElement("img");
  img.className = "render_services_img";
  img.src = item.service_img;

  const namePrice = document.createElement("div");
  namePrice.className = "name_price";
  const name = document.createElement("p");
  name.innerText = item.service_name;
  const price = document.createElement("p");
  price.innerText = `₹ ${item.service_price}`;
  namePrice.append(name, price);

  const buttons = document.createElement("div");
  buttons.className = "add_skip_button";

  const skipBtn = document.createElement("button");
  skipBtn.innerText = "Skip item -";

  const addBtn = document.createElement("button");
  addBtn.innerText = "Add Item +";

  buttons.append(skipBtn, addBtn);
  renderServices.append(img, namePrice, buttons);
  serviceDetails.append(renderServices);

  addBtn.addEventListener("click", () => {
    if (!booked_item_array.find((el) => el.id === item.id)) {
      booked_item_array.push(item);
      updateBookedServices();
    }
    currentServiceIndex++;
    displayCurrentService();
  });

  skipBtn.addEventListener("click", () => {
    const indexInBooked = booked_item_array.findIndex((el) => el.id === item.id);
    if (indexInBooked !== -1) {
      booked_item_array.splice(indexInBooked, 1);
      updateBookedServices();
    }
    currentServiceIndex++;
    displayCurrentService();
  });
}

function updateBookedServices() {
  const bookedService = document.querySelector(".booked_service");
  bookedService.innerHTML = "";

  if (booked_item_array.length === 0) {
    const noServiceImg = document.createElement("div");
    noServiceImg.id = "no_service_img";
    noServiceImg.style.fontSize = "60px";
    noServiceImg.style.marginTop = "10px";
    noServiceImg.innerText = "🛈";

    const noServiceHeading = document.createElement("div");
    noServiceHeading.id = "no_service_heading";
    noServiceHeading.innerText = "No item added";

    const noServiceP = document.createElement("div");
    noServiceP.id = "no_service_p";
    noServiceP.innerText = "Add items to the cart from the services bar";

    bookedService.append(noServiceImg, noServiceHeading, noServiceP);

    bookNowBtn.classList.add("book_now_button_inactive");
    bookNowBtn.disabled = true;

    
    showError.classList.add("visible");
  } else {
    booked_item_array.forEach((item, i) => {
      const bookedServiceDetails = document.createElement("div");
      bookedServiceDetails.className = "booked_service_details";

      const idDiv = document.createElement("div");
      idDiv.innerText = i + 1;
      idDiv.className = "booked_service_index";

      const nameDiv = document.createElement("div");
      nameDiv.innerText = item.service_name;
      nameDiv.className = "booked_service_name";

      const priceDiv = document.createElement("div");
      priceDiv.innerText = `₹ ${item.service_price}`;
      priceDiv.className = "booked_service_price";

      bookedServiceDetails.append(idDiv, nameDiv, priceDiv);
      bookedService.append(bookedServiceDetails);
    });

    bookNowBtn.classList.remove("book_now_button_inactive");
    bookNowBtn.disabled = false;

    showError.classList.remove("visible");
  }

  updateTotalAmount();
}

function updateTotalAmount() {
  const totalAmount = document.querySelector("#TotalAmount");
  const sum = booked_item_array.reduce(
    (acc, cur) => acc + parseFloat(cur.service_price),
    0
  );
  totalAmount.innerText = `₹ ${sum.toFixed(2)}`;
}

const bookNowBtn = document.querySelector(".book_now_button");
bookNowBtn.classList.add("book_now_button_inactive");
bookNowBtn.disabled = true;

bookNowBtn.addEventListener("click", () => {
  const { name, email } = objForInp;
  if (!name || !email) {
    showError.innerText = "🔴 Please fill in your name and email!";
    showError.classList.add("show_error");
    showError.style.display = "block"
    
    return;
  }
  if(name || email) {
    showError.innerText = "🟢 Email sent successfully!";
    showError.classList.add("show_error_green");
    showError.style.display = "block"

    setTimeout(()=>{
      showError.style.display = "none"
    },3000)
    
  }

  // Hide error when inputs are valid
  showError.classList.remove("show_error");

  sendEmail(name, email);

  inp.forEach((input) => (input.value = ""));
  objForInp = {};
  booked_item_array = [];
  currentServiceIndex = 0;

  displayCurrentService();
  updateBookedServices();

  showSuccess.classList.add("visible");
  setTimeout(() => {
    showSuccess.classList.remove("visible");
  }, 3000);
});

displayCurrentService();
updateBookedServices();
