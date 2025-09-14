const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const ul = document.querySelector("ul");

const inputValue = () => {
  if (input.value !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    // li.style.backgroundColor = 'burlywood'

    const edit = document.createElement("button");
    edit.innerText = "Edit";

    const deleteBTN = document.createElement("button");
    deleteBTN.innerText = "delete";

    console.log("edit = ", edit);
    console.log("deleteBTN = ", deleteBTN);
    li.appendChild(edit);
    li.appendChild(deleteBTN);
    ul.appendChild(li);
    input.value = "";
    edit.addEventListener("click", () => {
      input.value = li.childNodes[0].nodeValue.trim();
      li.remove();
    });
    deleteBTN.addEventListener("click", () => {
      li.remove();
    });
  } else {
    alert("Please enter a task");
  }
};

addBtn.addEventListener("click", () => inputValue());
