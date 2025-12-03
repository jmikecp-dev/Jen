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
        // Show sleek loading screen with percentage
        container.innerHTML = `
          <div class="loading-screen">
            <p class="loading-text">Loading Love...</p>
            <div class="loading-bar-container">
              <div class="loading-bar-fill"></div>
            </div>
            <p class="loading-percent">0%</p>
          </div>
        `;

        const fill = container.querySelector(".loading-bar-fill");
        const percentText = container.querySelector(".loading-percent");
        let percent = 0;

        const interval = setInterval(() => {
          percent++;
          fill.style.width = percent + "%";
          percentText.textContent = percent + "%";

          if (percent >= 100) {
            clearInterval(interval);

            // Show final success after a short delay
            setTimeout(() => {
              container.innerHTML = `
                <img src="panda4.png" class="panda" alt="panda">
                <h2>Yay!!! 😭❤️</h2>
                <p class="sub">I knew you loved me 😘</p>
              `;
            }, 500);
          }
        }, 20); // Adjust speed of percentage here

      } else {
        alert("Wrong password. Try again love 😔");
      }
    });
  });
});
