// console.log("JavaScript WORKING!");

const hamburger = document.querySelector(".hamburger");
const collapsed = document.querySelector(".collapse");
const searchBtn = document.querySelector(".searchBox > button");
const searchInput = document.querySelector(".searchBox > input");
const navigateSale = document.querySelectorAll(".arrow");
const prevSale = document.querySelector(".prev");
const nextSale = document.querySelector(".next");
const sales = document.querySelectorAll(".sale");


function handlePrev() {
    showSale(saleNum -= 1);
    sales.forEach(sale => sale.classList.add("fade"));

}
function handleNext() {
    showSale(saleNum += 1);
    sales[saleNum-1].classList.add("fade");
}
function showSale(n) {
    sales.forEach(sale => sale.style.display="none");
    if (n > sales.length) {saleNum = 1}
    if (n < 1) {saleNum = sales.length}
    sales[saleNum - 1].style.display="block";

}
setInterval(handleNext, 3000);




hamburger.addEventListener("click", () => {
    collapsed.classList.toggle("toggleCollapse");
});
searchBtn.addEventListener("click", () => {
    searchInput.style.display="inline";
});

let saleNum = 1;
showSale(saleNum);
prevSale.addEventListener("click", handlePrev);
nextSale.addEventListener("click", handleNext);



