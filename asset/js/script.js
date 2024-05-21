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
    if ($(this).scrollTop() > 20) {
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

  {
     let currentIndex = 0;
     const feedbackItems = $(".feedback_single");
     const totalItems = feedbackItems.length;

     function showSlide(index, direction) {
       feedbackItems
         .eq(currentIndex)
         .removeClass("translate_0")
         .addClass(direction === "next" ? "translate-100" : "translate100");
       feedbackItems
         .eq(index)
         .removeClass("translate100 translate-100")
         .addClass("translate_0");
       currentIndex = index;
     }

     $(".slide_next").on("click", function () {
       if (currentIndex < totalItems - 1) {
         let newIndex = currentIndex + 1;
         showSlide(newIndex, "next");
       }
     });

     $(".slide_prev").on("click", function () {
       if (currentIndex > 0) {
         let newIndex = currentIndex - 1;
         showSlide(newIndex, "prev");
       }
     });

     showSlide(currentIndex, "next");
  }
  // Slider change end here
});