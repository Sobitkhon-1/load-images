const loadBtn = document.getElementById("load-btn");
const gallery = document.getElementById("gallery");

let clickCount = 0;

loadBtn.addEventListener("click", () => {
  if (clickCount >= 2) return;

  for (let i = 0; i < 10; i++) {
    const img = document.createElement("img");
    img.src = `https://cataas.com/cat?timestamp=${Date.now()}-${Math.random()}`;
    img.alt = "A cute cat";
    gallery.appendChild(img);
  }

  clickCount++;

  if (clickCount >= 2) {
    loadBtn.textContent = "No More Cats 😿";
    loadBtn.classList.add("disabled");
    loadBtn.disabled = true;
  }
});
