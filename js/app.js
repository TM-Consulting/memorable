function global_root_about() {
  $(".about_sec").addClass("active");
  $(".welcome_sec").removeClass("active");
  $("body").addClass("overflow_visible");
  $(".navbar-toggler-icon").removeClass("active");
}


function global_root_our_story() {
  $("#nav-miral-story").click();
}

function global_root_culture() {
  $("#nav-culture").click();
}

function global_root_teamwork() {
  $("#nav-team-work").click();
}

function global_root_sustainability() {
  $("#nav-sustainability").click();
}

function global_root_ecosystem() {
  $("#nav-360-Capabilities").click();
}

function global_root_assetmanagement() {
  $("#nav-asset-management").click();
}

function global_root_behind_the_scenes() {
  $("#nav-behind-the-scene").click();
}

function global_root_openUrl(url) {
  window.open(url);
}
