const PLAN_WAIT_OK = 1;
const PLAN_HAS_OK = 2;
const DEFAULT_LEVEL = 3;

function layerLoad() {
    const loadingPop = layer.load(1, {
                shade:[0.6, '#0b1239']
    });
    return loadingPop;
}

// 将换行符\n替换为br
function replace2Br(txts) {
    txts = txts.replace(/[\n\r]/g, '<br>');
    return txts;
}

function request(url, obj, method) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: method,
            data: obj,
            success: function(res) {
                if (res.code == 0) {
                    // console.log(res)
                    resolve(res.data);
                } else {
                    resolve({
                        success: false,
                        msg: res.msg
                    });
                }
            },
            error: function(err) {
                reject({
                    success: false,
                    msg: '请求失败，请打开控制台查看更多信息'
                });
                console.log(err);
            }
        });
    });
}

function layerConfirm(msg) {
    return new Promise((resolve, reject) => {
        layer.confirm(
            msg,
            // 确定
            function(index) {
                layer.close(index);
                resolve(true);
            },
            // 取消
            function(index) {
                layer.close(index);
                resolve(false);
            }
        );
    });
}


const Vm = new Vue({
    el: '#app',
    data() {
        return {
            showWaiting: true,
            showEditor: false,
            showShower: false,
            dowait: window.dowait,
            plans: window.plans,
            showDeling: false,
            // 表单编辑以及新建时候的信息
            form_id: 0,
            form_title: '',
            form_content: '',
            form_level: DEFAULT_LEVEL,
            form_startat: '',
            form_endat: '',
            // 如果是编辑模式，那么点击的时候更新的项目的索引
            form_plans_index: -1,
            // 显示详细内容
            show_title: '',
            show_content: '',
            show_level: DEFAULT_LEVEL,
            show_startat: '',
            show_endat: '',
            show_createdat: ''
        };
    },
    computed: {
        theadCls() {
            let cls = '';
            if (this.dowait == PLAN_WAIT_OK) {
                cls = 'thead-dark';
            } 
            if (this.dowait == PLAN_HAS_OK) {
                cls = 'thead-light';
            } 
            return cls;
        },
        today() {
            return  moment().format('YYYY年MM月DD日');
        }
    },
    mounted() {
        setTimeout(() => {
            this.showWaiting = false;
        }, 400);
    },
    methods: {
        getFormatCreated(date) {
            return moment(date).format('YYYY-MM-DD');
        },
        copyCustomText(text, event, spaceCount = 0) {
            let space = '';
            for (var i = 0; i < spaceCount - 1; i++) {
                space += ' ';
            }
            // 给复制的内容前面加上空格
            text = `${space}${text}`;
            copyText(event.target, text, event);
        },
        getOrderNumber(index) {
            return (page - 1) * pageCount + index + 1;
        },
        getLevel(level) {
            level = parseInt(level);
            let levelStr = '';
            switch(level) {
                case 5:
                    levelStr = '最高级';
                    break;
                case 4:
                    levelStr = '高级';
                    break;
                case 3:
                    levelStr = '中级';
                    break;
                case 2:
                    levelStr = '初级';
                    break;
                case 1:
                    levelStr = '低级';
                    break;
                default:
                    levelStr = '低级';
                    break;
            }
            return levelStr;
        },
        getStatus(start, end) {
            // 如果是查看已经完成的项目状态
            if (this.dowait == PLAN_HAS_OK) {
                return '已完成';
            }
            if (!start || !end) {
                return '长期';
            }
            const todayStamp = new Date().getTime();
            const startStamp = new Date(start).getTime();
            const endStamp = new Date(end).getTime();
            let status = '';
            switch(true) {
                case todayStamp < startStamp:
                    status = '<em class="text-black-50">未开始</em>';
                    break;
                case todayStamp > endStamp:
                    status = '<em class="text-danger">已逾期</em>';
                    break;
                case todayStamp <= endStamp && todayStamp >= startStamp:
                    status = '<em class="text-success">在进行</em>';
                    break;
            }
            return status;
        },
        getDateArea(start, end) {
            let str = '';
            if (start) {
                if (end) {
                    str += `${start} 至 ${end}`;
                } else {
                    str = `${start} 起`
                }
                return str;
            } else {
                return '暂无';
            }
        },
        openFrom() {
            this.showEditor = true;
            setTimeout(() => {
                $('#form-title')[0].focus();
            }, 500);
        },
        closeForm() {
            this.showEditor = false;
            this.resetForm();
        },
        resetForm() {
            this.form_content = '';
            this.form_title = '';
            this.form_endat = '';
            this.form_startat = '';
            this.form_id = 0;
            this.form_level = DEFAULT_LEVEL;
            this.form_plans_index = -1;
        },
        checkForm() {
            if (!this.form_title || this.form_title == '') {
                layer.msg('计划标题不能为空！');
                return false;
            }
            if (!this.form_content || this.form_content == '') {
                layer.msg('计划详细内容不能为空！');
                return false;
            }
            // 如果有结束日期 那么必须提示 选择开始日期 且 结束日期不能小于开始日期
            if (this.form_endat && !this.form_startat) {
                layer.msg('您已选择结束日期，开始日期不能为空！');
                return false;
            }
            if (this.form_endat && this.form_startat) {
                const end = new Date(this.form_endat).getTime();
                const start = new Date(this.form_startat).getTime();
                if (end < start) {
                    layer.msg('结束日期不能大于开始日期！');
                    return false;
                }
            }
            return true;
        },
        async saveForm() {
            let self = this;
            let result = {};
            if (!this.checkForm()) {
                return;
            }
            const loadingPop = layerLoad();
            // 如果id不是0 那么就是编辑 保存后更新plans数组对应的值
            if (this.form_id !== 0) {
                const index = this.form_plans_index;
                // 更新
                result = await request('api_note_post_item.php', {
                    item_id: this.form_id,
                    title: this.form_title,
                    content: this.form_content,
                    level: this.form_level,
                    start_at: this.form_startat,
                    end_at: this.form_endat
                }, 'POST');
                if (result.success) {
                    this.plans[index].level = this.form_level;
                    this.plans[index].title = this.form_title;
                    this.plans[index].content = this.form_content;
                    this.plans[index].start_at = this.form_startat;
                    this.plans[index].end_at = this.form_endat;
                }
            } else{
                // 新建
                result = await request('api_note_post_item.php', {
                    item_id: 0,
                    title: this.form_title,
                    content: this.form_content,
                    level: this.form_level,
                    start_at: this.form_startat,
                    end_at: this.form_endat
                }, 'POST');
                // console.log(result);

                if (result.success) {
                    this.plans.unshift({
                        item_id: result.item_id, // 后台返回
                        is_new: true,
                        level: this.form_level,
                        title: this.form_title,
                        content: this.form_content,
                        start_at: this.form_startat,
                        end_at: this.form_endat,
                        created_at: result.created_at // 后台返回
                    });
                }
                
            }
            
            if (result.success) {
                setTimeout(() => {
                    layer.close(loadingPop);
                    layer.alert(
                        '计划保存成功！',
                        function(index) {
                            layer.close(index);
                            setTimeout(() => {
                                self.closeForm();
                            }, 100);
                        }
                    );
                }, 1000);
            } else {
                setTimeout(() => {
                    layer.close(loadingPop);
                    layer.alert(
                        result.msg,
                        function(index) {
                            layer.close(index);
                        }
                    );
                }, 1000);
            }
            
        },
        openEditor(plan, index) {
            this.showEditor = true;
            this.form_id = parseInt(plan.item_id);
            this.form_level = parseInt(plan.level);
            this.form_title = plan.title;
            this.form_content = plan.content;
            this.form_startat = plan.start_at;
            this.form_endat = plan.end_at;
            this.form_plans_index = index;
        },
        // 恢复计划
        async reBackPlan(itemId, event) {
            let popRes = await layerConfirm('确定要恢复此计划到“待实现”状态吗？');
            if (!popRes) {
                return;
            }
            let self = this;
            let $tr = $(event.target).parents('tr');
            this.showDeling = true;
            let result = await request('api_note_complete_item.php', {
                item_id: itemId,
                complete: PLAN_WAIT_OK
            }, 'POST');
            if (result.success) {
                setTimeout(() => {
                    this.showDeling = false;
                    layer.alert('恭喜您，计划已恢复！');
                    $tr.addClass('has-reback');
                }, 1000);
            } else {
                setTimeout(() => {
                    this.showDeling = false;
                    layer.alert(result.msg);
                }, 500);
            }
            
        },
        // 完成计划
        async completePlan(itemId, event) {
            let popRes = await layerConfirm('确定要完成此项计划吗？');
            if (!popRes) {
                return;
            }
            let self = this;
            let $tr = $(event.target).parents('tr');
            this.showDeling = true;
            let result = await request('api_note_complete_item.php', {
                item_id: itemId,
                complete: PLAN_HAS_OK
            }, 'POST');
            if (result.success) {
                setTimeout(() => {
                    this.showDeling = false;
                    layer.alert('恭喜您，计划已完成！');
                    $tr.addClass('has-deal');
                }, 1000);
            } else {
                setTimeout(() => {
                    this.showDeling = false;
                    layer.alert(result.msg);
                }, 500);
            }
            
        },
        async deletePlan(itemId, event) {
            let popRes = await layerConfirm('确定要删除此项计划吗？（删除后不可恢复）');
            if (!popRes) {
                return;
            }
            let self = this;
            let $tr = $(event.target).parents('tr');
            this.showDeling = true;
            // ajax
            let result = await request('api_note_del_item.php', {
                item_id: itemId
            }, 'GET');
            if (result.success) {
                setTimeout(() => {
                    this.showDeling = false;
                    layer.alert('删除成功');
                    $tr.addClass('has-removed');
                }, 1000);
            } else {
                setTimeout(() => {
                    this.showDeling = false;
                    layer.alert(result.msg);
                }, 500);
            }
            
        },
        seePlan(plan) {
            this.show_level = parseInt(plan.level);
            this.show_startat = plan.start_at;
            this.show_endat = plan.end_at;
            this.show_content = replace2Br(plan.content);
            this.show_createdat = plan.created_at;
            this.show_title = plan.title;
            this.showShower = true;
        },
        resetShower() {
            this.show_title = '';
            this.show_content = '';
            this.show_level = DEFAULT_LEVEL;
            this.show_createdat = '';
            this.show_startat = '';
            this.show_endat = '';
        },
        closeShower() {
            this.showShower = false;
            this.resetShower();
        },
        getShowDateTips() {
            const today = moment().format('YYYY年MM月DD日');
            let tips = '';
            let color = '';
            if (this.dowait == PLAN_HAS_OK) {
                return `<font color="gray">今天是${today}</font>`;
            }
            // console.log(this.show_startat, this.show_endat)
            if (!this.show_startat || !this.show_endat) {
                tips = '本计划为长期任务';
                color = 'gray';
            } else {
                const startM = moment(this.show_startat);
                const endM = moment(this.show_endat);
                const todayM = moment();
                switch(true) {
                    // 如果今天在开始日期之前
                    case todayM.isBefore(startM):
                        tips = '计划尚未开始';
                        color = 'gray';
                        break;
                    case todayM.isAfter(endM):
                        tips = '计划已逾期';
                        color = 'red';
                        break;
                    case todayM.isBetween(startM, endM):
                        tips = '计划在进行';
                        color = 'green';
                        break;
                }
            }
            return `<font color="${color}">今天是${today} ${tips}</font>`;
        },
        getStartedDiffDays() {
            if (this.dowait == PLAN_HAS_OK) {
                return '<font color="red">该计划已完成</font>';
            }
            const diffDay = moment().diff(moment(this.show_startat), 'days');
            let str = '';
            if (parseInt(diffDay) > 0) {
                str = `距离您实施计划起 已经过去了 <font color="#17a2b8">${diffDay}</font> 天`;
            } else {
                str = '计划尚未启动';
            }
            return str;
        }
    }
});