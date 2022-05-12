let input = document.querySelector(".selectImg");
let row = document.querySelector(".row");
let clickHere = document.querySelector(".clickBtn");
let dropZone = document.querySelector(".dropZone");
let clickTable=document.querySelector(".table");
clickHere.addEventListener("click", () => {
    input.click();
  });
  input.addEventListener("change", (e) => {
    let files = Array.from(e.target.files);
  
    files.forEach((file) => {
      showImage(file);
    });
  });
  function showImage(file) {
    if (
      file.type != "image/png" &&
      file.type != "image/jpg" &&
      file.type != "image/jpeg"
    ) {
      alert("Please choose image files");
      return;
    }
  
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("loadend", () => {
      let col2 = document.createElement("div");
      col2.className = "col-lg-2 image ";
  
      let img = document.createElement("img");
      img.src = fileReader.result;
      img.style.width = "100%";
      img.classList.add("image");
  
      let icon = document.createElement("i");
      icon.className = "fa-solid fa-trash-can";
      icon.classList.add("icon");
      icon.classList.add("delete");
      col2.appendChild(icon);
  
      icon.addEventListener("click", function () {
        let result = confirm("Are you sure?");
        if (result) {
          col2.remove();
        }
      });
      col2.appendChild(img);
      row.appendChild(col2);
    });
  }
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  
  let tds=document.querySelectorAll('td')

  