$(function(){
  $(".choose-tasks ul").on("click","li",function(){
    $(".choose-tasks ul li").removeClass("active");
    $(this).addClass("active");
    var url =$(this).attr("data-src");
    $("#iframe-table").attr("src",url)
  });
});

//监听iframe :当iframe加载完毕后绑定两种按钮的点击事件
function onMyFrameLoad() {
  $("#iframe-table").contents().find("table tr button").each(function (index, item) {
    const taskStatus = $(this).parent().parent()[0].cells[1].innerText;  //当前状态值
    item.onclick = function () {
      return updateBtn(taskStatus);
    }
  })
}



//绑定"状态/文件更新"按钮点击事件
function updateBtn(taskStatus) {

  if (taskStatus == "进行中") {
    $("#updates_status").val(1);
  } else if (taskStatus == "已完成") {
    $("#updates_status").val(2);
  } else if (taskStatus == "闲置中") {
    $("#updates_status").val(3);
  } else if (taskStatus == "未进行") {
    $("#updates_status").val(4);
  }
  $("#InputFile").val("");  //将上传文件处清空
  $("#showLoadingImgModel").modal('show');
}

// 状态/文件更新
function TaskStatusUpdate() {
  const selectVal = $("#updates_status").val();
  const fileUpload = $("#InputFile")[0].files[0];
  console.log(selectVal);
  console.log(fileUpload);
  postData = {select: selectVal, file: fileUpload};
  $.ajax({
    type: "POST",
    url: "/xxxxxxxx",
    data: postData,
    processData: false,
    dataType: "Json",
    success: function (response) {
      swal(
        {
          title: "更新成功",
          text: "成功",
          type: "success",
          timer: 1500
        })
    },
    error: function (e) {
      swal(
        {
          title: "更新失败",
          text: "后台处理错误",
          type: "error",
          timer: 1500
        })
    }
  })
  $("#showLoadingImgModel").modal('hide');
}