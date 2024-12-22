let pricingDivs = document.querySelectorAll(".pricing_div");
let absolute = document.querySelector(".absolute_recommended");

pricingDivs.forEach((div) => {
  let height = div.offsetHeight;
  let add = 100;

  div.addEventListener("click", () => {
    div.classList.toggle("clicked_pricing_div");

    if (div.classList.contains("clicked_pricing_div")) {
      div.style.height = height + add + "px";
      div.style.transition = "0.5s";
    } else {
      div.style.height = height + "px";
    }

    if (
      div.classList.contains("clicked_pricing_div") &&
      div.classList.contains("recommended")
    ) {
      absolute.style.display = "block";
    } else {
      absolute.style.display = "none";
    }

    pricingDivs.forEach((otherDiv) => {
      if (otherDiv !== div) {
        otherDiv.classList.remove("clicked_pricing_div");
        otherDiv.style.height = height + "px";
      }
    });
  });
});
