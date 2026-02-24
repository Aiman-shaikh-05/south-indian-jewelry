const buttons = document.querySelectorAll(".wishlist-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.parentElement.querySelector("h2").innerText;

        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        wishlist.push(productName);

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        alert(productName + " added to wishlist!");
    });
});