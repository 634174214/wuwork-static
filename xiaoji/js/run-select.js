const GET_MONTH_RUL = 'api_get_month.php';
const Vm = new Vue({
      el: '#app',
      data() {
        return {
                start: start,
                end: end,
                ispublic: 1,
                ismonth: 1,
                list: [],
                isWaiting: true,
                showAlertMsg: false,
                alertMsg: '',
                showSelectX: true
        }
      },
      async created() {
        if (this.start && this.end) {
            await this.getlist();
        } else {
            this.showSelectX = false;
        }
      },
      computed: {
        selectText() {
            let strM = this.ismonth == 1 ? '已经加入汇总' : '没有加入汇总';
            let strP = this.ispublic == 1 ? '已公开' : '没有公开(已隐藏)';
            return `[ ${strM} ] 且 [ ${strP} ]`;
        }
      },
      methods: {
        getlist() {
            const ispublic = this.ispublic == 1 ? 1 : 0;
            const ismonth = this.ismonth == 1 ? 1 : 0;
            // console.log(ismonth, ispublic);
            return new Promise((resolve, reject) => {
                axios.get(GET_MONTH_RUL, {
                    params: {
                        start: this.start,
                        end: this.end,
                        public: ispublic,
                        month: ismonth
                    }
                }).then(res => {
                    const response = res.data;
                    if (response.code === 0) {
                        this.list = response.data;
                        this.isWaiting = false;
                        resolve(true);
                    } else {
                        window.alert(response.msg);
                        reject(false);
                    }
                });
            });
        },
        checkStartEnd() {
            if (!this.start || !this.end) {
                window.alert('请选择要查看的开始和结束日期');
                return false;
            }
            const startStamp = new Date(this.start).getTime();
            const endStamp = new Date(this.end).getTime();
            if (startStamp > endStamp) {
                window.alert('开始时间不能大于结束时间！');
                return false;
            }
            return true;
        },
        async submitForm() {
            if (!this.checkStartEnd()) {
                return;
            }
            this.isWaiting = true;
            this.list = [];

            const res = await this.getlist();
            if (res) {
              this.showSelectX = true;
            }
        },
        openAlertMsg(msg) {
            if (this.showAlertMsg) {
                return;
            }
            this.showAlertMsg = true;
            this.alertMsg = msg;
            setTimeout(() => {
                this.showAlertMsg = false;
            }, 1500);
        },
        copyItem(content, index) {
            const text = content;
             if (navigator.clipboard) {
                 // clipboard api 复制
                 navigator.clipboard.writeText(text);
             } else {
                 var textarea = document.createElement('textarea');
                 document.body.appendChild(textarea);
                 // 隐藏此输入框
                 textarea.style.position = 'fixed';
                 textarea.style.clip = 'rect(0 0 0 0)';
                 textarea.style.top = '10px';
                 // 赋值
                 textarea.value = text;
                 // 选中
                 textarea.select();
                 // 复制
                 document.execCommand('copy', true);
                 // 移除输入框
                 document.body.removeChild(textarea);
             }
             // 找出第一个符合条件的 设置为false
             this.list.find((item) => {
               if (item.copied == true) {
                item.copied = false;
               }
             });
             this.list[index]['copied'] = true;
             this.openAlertMsg('已复制，请到目的处粘贴');
        }
      }
});