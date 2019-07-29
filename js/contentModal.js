// modal container
const contentModal = document.getElementById("contentModal");

//reset modal

resetButton.addEventListener("click", e => {
  //hide modal container and content
  contentModal.classList.add("displayNone");
  aboutContent.setAttribute("id", "displayNone");
  projectsContent.setAttribute("id", "displayNone");
  contactContent.setAttribute("id", "displayNone");
});
