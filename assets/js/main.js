console.log("hallo");

// logic respondsive

const btnRes = document.querySelector(".nav-btn-responsive");
const menu = document.querySelector(".nav-wrapper");

const toggleMenu = () => {
  menu.classList.toggle("active");
  btnRes.classList.toggle("cross");
};

const screenMedium = window.matchMedia("(max-width: 768px)");

const handleMediaChange = (e) => {
  if (e.matches) {
    btnRes.addEventListener("click", toggleMenu);
  } else {
    btnRes.removeEventListener("click", toggleMenu);
    menu.classList.remove("active");
    btnRes.classList.remove("cross");
  }
};

handleMediaChange(screenMedium); 

screenMedium.addEventListener("change", handleMediaChange);

AOS.init({
  disable: function () {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
  duration: 1200,
  easing: "ease-in-out", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom",
});

// logic copy clipboard

const copyButtonLabel = "Components";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");

    button.innerText = copyButtonLabel;
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // visual feedback that task is completed
  button.innerText = "Code Copied!";

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 700);
}
