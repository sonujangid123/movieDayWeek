let dayBtn = document.getElementById("day");
let weekBtn = document.getElementById("week");
let flag = false;
let day = null;
let week = null;

const mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");

const API_KEY = "c6fb36a8605634e1c243f9e0317511cc";
const IMG_BASE_PATH = "https://image.tmdb.org/t/p/original";

const popularByDay =
  "https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=" +
  API_KEY;
const popularByWeek =
  "https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=" +
  API_KEY;

window.addEventListener("load", async () => {
  day = await fetchData(popularByDay);
  week = await fetchData(popularByWeek);
  if (flag) changeData(week);
  else changeData(day);
});

dayBtn.addEventListener("click", () => {
  flag = false;
  changeData(day);
});
weekBtn.addEventListener("click", () => {
  flag = true;
  changeData(week);
});

function changeData(arg) {
  mainDiv.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const image = document.createElement("img");
    image.src = IMG_BASE_PATH + arg.results[i].poster_path;
    mainDiv.append(image);
    console.log(arg);
    
  }
  document.querySelector("#wrapper").append(mainDiv);
}

// changeData()
async function fetchData(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
