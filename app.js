// console.log("test");

// function clickModal() {
//   openModal();
// }

function openModal(id) {
  console.log(id);
  const docId = document.getElementById(id);
  console.log(docId);
  document.getElementById("modal_title").innerText = id;
  document.getElementById("modalContainer").showModal();
}
// document.getElementById("btn_05").addEventListener("click", function () {
//   console.log("Click");
// });

// document.addEventListener("click", function (e) {
//   if (e.target.classList.contains("btn-accent")) {
      // openModal(e.target.closest(".card").id);
    //   const siblingCard = e.target.previousElementSibling;
    // console.log(e.target.closest());
    // console.log(e.target.closest(".card").id);
//   }
// });
