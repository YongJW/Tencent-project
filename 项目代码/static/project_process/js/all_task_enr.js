$(function () {
  $(".choose-tasks ul li").on("click", function () {
    //每次手动点击左侧任务导航时，都设置分页页码为1
    PageIndex = 1;
    $(".choose-tasks ul li").removeClass("active");
    //active 表示鼠标点击后的一个CSS类标签
    $(this).addClass("active");
    var url = $(this).attr("data-src");  //获取点击后切换的url
    $("#iframe-table").attr("src", url);  //切换iframe的url
  });
});


//绑定"状态/文件更新"按钮点击事件  打开窗口
function updateBtn(taskStatus, hidden_project_id,hidden_task_id) {
  //给隐藏于赋值 任务id 和项目id
  $("#updateModalProjectId").val(hidden_project_id);
  $("#updataModalTaskId").val(hidden_task_id);
  if (taskStatus == "进行中") {
    $("#updates_status").val(1);
  } else if (taskStatus == "已完成") {
    $("#updates_status").val(2);
  } else if (taskStatus == "未启动") {
    $("#updates_status").val(3);
  }
  $("#InputFile").val("");  //将上传文件处清空
  //打开状态/文件更新窗口
  $("#showLoadingImgModel").modal('show');
}
