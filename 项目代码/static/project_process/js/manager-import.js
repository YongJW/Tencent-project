$(function () {

  //在按钮行的前面添加一行
  $("#addLineBtn").click(function () {
    const result = " <tr>\n" +
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
      "      </tr>";
    //在当前行的前面添加
    $("#tb_SaleOrder").before(result);
  });


});
