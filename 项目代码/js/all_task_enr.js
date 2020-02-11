$(function () {
  $(".choose-tasks ul").on("click", "li", function () {
    $(".choose-tasks ul li").removeClass("active");
    //active 表示鼠标点击后的一个CSS类标签
    $(this).addClass("active");
    var url = $(this).attr("data-src");  //获取点击后切换的url
    $("#iframe-table").attr("src", url)  //切换iframe的url
  });
});


//绑定"状态/文件更新"按钮点击事件  打开窗口
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
  //打开状态/文件更新窗口
  $("#showLoadingImgModel").modal('show');
}


//监听iframe :当iframe加载完毕后绑定两个按钮的点击事件
//“参与任务”和“设置”两个按钮
function onMyFrameLoad() {
  $("#iframe-table").contents().find("table tr button").each(function (index, item) {
    const taskText = $(this).parent().parent()[0].cells[0].innerText;
    //获取隐藏域的id值
    const hiddenText = $(this).parent().parent().find("input[type=hidden]").val();
    if (index % 2 == 0) {
      //每行第一个button
      item.onclick = function () {
        const userId = $("#userId").val();
        return SwalConfirm(taskText, hiddenText, userId);
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
