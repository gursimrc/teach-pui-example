function runOnScroll(currentPage, lastScrollPosition) {
    console.log("inside scroll function");

    currentScrollPosition = document.documentElement.scrollTop;

    if (currentScrollPosition > (lastScrollPosition + 100)) {
      console.log("user has scrolled down")
      currentPage++;
      console.log(currentPage);
      lastScrollPosition = currentScrollPosition;
    }

}



    // var text = document.getElementById("title");
    // var sun = document.getElementById("sun-image");
    


    // text.innerHTML = "what's a solar cycle?";
    // text.classList.remove("text-content");
    // text.classList.add("heading");
    // sun.src = "./images/sun.png";

    
    // if (scrollPosition > 200 && scrollPosition <= 400) {
    //   text.innerHTML = "In short, the solar cycle is a cycle that the Sun’s magnetic field goes through approximately every 11 years.";
    //   text.classList.remove("heading");
    //   text.classList.add("text-content");
    //   text.classList.add("text-fade-in"); 
      
    //   //testing content fading in 
    //   // var sun = document.getElementById("sun-image");
    //   // sun.src = "./images/sun-with-magnetic-lines.png";
    // }

//     if (scrollPosition > 400 && scrollPosition <= 600) {
//       text.classList.remove("text-fade-in"); //trying to have content fade in again but it's not working
//       text.innerHTML = "Did you know that the Sun has north and south poles, just like Earth?";
//       text.classList.add("text-fade-in");
//     }

//     if (scrollPosition > 600 && scrollPosition <= 800) {
//       text.innerHTML = "Over the span of ~11 years, these north and south poles switch places!";
//     }

//     if (scrollPosition > 800 && scrollPosition <= 1000) {
//       text.innerHTML = "At the beginning of the solar cycle, the Sun is at it’s quietest...";
//     }

//     if (scrollPosition > 1000 && scrollPosition <= 1200) {
//       text.innerHTML = "...this is called the solar minimum.";
//     }

//     if (scrollPosition > 1200 && scrollPosition <= 1400) {
//       text.innerHTML = "As the cycle progresses and the magnetic field shifts, the Sun starts to become active and stormy";
//     }

//     if (scrollPosition > 1400 && scrollPosition <= 1600) {
//       text.innerHTML = "The middle of the solar cycle is the called the solar maximum.";
//     }

//     if (scrollPosition > 1600 && scrollPosition <= 1800) {
//       text.innerHTML = "This is when the Sun's stormy behavior is at its peak. The Sun blazes with bright flares and eruptions.";
//     }

//     if (scrollPosition > 1800 && scrollPosition <= 2000) {
//       text.innerHTML = "These eruptions send powerful bursts of energy and material into space.";
//     }

//     if (scrollPosition > 1800 && scrollPosition <= 2000) {
//       text.innerHTML = "They can cause lights in our sky on Earth, called aurora (Northern Lights)";
//     }

//     if (scrollPosition > 2000 && scrollPosition <= 2200) {
//       text.innerHTML = "On the downside, they also  impact our radio communications and, in extreme cases, electricity grids.";
//     }

//     if (scrollPosition > 2200 && scrollPosition <= 2400) {
//       text.innerHTML = "As the cycle ends, the activity fades back towards the solar minimum.";
//     }

//     if (scrollPosition > 2400 && scrollPosition <= 2600) {
//       text.innerHTML = "Now, the poles have flipped and a new cycle will begin!";
//     }

//     if (scrollPosition > 2600 && scrollPosition <= 2800) {
//       text.innerHTML = "Scientists are still trying to fully understand the Sun’s magnetic field to make better predicitons.";
//     }

//     if (scrollPosition > 2600 && scrollPosition <= 2800) {
//       text.innerHTML = "According to their clock, we’re currently at ____ and the Sun’s next quiet period will begin around the first half of 2027.";
//     }
      
//  }; 



let currentPage = 0; //title page
let lastScrollPosition = window.scrollY;

let text = document.getElementById("title");
let sun = document.getElementById("sun-image");

window.addEventListener("scroll", () => {
  // console.log(currentPage);
  // console.log(window.scrollY);
  let currentScrollPosition = window.scrollY;
  if (currentScrollPosition > (lastScrollPosition + 200)) { //can this be a percent instead? also include arrow keys to go down
    console.log("user has scrolled down")
    currentPage++;
    changePageContent(currentPage);
    lastScrollPosition = currentScrollPosition;
  }

  else if (currentScrollPosition < (lastScrollPosition - 200)) { //can this be a percent instead? also include arrow keys to go up
    console.log("user has scrolled up")
    currentPage--;
    changePageContent(currentPage);
    lastScrollPosition = currentScrollPosition;
  }

});

function changePageContent(currentPage){

  if (currentPage == 0) {
    text.innerHTML = "what's a solar cycle?";
    text.classList.remove("text-content");
    text.classList.add("heading");
    sun.src = "./images/sun.png";
  }

  else if(currentPage == 1) {
      text.innerHTML = "In short, the solar cycle is a cycle that the Sun’s magnetic field goes through approximately every 11 years.";
      text.classList.remove("heading");
      text.classList.add("text-content");
  }

  else if(currentPage == 2) {
      text.innerHTML = "Did you know that the Sun has north and south poles, just like Earth?";
  }

}


