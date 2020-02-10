$(function () {
  $(".choose-tasks ul").on("click", "li", function () {
    $(".choose-tasks ul li").removeClass("active");
    $(this).addClass("active");
    var url = $(this).attr("data-src");
    $("#iframe-table").attr("src", url)
  });
});

//“参与任务”弹出框设计
function SwalConfirm(taskText, hiddenText) {
  swal(
    {
      title: taskText + "隐藏域id" + hiddenText,
      text: "是否已与项目经理确认参与此项任务？",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#39dd17",
      confirmButtonText: "已经确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function (isConfirm) {
      //hiddenText 是隐藏域id，应该将改id传递至后台
      postData = hiddenText;
      if (isConfirm) {
        $.ajax({
          type: "POST",
          url: "/xxxxxxxx",
          data: {id: 13},
          dataType: "Json",
          success: function (response) {
            swal(
              {
                title: "参与任务成功",
                text: "您将参与该项任务",
                type: "success",
                timer: 1500
              })
          },
          error: function (e) {
            swal(
              {
                title: "参与任务成功失败",
                text: "后台处理错误",
                type: "error",
                timer: 1500
              })
          }
        })
      } else {
        swal({
          title: "已取消",
          text: "您取消了参与任务操作！",
          type: "success",
          timer: 1500
        })
      }
    }
  )
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

//监听iframe :当iframe加载完毕后绑定两种按钮的点击事件
function onMyFrameLoad() {
  $("#iframe-table").contents().find("table tr button").each(function (index, item) {
    const taskText = $(this).parent().parent()[0].cells[0].innerText;
    const hiddenText = $(this).parent().parent().find("input[type=hidden]").val();
    if (index % 2 == 0) {
      //每行第一个button
      item.onclick = function () {
        return SwalConfirm(taskText, hiddenText);
      }
    } else {
      // 每行的第二个button
      const taskStatus = $(this).parent().parent()[0].cells[1].innerText;  //当前状态值
      item.onclick = function () {
        return updateBtn(taskStatus);
      }
    }
  })
}
