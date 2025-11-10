document.getElementById("dierForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const naam = document.getElementById("dierNaam").value;
  const bestand = document.getElementById("dierAfbeelding").files[0];

  if (bestand) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      const img = document.createElement("img");
      img.src = evt.target.result;
      img.alt = naam;
      img.classList.add("image");
      document.querySelector(".container2").appendChild(img);

      img.style.animationDuration = `${slider.value}s`;
    };
    reader.readAsDataURL(bestand);
  }
});