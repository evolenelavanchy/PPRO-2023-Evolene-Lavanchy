var accordionItems = document.getElementsByClassName("accordion-item");

for (var i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var accordionContent = this.querySelector(".accordion-content");
    accordionContent.classList.toggle("show");
  });
}
