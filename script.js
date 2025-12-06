let attempt = 0;

// =======================
// YES BUTTON AVOID SCRIPT
// =======================
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

// =======================
// FALLING PHOTOS SYSTEM
// =======================

let fallingInterval = null;
let fallingActive = false;

const photoSources = [
  "jen.png","jen2.png","jen3.png","jen4.png","jen5.png",
  "jen6.png","jen7.png","jen8.png","jen9.png","jen10.png",
  "jen11.png","jen12.png","jen13.png","jen14.png","jen15.png",
  "jen16.png","jen17.png","jen18.png","jen19.png","jen20.png",
  "jen21.png","jen22.png","jen23.png","jen24.png","jen25.png",
  "jen26.png","jen27.png","jen28.png","jen29.png","jen30.png"
];

function startFallingPhotos() {
  if (fallingActive) return;
  fallingActive = true;

  fallingInterval = setInterval(() => {
    createFallingPhoto();
  }, 300);
}

function stopFallingPhotos() {
  fallingActive = false;
  clearInterval(fallingInterval);

  const photos = document.querySelectorAll(".falling-photo");
  photos.forEach(p => {
    p.style.transition = "opacity 1s";
    p.style.opacity = "0";
    setTimeout(() => p.remove(), 1000);
  });
}

function createFallingPhoto() {
  const container = document.getElementById("falling-photos-container");

  const img = document.createElement("img");
  img.classList.add("falling-photo");

  img.src = photoSources[Math.floor(Math.random() * photoSources.length)];

  img.style.left = Math.random() * 100 + "vw";

  const duration = 4 + Math.random() * 4;
  img.style.animationDuration = duration + "s";

  container.appendChild(img);

  setTimeout(() => {
    if (img.parentNode) img.remove();
  }, duration * 1000 + 500);
}

// =======================
// MAIN INTERACTION FLOW
// =======================
noBtn.addEventListener("click", () => {
  const container = document.getElementById("uiContainer");

  container.innerHTML = `
    <img src="panda2.png" class="panda" alt="panda">
    <h2>Halaaaa totoo po ba? 😢</h2>
    <p class="sub">Hindi mo na me love? :c</p>
    <div class="btns">
      <button class="yes">Yes</button>
      <button id="noBtn">No</button>
    </div>
  `;

  enableYesEscape();

  document.getElementById("noBtn").addEventListener("click", () => {
    container.innerHTML = `
      <img src="panda5.png" class="panda" alt="panda">
      <h2>Dahil diyan provide a password, loveee</h2>
      <p class="sub"> Only <b> YOU </b> know this 😔<br>
      <center> (2 Tries Only) </center> </p>

      <div class="btns">
        <input type="password" id="passInput" placeholder="Enter password">
        <button id="passSubmit">Submit</button>
      </div>
    `;

    document.getElementById("passSubmit").addEventListener("click", () => {
      const pass = document.getElementById("passInput").value;
      attempt++;

      if (attempt === 1) {
        alert("Wrong password. Try again love 😔");
        return;
      }

      if (attempt === 2 && pass === "120723") {

        const container = document.getElementById("uiContainer");

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

            setTimeout(() => {
              container.innerHTML = `
                <img src="panda4.png" class="panda" alt="panda">
                <h2>Yeheyyyyyyy!!! 😭❤️</h2>
                <p class="sub">Click the envelope, my loveee 😘</p>

                <div class="envelope-container">
                  <div class="envelope" id="envelope">
                    <div class="flap">
                      <div class="heart"></div>
                    </div>
                    <div class="letter">
                      <p>
                        <h2><b> My Dearest Jenelyn,</b><br><br></h2>  
                        Happy-happyyyy 2nd Anniversary, my super duperrrrr prettyyyy love loveeee!!! 
                        I still can't believe na ang bespren ko before ay labidabs ko na ngayon hihi. 
                        I just want to say thank youuu sa araw-araw na pinaparamdam mo na kamahal-mahal ako. 
                        Thank you so much sa palaging pag aappreciate sa mga gifts and ginagawa ko for you, 
                        thank you for everything, my love. No words can explain gaano ako ka thankful na meron 
                        akong ikaw, mahal ko. Sa loob ng 2 years sabay natin natuklasan na wala talagang perpektong 
                        relasyon, madalas pareho tayong sinusubok ng panahon, kanya-kanya nating struggles sa buhay.
                        Alam ko na alam mo na hindi naging madali saatin yung 2 years na nakalipas, nandiyan yung 
                        mga tampuhan, hindi pagkakaintindihan, at minsan pa nagkakasagutan pa tayo, pero look, 
                        naandito pa rin tayo still fighting sa relasyon na nabuo natin 2 years ago. Gusto ko lang 
                        ipaalala sa'yo na seryoso ako sa sinabe ko 2 years ago pa, <B> PAKAKASALAN KITA, JENELYN KO. </B> 
                        Always remember na meron kang ako para sa'yo, meron kang ako na palagi pumapalakpak sa mga 
                        achievements na makuha mo, meron kang ako na palaging masasandalan mo, meron kang ako na 
                        kasama mo sa lahat ng bagay, meron kang ako pag inaaway ka ng mundong 'to, meron kang ako 
                        na kasama sa bawat pagsubok na darating sa buhay natin, meron kang ako na kakampi mo sa lahat, 
                        meron kang ako, meron kang ako na proud na proud sa'yo, meron kang ako na pipiliin ka sa 
                        araw-araw, meron kang ako, mahal ko. Laban lang po tayo ha? Hindi lang sa relasyon natin 
                        kundi sa lahat ng bagay lalong-lalo na sa acads natin. I know mahirap loveyy pero kung ayan 
                        ang way para maabit ang mga pangarap natin ay kailangan natin kayanin. Normal lang mag fail 
                        minsan, hindi tayo perfect, okii? Pero loveyy palagi mo itatatak sa isip mo na "Malayo pa 
                        pero malayo na". I promise to support, love and appreciate you sa lahat-lahattt ng ginagawa 
                        mo, mahal ko. I will do everything mapasaya ko lang ang jenelyn ko, because you deserve all 
                        the best in this worlddd, love loveeee. Thank you for always being there for me, loveyyyy. 
                        I loveeee youuuuuuuu very very very sooooo muuuchhh!!! I'm always thankful kay lord dahil 
                        binigay ka niya sa'kin, always thankful to God na meron tayong isa't-isa. mahal kita palagi 
                        loveyy ko na super pretty!!!! <B> PADAYON WITH PAHUWAY, MY FUTURE CPA<br> </B>
                        <br><br>
                        <b>ALWAYS AND FOREVER UR LABIDABS ❤️ <br></b>
                        --------------------> Mikeyyy^^ <--------------------
                      </p>
                    </div>
                  </div>
                </div>
              `;

              setupEnvelope();
            }, 500);
          }
        }, 20);

        
        

      } else {
        alert("Wrong password. Try again love 😔");
      }
    });
  });
});

// =======================
// ENVELOPE + MUSIC + FALLING PHOTOS
// =======================
function setupEnvelope() {
  const envelope = document.getElementById("envelope");
  const flap = envelope.querySelector(".flap");
  const letter = envelope.querySelector(".letter");
  const music = document.getElementById("bgMusic");
  let musicStarted = false;

  letter.style.display = "none";

  envelope.addEventListener("click", () => {

    // Start music + falling photos only once
    if (!musicStarted) {
      music.volume = 0.6;
      music.play();
      startFallingPhotos();
      music.addEventListener("ended", stopFallingPhotos);
      musicStarted = true;
    }

    flap.style.transition = "transform 0.6s ease";
    flap.style.transform = "rotateX(-180deg)";

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    letter.style.display = "block";
    setTimeout(() => {
      letter.classList.add("full-screen");
    }, 50);

    overlay.addEventListener("click", () => {
      flap.style.transform = "rotateX(0deg)";
      letter.classList.remove("full-screen");
      overlay.remove();
      setTimeout(() => {
        letter.style.display = "none";
      }, 600);
    });
  });
}