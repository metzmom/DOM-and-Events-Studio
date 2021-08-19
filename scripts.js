// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
  // put DOM code here to ensure elements have been loaded
  console.log('window loaded');

  // let ring = document.getElementById("ring-button");
  // ring.addEventListener("click", function (event) {
  //     console.log("ring ring");
  // });

  // let knock = document.getElementById("knock-button");
  // knock.addEventListener("click", function (event) {
  //     console.log("knock knock");

  //get button element set up variables for each button
  const takeOffBtn = document.getElementById("takeoff");
  const landingBtn = document.getElementById("landing");
  const missionAbortBtn = document.getElementById("missionAbort");

  const upBtn = document.getElementById("upBtn");
  const downBtn = document.getElementById("downBtn");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");

  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");

  const rocketImg = document.getElementById("rocket");

  // below when btn clicked rocketImg.style.marginRight = 10px;
  //margin.left  .right  .top .bottom
  // or use style.top style.left

  takeOffBtn.addEventListener("click", function (event) {
    console.log("takeoff clicked");
    const msg = "Confirm that the shuttle is ready for takeoff.";
    const readyForTakeoff = window.confirm(msg);
    if (readyForTakeoff) {
      flightStatus.innerHTML = "shuttle in flight";
      shuttleBackground.style.backgroundColor = "blue";
      const currentHeight = Number(shuttleHeight.innerHTML);
      shuttleHeight.innerHTML = currentHeight + 10000;
    }
  });

  landingBtn.addEventListener("click", function (event) {
    console.log("landing clicked");
    const msg =  "The shuttle is landing. Landing gear engaged.";
    const readyForLanding = window.confirm(msg);
    if (readyForLanding) {
      flightStatus.innerHTML = "The shuttle has landed.";
      shuttleBackground.style.backgroundColor = "green";
      shuttleHeight.innerHTML = 0;
    }
  });

  missionAbortBtn.addEventListener("click", function (event) {
    console.log("abort clicked");
    const msg = "Confirm that you want to abort the mission.";
    const abortMission = window.confirm(msg);
    if (abortMission) {
      flightStatus.innerHTML = "Mission aborted";
      shuttleBackground.style.backgroundColor = "red";
      shuttleHeight.innerHTML = 0;
    }
  });

// add up down left right blockks

let marginLeft = 0;
let marginTop = 0;

  upBtn.addEventListener("click", function (event) {
    console.log("move up");
    const currentHeight = Number(shuttleHeight.innerHTML);
    shuttleHeight.innerHTML = currentHeight + 10000;
    marginTop -= 10;
    rocketImg.style.marginTop = `${marginTop}px`;   
  });

  downBtn.addEventListener("click", function (event) {
    console.log("move down");
    let currentHeight = Number(shuttleHeight.innerHTML);
    if (currentHeight > 10000) {
      shuttleHeight.innerHTML = currentHeight - 10000;
      currentHeight = currentHeight - 10000;
    } else {
      shuttleHeight.innerHTML = 0;
    }
    if (currentHeight > 0) {
      marginTop += 10;
      rocketImg.style.marginTop = `${marginTop}px`;   
    }
  });

  leftBtn.addEventListener("click", function (event) {
    console.log("move left");
    marginLeft -= 10;
    rocketImg.style.marginLeft = `${marginLeft}px`;   
  });

  rightBtn.addEventListener("click", function (event) {
    console.log("move right");
    marginLeft += 10;
    rocketImg.style.marginLeft = `${marginLeft}px`;   
  });


});