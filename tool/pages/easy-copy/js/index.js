const KEY = '__tangCopy__';

const suffix = 'copy-input-';



const Vm = new Vue({
    el: '#app',
    data() {
        return {
            list: [],
            // 用于记录复制的索引
            record: -1
        }
    },
    created() {
        this.list = Storage.get(KEY, '');
        this.list = this.list ? JSON.parse(this.list) : [];
        // console.log(this.list)
    },
    mounted() {
        this.listenKeybord();
    },
    computed: {
        showCopyTips() {
            if (this.record <= -1) {
                return false;
            } else {
                return true;
            }
        },
        copyText() {
            if (this.list.length > 0) {
                return this.list[this.record];
            }
        }
    },
    methods:{
        listenKeybord() {
            let self = this;
            document.onkeydown = function(e) {            
              let key = window.event.keyCode;  
              // ctrl+z是向前复制
              if (key == 90 && event.ctrlKey) {
                // 在浏览器中ctrl+s的组合键有其他的用途，所以在这边重新定义的时候，需要关闭原组合键,下面的代码可屏蔽原快捷键。
                    window.event.preventDefault(); //关闭浏览器快捷键
                    self.copyBefore();
              }
              // ctrl+x是向后复制
              if (key == 88 && event.ctrlKey) {
                // 在浏览器中ctrl+s的组合键有其他的用途，所以在这边重新定义的时候，需要关闭原组合键,下面的代码可屏蔽原快捷键。
                    window.event.preventDefault(); //关闭浏览器快捷键
                    self.copyAfter();
              }
            };
        },
        setInputId(index) {
            return `${suffix}${index}`;
        },
        addNew() {
            this.list.push('');
            const last = this.list.length - 1;
            const id = `${suffix}${last}`;
            setTimeout(() => {
                const input = document.getElementById(id);
                input.focus();
            }, 200);
        },
        inputContent(index, event) {
            this.list[index] = event.target.value;
        },
        saveInputs() {
            if (this.list.length <= 0) {
                Storage.set(KEY, '');
                layer.alert('数据已清空');
                return;
            }
            const form = this.$refs.form;
            if (form.checkValidity && 
                form.checkValidity() == true
            ) {
                const sdata = JSON.stringify(this.list);
                Storage.set(KEY, sdata);
                layer.alert('保存成功');
            } else {
                layer.alert('表单验证未通过，输入项不能为空！');
            }
        },
        deleteIput(index) {
            this.list.splice(index, 1);
        },
        copyInput(index) {
            const text = this.list[index];
            if (!text || text == '') {
                layer.alert('复制的内容不能为空！');
            }
            copyText(text);
            layer.msg('已复制');
            const input = document.getElementById(`${suffix}${index}`);
            input.select();
        },
        copyBefore() {
            if (this.record <= 0) {
                this.record = this.list.length;
            }
            this.record = this.record - 1;
            const id = `${suffix}${this.record}`;
            const text = this.list[this.record];
            if (!text || text == '') {
                layer.alert('复制的内容不能为空！"依次复制"操作被终止');
                this.record = -1;
                return;
            }
            copyText(text);
            const msg = `已复制第${this.record + 1}条中的内容`;
            layer.msg(msg);
        },
        copyAfter() {
            // console.log(this.record, this.list.length)
            if (this.record >= this.list.length - 1) {
                this.record = -1;
            }
            this.record = this.record + 1;
            
            const id = `${suffix}${this.record}`;
            // const el = document.getElementById(id);
            // console.log(el);
            // el.select();
            const text = this.list[this.record];
            if (!text || text == '') {
                layer.alert('复制的内容不能为空！"依次复制"操作被终止');
                this.record = -1;
                return;
            }
            copyText(text);
            const msg = `已复制第${this.record + 1}条中的内容`;
            layer.msg(msg);
            // console.log(this.record)
        },
        resetTurn() {
             this.record = -1;
             layer.alert('重置成功');
        }
    }
})