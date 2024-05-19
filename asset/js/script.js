$(document).ready(function(){
  // project modal
  $(".project_img").click(function () {
    let imageId = $(this).attr("id");
    let mainDiv = $(this).closest(".single_project");
    let popupMain = mainDiv.find(".project_modal_main");
    let popupId = popupMain.attr("id");
    console.log(popupId);
    if (imageId == popupId) {
      popupMain.css({ transform: "scale(1)" });
    } else {
      return;
    }
  });

  // Project modal close
  $(".modal_close").click(function () {
    $(this).closest(".project_modal_main").css({ transform: "scale(0)" });
  });

  // Back to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back_to_top").css({ transform: "translateY(0)" });
    } else {
      $(".back_to_top").css({ transform: "translateY(70px)" });
    }
  });

  // fixed menubar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
      $(".header_section").css({
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        with: "100%",
        background: "var(--black)",
        zIndex: "999999999",
      });
      $(".slider_section").css({ marginTop: "80px" });
    } else {
      $(".header_section").css({
        position: "unset",
        background: "var(--black1)",
      });
      $(".slider_section").css({ marginTop: "0" });
    }
  });

  // Menubar active class change
  $(".menu_link").click(function () {
    $(".menu_link").removeClass("active");
    $(this).addClass("active");
  });

  // Slider change start here
  // Slidr Change next
  $(".slide_next").click(function(){
    let sliderParent = $(this).closest(".testimonial_body");
    let allSlider = sliderParent.find(".feedback_inner");
  });
  // Slider change end here
});