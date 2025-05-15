const params = new URLSearchParams(window.location.search);
const url = params.get("url");
const lang = params.get("lang") || "en";
const swap = params.get("swap") === "true";

const original = url;
const translated = `https://translate.google.com/translate?hl=${lang}&sl=auto&tl=${lang}&u=${encodeURIComponent(
  url
)}`;

const frame1 = document.getElementById("frame1");
const frame2 = document.getElementById("frame2");

if (swap) {
  frame1.src = translated;
  frame1.classList.remove("left");
  frame1.classList.add("right");

  frame2.src = original;
  frame2.classList.remove("right");
  frame2.classList.add("left");
} else {
  frame1.src = original;
  frame2.src = translated;
}
