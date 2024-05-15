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
  $(".modal_close").click(function(){
    $(this).closest(".project_modal_main").css({transform: "scale(0)"});
  });
});