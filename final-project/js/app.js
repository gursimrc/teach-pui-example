//applied when the user scrolls

function runOnScroll() {

  const text = document.getElementById("title");
  const sun = document.getElementById("sun-image");
  //position of user's scroll
  scrollPosition = document.documentElement.scrollTop;



  //--------------PAGE 0 (Title Page)-------------
  if (scrollPosition <= 200) {
    text.innerHTML = "what's a solar cycle?";
    text.classList.remove("text-content");
    text.classList.add("heading");
    sun.src = "./images/sun.png";
    sun.alt = "Circular, orange and yellow digital drawing representing the sun";
  }
    


  //--------------PAGE 1-------------
  if (scrollPosition > 200 && scrollPosition <= 400) {
    //doing text animations if this is the first time the user has entered the page
    if (page1Entered == false) {
      //text fade out animation
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';  
      //giving animation enough time to finish before changing the content
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "In short, the solar cycle is a cycle that the Sun’s magnetic field goes through approximately every 11 years.";
        sun.src = "../images/sun-lines.png";
        sun.alt = "Yellow and orange circle representing the sun with white lines around it representing its magnetic field";
        page1Entered = true;
      }, 2000);
    }
    //not doing the text animations if the user has entered the page before
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "In short, the solar cycle is a cycle that the Sun’s magnetic field goes through approximately every 11 years.";
      sun.src = "../images/sun-lines.png";
      sun.alt = "Yellow and orange circle representing the sun with white lines around it representing its magnetic field";
    }
  }



  //--------------PAGE 2-------------
  if (scrollPosition > 400 && scrollPosition <= 600) {
    if (page2Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "Did you know that the Sun has north and south poles, just like Earth?";
        sun.alt = "Yellow and orange circle representing the sun with white lines around it representing its magnetic field\
        and small arrows pointing from down to up. A label of N on the top and S at the bottom";
        sun.src = "../images/sun-poles.png";
        page2Entered = true;
      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "Did you know that the Sun has north and south poles, just like Earth?";
      sun.alt = "Yellow and orange circle representing the sun with white lines around it representing its magnetic field\
      and small arrows pointing from down to up. A label of N on the top and S at the bottom";
      sun.src = "../images/sun-poles.png";
    }
  }


  //--------------PAGE 3-------------
  if (scrollPosition > 600 && scrollPosition <= 800) {
    if (page3Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "Over the span of ~11 years, these north and south poles switch places!";
        sun.alt = "Yellow and orange circle representing the sun with white lines around it representing its magnetic field\
        and small arrows pointing from up to down. A label of S on the top and N at the bottom";
        sun.src = "../images/sun-poles-flipped.png";
        page3Entered = true;
      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "Over the span of ~11 years, these north and south poles switch places!";
      sun.src = "../images/sun-poles-flipped.png";
      sun.alt = "Yellow and orange circle representing the sun with white lines around it representing its magnetic field\
      and small arrows pointing from up to down. A label of S on the top and N at the bottom";
    }
  }



  //--------------PAGE 4-------------
  if (scrollPosition > 800 && scrollPosition <= 1000) {
    if (page4Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "At the beginning of the solar cycle, the Sun is at it’s quietest...";
        sun.src = "../images/sun.png";
        sun.alt = "Yellow and orange circle representing the sun";
        page4Entered = true;
      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "At the beginning of the solar cycle, the Sun is at it’s quietest...";
      sun.src = "../images/sun.png";
      sun.alt = "Yellow and orange circle representing the sun";
    }
  }



  //--------------PAGE 5-------------
  if (scrollPosition > 1000 && scrollPosition <= 1200) {
    if (page5Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "...this is called the solar minimum.";
        sun.src = "../images/sun.png";
        sun.alt = "Yellow and orange circle representing the sun";
        page5Entered = true;
      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "...this is called the solar minimum.";
      sun.src = "../images/sun.png";
      sun.alt = "Yellow and orange circle representing the sun";
    }
  }


  //--------------PAGE 6-------------
  if (scrollPosition > 1200 && scrollPosition <= 1400) {
    if (page6Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "As the cycle progresses and the magnetic field shifts, the Sun starts to become active and stormy";
        sun.src = "../images/stormy-sun.png";
        sun.alt = "Orange circle with highlights representing the a stormy, burning sun";
        page6Entered = true;
      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "As the cycle progresses and the magnetic field shifts, the Sun starts to become active and stormy";
      sun.src = "../images/stormy-sun.png";
      sun.alt = "Orange circle with highlights representing the a stormy, burning sun";
    }
  }



  //--------------PAGE 7-------------
  if (scrollPosition > 1400 && scrollPosition <= 1600) {
    if (page7Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "The middle of the solar cycle is the called the solar maximum.";
        sun.src = "../images/stormy-sun.png";
        sun.alt = "Orange circle with highlights representing the a stormy, burning sun";
        page7Entered = true;
      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "The middle of the solar cycle is the called the solar maximum.";
      sun.src = "../images/stormy-sun.png";
      sun.alt = "Orange circle with highlights representing the a stormy, burning sun";
    }
  }


  //--------------PAGE 8-------------
  if (scrollPosition > 1600 && scrollPosition <= 1800) {
    if (page8Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "This is when the Sun's stormy behavior is at its peak. The Sun blazes with bright flares and eruptions.";
        sun.src = "../images/shooting-sun.png";
        sun.alt = "Orange circle with highlights representing the a stormy, burning sun, with yellow lines shooting out from sun.";
        page8Entered = true;
      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "This is when the Sun's stormy behavior is at its peak. The Sun blazes with bright flares and eruptions.";
      sun.src = "../images/shooting-sun.png";
      sun.alt = "Orange circle with highlights representing the a stormy, burning sun, with yellow lines shooting out from sun.";
    }
  }


  //--------------PAGE 9-------------
  if (scrollPosition > 1800 && scrollPosition <= 2000) {
    if (page9Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "These eruptions send powerful bursts of energy and material into space.";
        sun.src = "../images/shooting-sun.png";
        sun.alt = "Orange circle with highlights representing the a stormy, burning sun, with yellow lines shooting out from sun.";
        page9Entered = true;
      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "These eruptions send powerful bursts of energy and material into space.";
      sun.src = "../images/shooting-sun.png";
      sun.alt = "Orange circle with highlights representing the a stormy, burning sun, with yellow lines shooting out from sun.";
    }
  }


  //--------------PAGE 10-------------
  if (scrollPosition > 2000 && scrollPosition <= 2200) {
    if (page10Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "They can cause lights in our sky on Earth, called aurora (northern lights)";
        sun.src = "../images/shooting-sun.png";
        sun.alt = "Orange circle with highlights representing the a stormy, burning sun, with yellow lines shooting out from sun.";
        page10Entered = true;
      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "They can cause lights in our sky on Earth, called aurora (northern lights)";
      sun.src = "../images/shooting-sun.png";
      sun.alt = "Orange circle with highlights representing the a stormy, burning sun, with yellow lines shooting out from sun.";
    }
  }


  //--------------PAGE 11-------------
  if (scrollPosition > 2200 && scrollPosition <= 2400) {
    if (page11Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "On the downside, they also  impact our radio communications and, in extreme cases, electricity grids.";
        sun.src = "../images/shooting-sun.png";
        sun.alt = "Orange circle with highlights representing the a stormy, burning sun, with yellow lines shooting out from sun.";
        page11Entered = true;
      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "On the downside, they also  impact our radio communications and, in extreme cases, electricity grids.";
      sun.src = "../images/shooting-sun.png";
      sun.alt = "Orange circle with highlights representing the a stormy, burning sun, with yellow lines shooting out from sun.";
    }
  }


  //--------------PAGE 12-------------
  if (scrollPosition > 2400 && scrollPosition <= 2600) {
    if (page12Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "As the cycle ends, the activity fades back towards the solar minimum.";
        sun.src = "../images/sun.png";
        sun.alt = "Yellow and orange circle representing the sun";
        page12Entered = true;
      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "As the cycle ends, the activity fades back towards the solar minimum.";
      sun.src = "../images/sun.png";
      sun.alt = "Yellow and orange circle representing the sun";
    }
  }


  //--------------PAGE 13-------------
  if (scrollPosition > 2600 && scrollPosition <= 2800) {
    if (page13Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "Now, the poles have flipped and a new cycle will begin!";
        sun.src = "../images/sun-poles-flipped.png";
        sun.alt = "Yellow and orange circle representing the sun with white lines around it representing its magnetic field\
        and small arrows pointing from up to down. A label of S on the top and N at the bottom";
        page13Entered = true;
      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "Now, the poles have flipped and a new cycle will begin!";
      sun.src = "../images/sun-poles-flipped.png";
      sun.alt = "Yellow and orange circle representing the sun with white lines around it representing its magnetic field\
      and small arrows pointing from up to down. A label of S on the top and N at the bottom";
    }
  }


  //--------------PAGE 14-------------
  if (scrollPosition > 2800 && scrollPosition <= 3000) {
    if (page14Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "Scientists are still trying to fully understand the Sun’s magnetic field to make better predicitons.";
        sun.src = "../images/sun.png";
        page14Entered = true;
      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "Scientists are still trying to fully understand the Sun’s magnetic field to make better predicitons.";
      sun.src = "../images/sun.png";
    }
  }


  //--------------PAGE 15-------------
  if (scrollPosition > 3000 && scrollPosition <= 3200) {
    const arrow = document.getElementById("arrow-container");
    arrow.style.opacity = 0;
    if (page15Entered == false) {
      text.style.opacity = 0;
      text.style.transition = 'opacity 2s';   
      setTimeout(() => { 
        text.classList.remove("heading"); 
        text.classList.add("text-content");
        text.style.opacity = 1;
        text.style.transition = 'opacity 4s';   
        text.innerHTML = "According to their clock, the Sun’s next quiet period will begin \
        around the first half of 2027.";
        sun.src = "../images/sun.png";
        sun.alt = "Yellow and orange circle representing the sun";
        page15Entered = true;

      }, 2000);
    }
    else {
      text.classList.remove("heading"); 
      text.classList.add("text-content");
      text.innerHTML = "According to their clock, the Sun’s next quiet period will begin \
      around the first half of 2027.";
      sun.src = "../images/sun.png";
      sun.alt = "Yellow and orange circle representing the sun";
    }
  }
 }; 

 //pageEntered booleans are used so that fade animations aren't applied after the first time
 let page1Entered = false;
 let page2Entered = false;
 let page3Entered = false;
 let page4Entered = false;
 let page5Entered = false;
 let page6Entered = false;
 let page7Entered = false;
 let page8Entered = false;
 let page9Entered = false;
 let page10Entered = false;
 let page11Entered = false;
 let page12Entered = false;
 let page13Entered = false;
 let page14Entered = false;
 let page15Entered = false;

 window.addEventListener("scroll", runOnScroll);
