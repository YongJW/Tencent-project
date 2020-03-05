$(function () {
  $(".choose-tasks ul li").on("click", function () {
    // if ($(this)[0].innerText!="编辑项目"){
      //移除所有的active
      $(".choose-tasks ul li").removeClass("active");
      //active 表示鼠标点击后的一个CSS类标签
      $(this).addClass("active");
      var url = $(this).attr("data-src");  //获取点击后切换的url
      $("#iframe-table").attr("src", url);  //切换iframe的url
    // }
  });
});

//伪造项目组成员
function forgeMemberData() {
  function user(id, name) {
    this.userid = id;
    this.userName = name;
  }

  let usersInfo = {};
  const user1 = new user("12", "蒋王");
  const user2 = new user("13", "海江");
  const user3 = new user("14", "章华");
  const user4 = new user("15", "刘十分");
  const user5 = new user("16", "张海");
  const user6 = new user("17", "王建");
  const user7 = new user("18", "章士谔");
  const user8 = new user("19", "宇玉溪");
  const user9 = new user("20", "六级大");
  const user10 = new user("21", "蒋幅度");
  const user11 = new user("22", "发室逢");
  usersInfo.users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11];
  // usersInfo.users = [user1, user2, user3];
  return usersInfo;
}


//伪造“我的项目”
function forgeData() {
  //封装的一个数据类
  function trData(projectId, projectNumber, projectName, projectType, projectSupervisor, projectManager, projectState) {
    this.projectId = projectId;
    this.projectNumber = projectNumber;
    this.projectName = projectName;
    this.projectType = projectType;
    this.projectSupervisor = projectSupervisor;
    this.projectManager = projectManager;
    this.projectState = projectState;
  }

//tableJsonData为伪造的json数据
  let tableJsonData = {};
  tableJsonData.userId = "张华";
  var tr1 = new trData(1, "BJ201901Z13", "腾讯IT办公网新建", "实施项目(B型)", "A、B", "A", "进行中");
  var tr2 = new trData(2, "BJ201901Z14", "阿里IT办公网维护", "维护项目(B型)", "A、B、C", "A、B", "进行中");
  var tr3 = new trData(3, "BJ201901Z15", "中国银行IT办公网新建", "实施项目(B型)", "A", "A、B", "进行中");
  var tr4 = new trData(4, "BJ201901Z16", "蓝光IT办公网新建", "实施项目(B型)", "A、B", "A", "进行中");
  var tr5 = new trData(5, "BJ201901Z17", "招行办公网新建", "实施项目(B型)", "A、B", "A、B", "进行中");
  var tr6 = new trData(6, "BJ201901Z17", "中国银行IT办公网新建", "实施项目(B型)", "A、B、C", "A、B", "进行中");
  var tr7 = new trData(7, "BJ201901Z17", "招行办公网新建", "实施项目(B型)", "A、B", "A、B", "进行中");
  var tr8 = new trData(8, "BJ201901Z17", "招行办公网新建", "实施项目(B型)", "A、B", "A、B", "进行中");
  var tr9 = new trData(9, "BJ201901Z17", "中国银行IT办公网新建", "实施项目(B型)", "A、B、D", "A、B", "进行中");
  var tr10 = new trData(10, "BJ201901Z17", "招行办公网新建", "实施项目(B型)", "A、B", "A、B", "进行中");
  var tr11 = new trData(11, "BJ201901Z17", "中国银行IT办公网新建", "实施项目(B型)", "A、B、D", "A、B", "进行中");
  var tr12 = new trData(12, "BJ201901Z17", "招行办公网新建", "实施项目(B型)", "A、B", "A、B", "进行中");
  var tr13 = new trData(13, "BJ201901Z17", "招行办公网新建", "实施项目(B型)", "A、B", "A、B", "进行中");
  let arr = [tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8, tr9, tr10, tr11, tr12, tr13];

  function randomsort(a, b) {
    return Math.random() > .5 ? -1 : 1;
    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
  }

  // arr.sort(randomsort);  // 打乱伪造数据
  tableJsonData.all_projets_data = arr;
  console.log(JSON.stringify(tableJsonData));
  //1.给隐藏域的userId 赋值
  console.log(tableJsonData.userId);
  return tableJsonData
}

//产生“编辑项目”数据
function forgeDataByEdit() {
  //封装的一个数据类
  function trData(taskId, taskName, current_status, task_explain_file, enrs, file_check) {
    this.taskId = taskId;
    this.taskName = taskName;
    this.current_status = current_status;
    this.task_explain_file = task_explain_file;
    this.enrs = enrs;
    this.file_check = file_check;
  }

//tableJsonData为伪造的json数据
  let tableJsonData = {};
  tableJsonData.userId = "张华";
  var tr1 = new trData(1, "IP规划表检查", "已完成", "IP规划表检查.zip", "A、B", 1);
  var tr2 = new trData(2, "确认配置模板", "进行中", "确认配置模板.zip", "A、B、C", 0);
  var tr3 = new trData(3, "IP规划表检查", "闲置中", "IP规划表检查.zip", "A", 1);
  var tr4 = new trData(4, "确认配置模板", "已完成", "确认配置模板.zip", "A、B", 1);
  var tr5 = new trData(5, "xxx检查表", "已完成", "xxx检查表.zip", "A、B", 0);
  var tr6 = new trData(6, "xxx检查表", "已完成", "xxx检查表.zip", "A、B", 1);
  var tr7 = new trData(7, "xxx检查表", "已完成", "xxx检查表.zip", "A、B", 0);
  var tr8 = new trData(8, "xxx检查表", "已完成", "xxx检查表.zip", "A、B", 0);
  var tr9 = new trData(9, "xxx检查表", "已完成", "xxx检查表.zip", "A、B", 1);
  var tr10 = new trData(10, "xxx检查表", "已完成", "xxx检查表.zip", "A、B", 0);
  var tr11 = new trData(11, "xxx检查表", "已完成", "xxx检查表.zip", "A、B", 1);
  var tr12 = new trData(12, "xxx检查表", "已完成", "xxx检查表.zip", "A、B", 0);
  var tr13 = new trData(13, "xxx检查表", "已完成", "xxx检查表.zip", "A、B", 1);
  let arr = [tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8, tr9, tr10, tr11, tr12, tr13];

  function randomsort(a, b) {
    return Math.random() > .5 ? -1 : 1;
    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
  }

  // arr.sort(randomsort);  // 打乱伪造数据
  tableJsonData.all_tasks_table_data = arr;
  console.log(JSON.stringify(tableJsonData));
  //1.给隐藏域的userId 赋值
  console.log(tableJsonData.userId);

  return tableJsonData
}