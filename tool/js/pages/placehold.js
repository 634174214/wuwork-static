// 占位图
var bgcolor = Colorpicker.create({
	el: "bgcolor",
  // 规定了背景色 会在开始就给input赋值
	// color: "#fff",
	change: function (elem, hex) {
		// elem.style.backgroundColor = hex;
    $(elem).next().css('backgroundColor', hex);
    elem.value = hex;
	}
})

var fontcolor = Colorpicker.create({
	el: "fontcolor",
  // 规定了背景色 会在开始就给input赋值
	// color: "#fff",
	change: function (elem, hex) {
		$(elem).next().css('backgroundColor', hex);
    elem.value = hex;
	}
})

$('#bgcolor').on('blur', function() {
  if(this.value == '') {
    $(this).next().css('backgroundColor', '#d3d3d3');
  }
});

$('#fontcolor').on('blur', function() {
  if(this.value == '') {
    $(this).next().css('backgroundColor', '#000');
  }
});

var $imgX = $('#placehold-show').find('.img-x').eq(0);
var $textX = $('#placehold-show').find('.text-x').eq(0);
$('#placehold-form').on('submit', function() {
  var formStr = '';
  var width = checkNum($('#width').val(), 'w');
  var height = checkNum($('#height').val(), 'h');
  var num = checkNum($('#num').val(), 'n');
  var bgcolor = checkColor($('#bgcolor').val(), 'bc');
  var fontcolor = checkColor($('#fontcolor').val(), 'fc');
  var line = checkNum($('#line').val(), 'line');

  var formStr = width + height + bgcolor + fontcolor + num + line;
  formStr = formStr.slice(0, formStr.length - 1);
  formStr = (formStr != '') ? ('?' + formStr) : formStr;

  var placeholdUrl = apiUrl + 'placehold' + formStr;
  console.log(placeholdUrl);
  $imgX.html('<img src="' + placeholdUrl + '">');
  $textX.attr('href', placeholdUrl).text('点我查看占位符大图，图片右键复制链接');

  return false;
});

function checkNum(val, name) {
  if(val == '' || val == undefined) {
    return '';
  }
  var res = null;
  // 匹配所有非数字的项目
  var pattern = /[^\d]/g;
  // 如果没匹配到 证明全是数字
  if(!pattern.test(val)) {
    if(name == 'w' || name == 'h') {
      (val > 2048) && layer.msg('最大宽高的最大尺寸是2048（已采用最大值）');
    }
    res = name + '=' + val + '&';
  } else {
    layer.msg('请检查' + name + '输入的值，只能是数字(已采用默认值)');
    res = '';
  }
  return res;
}

function checkColor(val, name) {
  if(val != '') {
    val = val.split('#')[1];
    return name + '=' + val + '&';
  } else {
    return '';
  }
}