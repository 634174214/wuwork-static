// 在线图片地址转换
var $urlQr = $('#url-qr');
var $imgX = $('#qrurl-result').find('.img-x').eq(0);
var $textX = $('#qrurl-result').find('.text-x').eq(0);

$('#qr-form').on('submit', function() {
  var getUrl = apiUrl + 'qrcode?data=';
  var url = $urlQr.val();
  if(!url) {
    layer.msg('输入的网页地址不能为空');
    return false;
  }
  getUrl += url;

  $imgX.empty();

  var $qrimg = $('<img src="' + getUrl + '">');
  $imgX.append($qrimg);
  $textX.attr('href', getUrl).text('二维码已经生成，您可以扫码观看或点击下载保存');

  return false;
});
