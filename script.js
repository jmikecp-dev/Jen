function enableYesEscape() {
  const yesBtn = document.querySelector(".yes");

  yesBtn.addEventListener("mouseover", () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    yesBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
}

enableYesEscape();

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click", () => {
  const container = document.getElementById("uiContainer");

  container.innerHTML = `
    <img src="panda2.png" class="panda" alt="panda">

    <h2>Are you sure? 😢</h2>
    <p class="sub">Do you STILL not love me? 😭</p>

    <div class="btns">
      <button class="yes">Yes</button>
      <button id="noBtn">No</button>
    </div>
  `;

  enableYesEscape();

  document.getElementById("noBtn").addEventListener("click", () => {
    container.innerHTML = `
      <img src="panda3.png" class="panda" alt="panda">

      <h2>Please provide a password</h2>
      <p class="sub">Only YOU know this 😔</p>

      <div class="btns">
        <input type="password" id="passInput" placeholder="Enter password">
        <button id="passSubmit">Submit</button>
      </div>
    `;

    document.getElementById("passSubmit").addEventListener("click", () => {
      const pass = document.getElementById("passInput").value;

      if (pass === "120723") {
        container.innerHTML = `
          <img src="panda4.png" class="panda" alt="panda">

          <h2>Yay!!! 😭❤️</h2>
          <p class="sub">I knew you loved me 😘</p>
        `;
      } else {
        alert("Wrong password. Try again love 😔");
      }
    });
  });
});
