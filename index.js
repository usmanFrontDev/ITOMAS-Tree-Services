  tailwind.config = {
    theme: {
      screens: {
        xs: '375px',   // small phones
        sm: '640px',   // phones
        md: '768px',   // tablets
        lg: '1024px',  // laptops
        xl: '1280px',  // desktops
        '2xl': '1536px', // large desktops
        '3xl': '1920px', // iMac / full HD+
      }
    }
  }

const menuOpenBtn = document.getElementById("menuOpenBtn");
const menuCloseBtn = document.getElementById("menuCloseBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuLeftLine = document.getElementById("menuLeftLine");

menuOpenBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-y-full");
  mobileMenu.classList.add("translate-y-0");

  menuLeftLine.classList.remove("top-[100rem]");
  menuLeftLine.classList.add("top-[10rem]");
});

menuCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-y-0");
  mobileMenu.classList.add("-translate-y-full");

  menuLeftLine.classList.remove("top-[10rem]");
  menuLeftLine.classList.add("top-[100rem]");
});
