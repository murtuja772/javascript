const filterDropdown = document.getElementById("categoryFilter");
const products = document.querySelectorAll(".product");

filterDropdown.addEventListener("change", () => {
  const selectedCategory = filterDropdown.value;

  products.forEach(product => {
    if (selectedCategory === "all") {
      product.style.display = "block";
    } else if (product.classList.contains(selectedCategory)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
