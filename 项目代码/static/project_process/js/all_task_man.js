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