var btnNewHouse = document.getElementById("btnNewHouse");
btnNewHouse.addEventListener("click", btn);
function btn() {
  // 获取文本框中的数值
  var name = document.getElementById("inputText").value;
  // 将数值插入到对话框中的文本中
  alert("正在搜索" + name + "小区新房，请稍后");
}