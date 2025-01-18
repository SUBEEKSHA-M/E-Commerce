const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});

function togglePayment() {
    const paymentSection = document.querySelector(".payment");

    if (paymentSection.classList.contains("hidden")) {
        paymentSection.classList.remove("hidden");
        paymentSection.classList.add("visible");
    } else {
        paymentSection.classList.remove("visible");
        paymentSection.classList.add("hidden");
    }

    paymentSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function handlePayment() {
    const fields = document.querySelectorAll('.payInput');

    for (let field of fields) {
        if (field.value === "") {
            alert("Please fill in all fields before proceeding.");
            return;
        }
    }

    document.querySelector(".payment").classList.add("hidden");

    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.classList.remove('hidden');
    
    thankYouMessage.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}
