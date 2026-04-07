import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://i.pravatar.cc/300?img=70&v=4", // this is the url for the profile avatar
        socialMediaPosition: "position-right", // social media bar position (position-left or position-right)
        //for social media links, only update usernames
        twitter: "fran_dev", // social media usernames
        github: "fran_fullstack",
        linkedin: "francisco-developer",
        instagram: "fran.codes",

        name: "Francisco Javier",
        lastName: "González García",
        role: "Full Stack Developer",
        country: "Spain",
        city: "Málaga",
    }
 */
function render(variables = {}) {
  const coverHtml = variables.includeCover
    ? `<div class="cover"><img src="${variables.background ||
        "https://picsum.photos/600/300"}" /></div>`
    : "";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `
          <div class="widget">
          ${coverHtml}
          <img src="${variables.avatarURL ||
            "https://i.pravatar.cc/300?img=12"}" class="photo" />

          <h1 style="color:${variables.fontColor || "black"};">
            ${variables.name || "NAME"} ${variables.lastName || ""}
          </h1>

          <h2 style="color:${variables.fontColor || "black"};">
            ${variables.role || "Role"}
          </h2> 

            <h3 style="color:${variables.fontColor || "black"};">
            ${variables.city || "City"}, ${variables.country || "Country"}
         </h3>

         <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${
              variables.twitter
            }" target="_blank"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github
            }" target="_blank"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${
              variables.linkedin
            }" target="_blank"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${
              variables.instagram
            }" target="_blank"><i class="fa fa-instagram"></i></a></li>

          </ul>
        </div>

    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://i.pravatar.cc/300?img=12",
    // social media bar position (position-left or position-right)
    socialMediaPosition: "position-right",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: "Spain",
    city: "Malaga"
  };
  render(window.variables); // render the card for the first time

  const handlePickerUpdate = function(e) {
    const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
    let values = {};
    values[attribute] =
      this.value == "" || this.value == "null"
        ? null
        : this.value == "true"
        ? true
        : this.value == "false"
        ? false
        : this.value;

    render(Object.assign(window.variables, values)); // render again the card with new values
  };

  document.querySelectorAll(".picker").forEach(function(elm) {
    // update in real time while typing and also support selects/check-like changes
    elm.addEventListener("input", handlePickerUpdate);
    elm.addEventListener("change", handlePickerUpdate);
  });
};
