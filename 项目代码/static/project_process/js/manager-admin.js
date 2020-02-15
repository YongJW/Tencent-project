$(function () {
  $(".choose-tasks ul").on("click", "li", function () {
    $(".choose-tasks ul li").removeClass("active");
    //active 表示鼠标点击后的一个CSS类标签
    $(this).addClass("active");
    var url = $(this).attr("data-src");  //获取点击后切换的url
    $("#iframe-table").attr("src", url);  //切换iframe的url
  });


});

//绑定"状态/文件更新"按钮点击事件  打开窗口
function openAuditing(taskId, const_userId) {
  //设置更新人员
  $("#updataUserName").html(const_userId);
  $("#InputFile").val("");  //将上传文件处清空
  //打开状态/文件更新窗口
  $("#showCheckModel").modal('show');
  $("#taskId").val(taskId);
}


//产生伪造数据
function forgeData() {
  //封装的一个数据类
  function trData(taskId, taskName, current_status, task_explain_file, enrs) {
    this.taskId = taskId;
    this.taskName = taskName;
    this.current_status = current_status;
    this.task_explain_file = task_explain_file;
    this.enrs = enrs;
  }

//tableJsonData为伪造的json数据
  let tableJsonData = {};
  tableJsonData.userId = "张华";
  var tr1 = new trData(1, "IP规划表检查", "已完成", "IP规划表检查.zip", "A、B");
  var tr2 = new trData(2, "确认配置模板", "进行中", "确认配置模板.zip", "A、B、C");
  var tr3 = new trData(3, "IP规划表检查", "闲置中", "IP规划表检查.zip", "A");
  var tr4 = new trData(4, "确认配置模板", "已完成", "确认配置模板.zip", "A、B");
  var tr5 = new trData(5, "xxx检查表", "已完成", "xxx检查表.zip", "A、B");
  let arr = [tr1, tr2, tr3, tr4, tr5];

  function randomsort(a, b) {
    return Math.random() > .5 ? -1 : 1;
    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
  }

  arr.sort(randomsort);  // 打乱伪造数据
  tableJsonData.all_tasks_table_data = arr;
  console.log(JSON.stringify(tableJsonData));
  //1.给隐藏域的userId 赋值
  console.log(tableJsonData.userId);

  return tableJsonData
}


function forgeMemberData() {
  function user(id, name) {
    this.userid = id;
    this.userName = name;
  }
  let usersInfo = {};
  const user1 = new user("12","蒋王");
  const user2 = new user("13","海江");
  const user3 = new user("14","章华");
  const user4 = new user("15","刘十分");
  const user5 = new user("16","张海");
  const user6 = new user("17","王建");
  const user7 = new user("18","章士谔");
  const user8 = new user("19","宇玉溪");
  const user9 = new user("20","六级大");
  const user10 = new user("21","蒋幅度");
  const user11 = new user("22","发室逢");
  usersInfo.users = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10,user11];
  return usersInfo;
}
