// 修改弹框中的内容
var ZWDDATA = {}

function getParam(name) {
  var str = location.search;
  var arr = str.split('&');
  var obj = {};
  for(var i = 0; i < arr.length; i++) {
    if(arr[i]) {
      var tmp = arr[i].split('=');
      if(tmp[0]) {
        obj[tmp[0]] = tmp[1] ? tmp[1] : '';
      }
    }
  }
  if(obj[name]) {
    return obj[name];
  }else {
    return '';
  }
}

$('.btn-refresh').click(function() {
  console.log('you have install the extension')
  var el = $('#dialog .ui-con-txt');
  var timer = setInterval(function() {
    if(el) {
      el.text('you have install the extension');
      ZWDDATA.gid = getParam('GID') || getParam('gid');
      clearInterval(timer);
      timer = null;
    }else {
      el = $('#dialog .ui-con-txt');
    }
  }, 20);
});