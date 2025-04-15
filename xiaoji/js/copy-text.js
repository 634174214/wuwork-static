

var copyText = function (button, content) {
    if (!button) {
        return;
    }
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

    // 浜嬩欢缁戝畾
    button.addEventListener('click', function (event) {
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
    });

    var strStyle = '.text-popup { animation: textPopup 1s both; -ms-transform: translateY(-20px); color: #01cf97; user-select: none; white-space: nowrap; position: absolute; z-index: 99; }@keyframes textPopup {0%, 100% { opacity: 0; } 5% { opacity: 1; } 100% { transform: translateY(-50px); }}'

    var eleStyle = document.querySelector('#popupStyle');
    if (!eleStyle) {
        eleStyle = document.createElement('style');
        eleStyle.id = 'popupStyle';
        eleStyle.innerHTML = strStyle;
        document.head.appendChild(eleStyle);
    }
};