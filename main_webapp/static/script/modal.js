document.addEventListener("DOMContentLoaded", function() {
    var productInfoModal = document.getElementById("productInfoModal");
    
    productInfoModal.addEventListener("show.bs.modal", function (event) {
      var button = event.relatedTarget;
      var product = button.getAttribute("data-product");
      
      var modalTitle = productInfoModal.querySelector(".modal-title");
      var modalBody = productInfoModal.querySelector(".modal-body");
      if (product === "Summer") {
        modalTitle.textContent = "Summer Charcuterie Board";
        modalBody.innerHTML =  `<h2>Summer Delights</h2>
        <p>Here you can see more details about the product. This board is crafted with the finest ingredients and showcases a harmonious blend of flavors.</p>
        <ul>
          <li>3 Differents High-quality cheeses</li>
          <li>2 Selected of cured meats</li>
          <li>2 Fresh seasonal fruits</li>
          <li>Assorted nuts or jams</li>
        </ul>
        <p>Enjoy a gourmet experience that elevates any occasion.</p>`;
      } else if (product === "Spring") {
        modalTitle.textContent = "Spring Charcuterie Board";
        modalBody.innerHTML = `
    <h2>Spring Delights</h2>
    <p>This board bursts with the freshness of spring. Enjoy a curated selection of light cheeses, savory cured meats, and vibrant seasonal produce.</p>
        <ul>
          <li>5 Differents High-quality cheeses</li>
          <li>3 Selected of cured meats</li>
          <li>3 Fresh seasonal fruits</li>
          <li>Assorted nuts or jams</li>
        </ul>
    <p>Savor the taste of spring in every bite!</p>
  `;
      } else if (product === "Winter") {
        modalTitle.textContent = "Winter Charcuterie Board";
        modalBody.innerHTML = `
    <h2>Winter Warmth</h2>
    <p>Embrace the cozy flavors of winter with our Winter Charcuterie Board. This board is designed to warm your senses with robust cheeses, hearty cured meats, and seasonal fruits perfect for the colder months.</p>
     <ul>
          <li>7 Differents High-quality cheeses</li>
          <li>5 Selected of cured meats</li>
          <li>3 Fresh seasonal fruits</li>
          <li>Assorted nuts or jams</li>
        </ul>
    <p>Experience the essence of winter in every bite!</p>
  `;
      } else {
        modalTitle.textContent = "Product Information";
        modalBody.innerHTML = "<p>Here you can see more details about the product.</p>";
      }
    });
  });
  