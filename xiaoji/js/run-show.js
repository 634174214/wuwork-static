const allLine = document.querySelectorAll('.dashed-line');
        allLine.forEach((em) => {
            em.innerHTML = '------------------------------------------------------------------------------------';
        });

const copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', function() {
    const textarea = document.getElementById('submit-textarea');
    textarea.select();
    document.execCommand('copy', true);
    layer.msg('复制成功！快去粘贴吧！');
});

let $wrapRow = $('#wrap-row');
$('#open-nopublic').on('click', function() {
    if ($wrapRow.hasClass('show-nopublic')) {
        $wrapRow.removeClass('show-nopublic');
        $(this).text('显示不公开的事项');
    } else {
        $wrapRow.addClass('show-nopublic');
        $(this).text('隐藏不公开的事项');
    }
});

$('#see-copy-btn').on('click', function() {
    var $textarea = $('#submit-textarea');
    var texts = $textarea.val();
    // 将回车\n替换为br
    var textBr = texts.replace(/\n/g,"<br/>");
    var contentHtml = `
        <div class="textarea-new-wrapper" id="textarea-new-wrapper">
            <div class="top-row">
                <button class="btn btn-outline-primary" id="toggle-textarea-btn">打开临时编辑模式</button>
                <p class="textarea-new-tips"><em>注意：</em>您可以在临时编辑模式下修改，但是结果不会被保存且不会影响呈现和复制的内容！！<b>推荐返回编辑界面进行正式的修改！</b></p>
            </div>
            <div class="toggle-row">
                <textarea id="textarea-new" class="textarea-new">${texts}</textarea>
                <button type="btn" class="btn btn-success copy-lin-edit" id="copy-lin-edit">复制临时编辑的内容</button>
                <div class="textarea-p">${textBr}</div>
            </div>
        </div>
    `;
    
    layer.open({
      type: 1, 
      title: '提示信息',
      // area: 'auto',
      area: ['70%', '80%'],
      // maxWidth: 1000,
      // maxHeight: 600,
      content: contentHtml //这里content是一个普通的String
    });

    openEditonMode();
    copyLinEdit();
});


function openEditonMode() {
    $('#toggle-textarea-btn').on('click', function() {
        var $textareaWrap = $('#textarea-new-wrapper');
        var toggleCls = 'toggle-edit';
        if ($textareaWrap.hasClass(toggleCls)) {
            $textareaWrap.removeClass(toggleCls);
            $(this).text('打开临时编辑模式');
            $(this).removeClass('btn-primary').addClass('btn-outline-primary');
            layer.msg('已关闭临时编辑模式');
        } else {
            $textareaWrap.addClass(toggleCls);
            $(this).text('关闭临时编辑模式');
            $(this).removeClass('btn-outline-primary').addClass('btn-primary');
            layer.msg('已开启临时编辑模式');
        }
    });
}

function copyLinEdit() {
    $('#copy-lin-edit').on('click', function() {
        $('#textarea-new')[0].select();
        document.execCommand('copy', true);
        layer.msg('临时编辑内容复制成功！');
    });
}