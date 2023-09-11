document.addEventListener("click", handleClick);

function handleClick(e) {
  const clickedElement = e.target;
  if (clickedElement.classList.contains("delete-btn")) {
    console.log("Delete button clicked!");

    clickedElement.parentElement.remove();
  } else if (clickedElement.classList.contains("grid-item")) {
    console.log("Delete button clicked!");

    const children = clickedElement.children;
    // children[1].style = "color:blue";

    const childrenArray = Array.from(children);
    childrenArray.forEach((c) => {
      if (c.classList.contains("title-text")) {
        c.style = "color:blue";
      }
    });
  }
}
