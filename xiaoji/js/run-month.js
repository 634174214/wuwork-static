const TYPE_MONTH_ITEMS = 1;
const TYPE_MONTH_NEXT = 2;
const TYPE_MONTH_GOOD = 3;

const GET_MONTH_RUL = 'api_get_month.php';

// 检测时间是否有效
function checkDate(date){
    return (new Date(date).getDate() == date.substring(date.length-2));
}

const Vm = new Vue({
    el: '#app',
    data() {
        return {
            monthStart: jsonData.month_start ? jsonData.month_start : lastMonthStart,
            monthEnd: jsonData.month_end ? jsonData.month_end : lastMonthEnd,
            monthItems: jsonData.monthItems,
            monthNextItems: jsonData.monthNextItems,
            monthGoodItems: jsonData.monthGoodItems,
            jsonDataStr: '',
            showDeling: false,
            showWaiting: true
        };
    },
    mounted() {
        setTimeout(() => {
            this.showWaiting = false;
        }, 400);
    },
    computed: {
        // 返回标题月份
        topHead() {
            let dateStr = '';
            if (checkDate(this.monthStart)) {
                const dateArr = this.monthStart.match(/[\d]{4}-[\d]{2}/);
                dateStr = dateArr[0];
                dateStr = dateStr.replace('-', '年') + '月';
            } 
            
            return dateStr;
        },
        iframeSrc() {
            return `select-month.php?start=${this.monthStart}&end=${this.monthEnd}`;
        }
    },
    methods: {
        getlist() {
            const ispublic = 1;
            const ismonth = 1;
            // console.log(ismonth, ispublic);
            return new Promise((resolve, reject) => {
                axios.get(GET_MONTH_RUL, {
                    params: {
                        start: this.monthStart,
                        end: this.monthEnd,
                        public: ispublic,
                        month: ismonth
                    }
                }).then(res => {
                    const response = res.data;
                    if (response.code === 0) {
                        resolve(response.data);
                    } else {
                        window.alert(response.msg);
                        resolve([]);
                    }
                });
            });
        },
        // 根据日期生成公开且加入汇总的事项
        async createMonthList() {
            this.showDeling = true;
            if (this.monthItems.length > 0) {
                const result = window.confirm('检测到您已经填写了本月事项，是否覆盖？');
                if (result) {
                    this.monthItems = [];
                } else {
                    this.showDeling = false;
                    return;
                }
            }
            // 检测日期
            if (!checkDate(this.monthStart) || 
                !checkDate(this.monthEnd)
            ) {
                window.alert('请输入有效时间格式！');
                this.showDeling = false;
                return;
            }
            if (!this.compareDate()) {
                this.showDeling = false;
                return;
            }
            
            let monthItems = await this.getlist();
            if (monthItems.length <= 0) {
                window.alert('抱歉，没有匹配到数据！');
                this.showDeling = false;
                return;
            }
            let finalMonthItems = [];
            // 对数据进行处理
            monthItems.forEach((item, index) => {
                // 
                const obj = {
                    item_id: 0,
                    item_mode: MODE_ITEM_MONTH,
                    content: item.content
                }
                finalMonthItems.push(obj);
                // // 因为对月报而言每一项都是新建的
                // item.item_id = 0;
                // item.item_mode = MODE_ITEM_MONTH;
            });
            setTimeout(() => {
                this.monthItems = finalMonthItems;
                this.showDeling = false;
                // console.log(this.monthItems)
            }, 500);
            
        },
        clearMonthList() {
           if (this.monthItems.length > 0) {
            const result = window.confirm('确定要清空所有的当月事项吗？');
            if (result) {
                this.monthItems = [];
            }
           }
        },
        // 当在表单form上回车时候不提交表单
        stopEnterSubmit(e) {
            // console.log(e.target)
            e.preventDefault();
            return false;
        },
        submitForm(event) {
            if (this.monthItems.length <= 0) {
                window.alert('您还没有添加月报的信息！');
                 event.preventDefault();
                return;
            }

            if (!checkDate(this.monthStart) || 
                !checkDate(this.monthEnd)
            ) {
                window.alert('请输入有效时间格式！');
                event.preventDefault();
                return;
            }

            if (!this.compareDate()) {
                event.preventDefault();
                return;
            }

            // 合并所有的项目
            const itemsArr = [...this.monthItems, ...this.monthNextItems, ...this.monthGoodItems];
            const dataJson = {
                itemsArr: itemsArr
            };

            this.jsonDataStr = JSON.stringify(dataJson);
            console.log(dataJson)
            // return false;
            const form = this.$refs.form;
            if (form.checkValidity && 
                form.checkValidity() == true
            ) {
                setTimeout(() => {
                    form.submit();
                }, 500);
            } else {
                window.alert('表单验证未通过，请仔细检查表单项！');
                 event.preventDefault();
            }
        },
        compareDate() {
            const start = new Date(this.monthStart).getTime();
            const end = new Date(this.monthEnd).getTime();
            if (start > end) {
               window.alert('开始时间不能大于结束时间！');
               return false; 
            } else {
                return true;
            }
        },
        addInput(type, event) {
            let id = '';
            let len = 0;
            let newObj = {
                item_id: 0,
                content: ''
            };
            switch(type) {
                case TYPE_MONTH_ITEMS:
                    newObj.item_mode = MODE_ITEM_MONTH;
                    this.monthItems.push(newObj);
                    len = this.monthItems.length - 1;
                    id = 'month-m-' + len;
                    break;
                case TYPE_MONTH_NEXT:
                    newObj.item_mode = MODE_ITEM_NEXT_MONTH;
                    this.monthNextItems.push(newObj);
                    len = this.monthNextItems.length - 1;
                    id = 'month-mn-' + len;
                    break;
                case TYPE_MONTH_GOOD:
                    newObj.item_mode = MODE_ITEM_GOOD_MONTH;
                    this.monthGoodItems.push(newObj);
                    len = this.monthGoodItems.length - 1;
                    id = 'month-mg-' + len;
                    break;
            }
            // setTimeout(() => {
            //     document.getElementById(id).focus();
            // }, 100);
            this.$nextTick(() => {
                const inputel = document.getElementById(id);
                inputel.focus();
            })
        },
        async deleteInput(type, index) {
            // console.log(type)
            this.showDeling = true;
            let obj = {};
            let success = true;
            switch(type) {
                case TYPE_MONTH_ITEMS:
                    obj = this.monthItems[index];
                    success = await this.deleteItem(obj.item_id);
                    if (!success) {
                        return;
                    }
                    this.monthItems.splice(index, 1);
                    break;
                case TYPE_MONTH_NEXT:
                    obj = this.monthNextItems[index];
                    success = await this.deleteItem(obj.item_id);
                    if (!success) {
                        return;
                    }
                    this.monthNextItems.splice(index, 1);
                    break;
                case TYPE_MONTH_GOOD:
                    obj = this.monthGoodItems[index];
                    success = await this.deleteItem(obj.item_id);
                    if (!success) {
                        return;
                    }
                    this.monthGoodItems.splice(index, 1);
                    break;
            }
            this.showDeling = false;
        },
        deleteItem(item_id) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // 如果ID不存在证明是新建 或者 item_id为0证明是新创建的 也不发请求
                    if (!ID || item_id == 0) {
                        resolve(true);
                        return;
                    }
                    axios.get('./api_del_month_items.php', {
                        params: {
                            month_id: ID,
                            item_id: item_id
                        }
                    })
                    .then((res) => {
                        const response = res.data;
                        if (response.code == 0) {
                            resolve(true);
                        } else {
                            window.alert(response.msg);
                            this.showDeling = false;
                            reject(false);
                        }
                    })
                    .catch((err) => {
                        window.alert(response.msg);
                        // 不成功 隐藏弹窗
                        this.showDeling = false;
                        console.log(err);
                        reject(false);
                    });
                }, 500);
            });
        },
        undateList(type, index, event) {
            const val = event.target.value;
            switch(type) {
                case TYPE_MONTH_ITEMS:
                    this.monthItems[index]['content'] = val;
                    break;
                case TYPE_MONTH_NEXT:
                    this.monthNextItems[index]['content'] = val;
                    break;
                case TYPE_MONTH_GOOD:
                    this.monthGoodItems[index]['content'] = val;
                    break;
            }
        }
    }
});