/*
<cite class="past-cite" title="复制该行内容" 
      @click="copyPastText(past.content, event)">[ 复制 ]</cite>
// 传入点击元素的event 如果要让点击的按钮出现动画 必须传入第一个参数与第三个参数
copyPastText(text, event) {
    copyText(event.target, text, event);
},
 */
// 修改后的适应vue的插件 复制
var copyText = function (button, content, event) {
    if (!button) {
        return;
    }
    var event = event || false;
    // 鏄惁闄嶇骇浣跨敤
    var isFallback = !navigator.clipboard;

    if (typeof button == 'string' && !content) {
        if (content === false) {
            isFallback = true;
        }
        content = button;
        button = null;
    }

    var eleTextarea = document.querySelector('#tempTextarea');
    if (!eleTextarea && isFallback) {
        eleTextarea = document.createElement('textarea');
        eleTextarea.style.width = 0;
        eleTextarea.style.position = 'fixed';
        eleTextarea.style.left = '-999px';
        eleTextarea.style.top = '10px';
        document.body.appendChild(eleTextarea);
    }

    var funCopy = function (text, callback) {
        callback = callback || function () {};

        if (!isFallback) {
            navigator.clipboard.writeText(text).then(callback, function() {
                // 绂佹鍐欏叆鍓垏鏉垮悗浣跨敤鍏滃簳鏂规硶
                copyText(text, false);
                callback();
            });

            return;
        }

        eleTextarea.value = text;
        eleTextarea.select();
        document.execCommand('copy', true);

        callback();
    };

    if (!button) {
        funCopy(content);
        return;
    }

    // 如果传了第三个参数event 
    if (event) {
        var strCopy = content;
        if (content && content.tagName) {
            strCopy = content.textContent || content.value;
        }
        // 澶嶅埗鐨勬枃瀛楀唴瀹�
        if (!strCopy) {
            return;
        }        

        funCopy(strCopy, function () {
            // 澶嶅埗鎴愬姛鎻愮ず
            var eleTips = document.createElement('span');
            eleTips.className = 'text-popup';
            eleTips.innerHTML = '已复制';
            document.body.appendChild(eleTips);
            // 浜嬩欢
            eleTips.addEventListener('animationend', function() {
                eleTips.parentNode.removeChild(eleTips);
            });
            // For IE9
            if (!history.pushState) {
                setTimeout(function () {
                    eleTips.parentNode.removeChild(eleTips);
                }, 1000);
            }
            eleTips.style.left = (event.pageX - eleTips.clientWidth / 2) + 'px';
            eleTips.style.top = (event.pageY - eleTips.clientHeight) + 'px';
        });
    }
    

    var strStyle = '.text-popup { animation: textPopup 1s both; -ms-transform: translateY(-20px); color: #01cf97; user-select: none; white-space: nowrap; position: absolute; z-index: 199; }@keyframes textPopup {0%, 100% { opacity: 0; } 5% { opacity: 1; } 100% { transform: translateY(-50px); }}'

    var eleStyle = document.querySelector('#popupStyle');
    if (!eleStyle) {
        eleStyle = document.createElement('style');
        eleStyle.id = 'popupStyle';
        eleStyle.innerHTML = strStyle;
        document.head.appendChild(eleStyle);
    }
};