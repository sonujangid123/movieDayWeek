const API_KEY = "c6fb36a8605634e1c243f9e0317511cc";
const IMG_BASE_PATH = "https://image.tmdb.org/t/p/original";

      const endpoints = {
        trendingDay: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
        trendingWeek: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
        popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, 
        topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
        topRatedTVShows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`,
      };

      async function fetchData(url) {
        try {
          const response = await fetch(url);
          const result = await response.json();
          return result;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      async function displayData(endpoint, sectionId) {
        const data = await fetchData(endpoint);
        const section = document.getElementById(sectionId);
        section.innerHTML = "";

       
          for (let i = 0; i < 20 && i < data.results.length; i++) {
            const item = data.results[i];
            const image = document.createElement("img");
            image.src = IMG_BASE_PATH + data.results[i].poster_path;
            section.appendChild(image);
          }
        } 

      document.getElementById("dayTrending").addEventListener("click", () => {
        displayData(endpoints.trendingDay, "trendingSection");
       
      });
      document.getElementById("weekTrending").addEventListener("click", () => {
        displayData(endpoints.trendingWeek, "trendingSection");
       
      });

      document.getElementById("moviesTopRated").addEventListener("click", () => {
        displayData(endpoints.topRatedMovies, "topRatedSection");
     
      });
      document.getElementById("tvShowsTopRated").addEventListener("click", () => {
        displayData(endpoints.topRatedTVShows, "topRatedSection");
        
      });

      document.getElementById("dayPopular").addEventListener("click", () => {
        displayData(endpoints.popularMovies, "popularSection");
        
     
      });
      document.getElementById("weekPopular").addEventListener("click", () => {
        displayData(endpoints.popularMovies, "popularSection");
  
      });

     

      window.addEventListener("load", () => {
        displayData(endpoints.trendingDay, "trendingSection");
        displayData(endpoints.popularMovies, "popularSection");
        displayData(endpoints.topRatedMovies, "topRatedSection");
      });
