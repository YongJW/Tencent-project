//在按钮行的前面添加一行
function addLine() {
  // result = "<tr>\n        <td>\n          <input type=\"text\">\n        </td>\n        <td>\n          <input type=\"text\">\n        </td>\n        <td>\n          <input type=\"text\">\n        </td>\n        <td>\n          <input type=\"text\">\n        </td>\n        <td>\n          <input type=\"text\">\n        </td>\n        <td>\n          <input type=\"file\">\n        </td>\n      </tr>"
  result = " <tr>\n" +
    "        <td>\n" +
    "          <input type=\"text\">\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <input type=\"text\">\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <input type=\"text\">\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <input type=\"text\">\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <input type=\"text\">\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <input type=\"file\">\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <span>删除</span>\n" +
    "        </td>\n" +
    "      </tr>"
  //在当前行的前面添加
  $("#tb_SaleOrder").before(result);
}

//提交按钮
function submitbtn() {
  var tableData = {};  //存储table中的数据
  $("#dataTable tbody tr").each(function (trindex, tritem) {//遍历每一行 tr
    //只获取非按钮行的数据
    if ($(tritem).find("button").length==0){
      tableData[trindex] = new Array();
      $(tritem).find("input").each(function (tdindex, tditem) {//遍历当前行中的每一个input
        if (tdindex < 5) {
          tableData[trindex][tdindex] = $(tditem).val();//遍历每一个数据，并存入
        } else //上传文件input
        {
          tableData[trindex][tdindex] = $(tditem)[0].files[0];//获取选中的文件
        }
      });
    }
  });
  console.log(tableData);
  // $.ajax({
  //   url: '/**/**',
  //   type: 'POST',
  //   data: tableData,
  //   success: function () {
  //     console.log('成功！！')
  //   }
  // })
}