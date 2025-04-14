// 在线图片地址转换
var getUrl = apiUrl + 'img2base64?url=';
var $imgurl = $('#imgurl');
$('#imgurl-form').on('submit', function() {
  var url = $imgurl.val();
  if(!url) {
    layer.msg('输入的图片地址不能为空');
    return false;
  }
  getUrl += url;
  $.ajax({
    url: getUrl,
    dataType: 'json',
    type: 'GET',
    success: function(res) {
      if(res.error != 0) {
        layer.msg('发送的链接有误，请重试');
      } else {
        $('#imgurl-result').focus().val(res.data);
      }
    }
  });
  return false;
});


// 本地转base64
var localImg = function() {
    var $localResult = $('#localimg-result'); 

    $("#upload").change(function(){  
        // https://blog.csdn.net/xiaojun_xie/article/details/105200423 本地上传转base64 总结卡片新闻以及 使用canvas转方法
        var imgFile = new FileReader();
        imgFile.readAsDataURL(this.files[0]);
        imgFile.onload = function () {
            var imgData = this.result;
            $localResult.focus();
            $localResult.val(imgData);
        }
    }) ;  
}();