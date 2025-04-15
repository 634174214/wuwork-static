const DAY_MODE = 1;
const WEEK_MODE = 2;

const ITEM_DAY = 1;
const ITEM_WEEK = 2;
const ITEM_NEXT_WEEK = 4;
const ITEM_TOMORROW = 3;

const Vm = new Vue({
    el: '#app',
    data() {
        return {
            dailyHead: data.daily.head,
            dailyList: data.daily.list,
            weekHead: data.week.head,
            weekList: data.week.list,
            tomorrowHead: data.tomorrow.head,
            tomorrowList: data.tomorrow.list,
            nextWeekHead: data.next_week.head,
            nextWeekList: data.next_week.list,
            current: 0,
            finalJsonStr: '',
            dailyDay: data.daily_day,
            weekArea: week_area,
            showCustomWeekArea: false,
            showDeling: false,
            showWaiting: true,
            showPastDayList: false,
            showPastWeekList: false,
            // 昨日工作
            pastDayList: [],
            // 上周工作
            pastWeekList: []
        };
    },
    created() {
        this.current = data.mode;
    },
    mounted() {
        setTimeout(() => {
            this.showWaiting = false;
        }, 400);
    },
    computed: {
        // 负责循环的列表
        pastList() {
            if (this.current == DAY_MODE) {
                return this.pastDayList;
            }
            if (this.current == WEEK_MODE) {
                return this.pastWeekList;
            }
            return [];
        },
        finalJsonStr() {
            const json = JSON.stringify(data);
            // console.log(json)
            return JSON.stringify(data);
        },
        iframeSrc() {
            return `select-month.php?start=${week_start}&end=${week_end}`;
        },
        pastDayHtml() {
            let el = '';
            if (this.showPastDayList) {
                el = '<i class="fa fa-close"></i> 关闭今日待办事项';
            } else {
                el = '<i class="fa fa-bookmark-o"></i> 查看今日待办事项';
            }
            return el;
        },
        pastWeekHtml() {
            let el = '';
            if (this.showPastWeekList) {
                el = '<i class="fa fa-close"></i> 关闭本周待办事项';
            } else {
                el = '<i class="fa fa-bookmark"></i> 查看本周待办事项';
            }
            return el;
        },
        pastTitleText() {
            let text = '';
            if (this.current == DAY_MODE) {
                text = '今日待办：';
            }
            if (this.current == WEEK_MODE) {
                text = '本周待办：';
            }
            return text;
        }
    },
    methods: {
        async togglePastPanel() {
            if (this.current == DAY_MODE) {
                this.showPastDayList = !this.showPastDayList;
                if (this.pastDayList.length <= 0) {
                    this.pastDayList = await this.getPastList('day');
                }
            }
            if (this.current == WEEK_MODE) {
                this.showPastWeekList = !this.showPastWeekList;
                if (this.pastWeekList.length <= 0) {
                    this.pastWeekList = await this.getPastList('week');
                }
            }
        },
        getPastList(type) {
            return new Promise((resolve, reject) => {
                axios.get('./api_get_past_items.php', {
                    params: {
                        type: type,
                        date: this.dailyDay
                    }
                })
                .then((res) => {
                    const response = res.data;
                    if (response.code == 0) {
                        return resolve(response.data);
                    } else {
                        return reject([]);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    reject([]);
                });
            });
        },
        copyPastText(text, event) {
            copyText(event.target, text, event);
            // copyText(text);
        },
        getWeekDay(day) {
            var dt = new Date(day);
            var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            var week = dt.getDay();
            return weekDay[dt.getDay()];
        },
        toggleWeekarea() {
            this.showCustomWeekArea = !this.showCustomWeekArea;
        },
        toggleAddMonth(dayIndex) {
            const addMonth = this.dailyList[dayIndex].add_month;
            const newval = addMonth == 1 ? 0 : 1;
            this.dailyList[dayIndex].add_month = newval;
        },
        toggleWeekModeHeader() {
            const headerTop = document.getElementById('header-top');
            if (this.current == WEEK_MODE) {
                headerTop.classList.add('open-week-mode');
            } else {
                headerTop.classList.remove('open-week-mode');
            }
        },
        toggleMode(mode) {
            if (this.current == mode) {
                return;
            }
            this.current = mode;
            // 切换的时候 让待办板块关闭
            this.showPastWeekList = false;
            this.showPastDayList = false;
        },
        submitForm(event) {
            if (this.current === DAY_MODE &&
                this.dailyList.length <= 0
            ) {
                window.alert('日报模式下，日报不能为空');
                event.preventDefault();
                return false;
            }

            if (this.current === WEEK_MODE &&
                (this.dailyList.length <= 0 ||
                this.weekList.length <= 0)
            ) {
                window.alert('周报模式下，日报、周报不能为空');
                event.preventDefault();
                return false;
            }

            let dataObj = {
                daily : {
                    head: this.dailyHead,
                    list: this.dailyList
                },
                week: {
                    // 周报模式下 需要再拼接上周区间
                    head: this.current == WEEK_MODE ? `${this.weekArea}` : '',
                    list: this.weekList
                },
                tomorrow: {
                    head: this.tomorrowHead,
                    list: this.tomorrowList
                },
                next_week: {
                    head: this.nextWeekHead,
                    list: this.nextWeekList
                }
            };
            // 匹配日报输入框中的日期
            this.dailyDay = this.getDailyDay();

            const json = JSON.stringify(dataObj);
            this.finalJsonStr = json;
// console.log(this.weekArea)
            // console.log(this.finalJsonStr)
            // event.preventDefault();
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
        getDailyDay() {
            const date = this.dailyHead.match(/[\d]{4}-[\d]{2}-[\d]{2}/g);
            return date[0];
        },
        togglePublic(type, index) {
            switch(type) {
                case 'd':
                    this.dailyList[index]['public'] = (this.dailyList[index]['public'] == 1) ? 0 : 1;
                    // console.log(this.dailyList[index]['public'])
                    break;
                case 'w':
                    this.weekList[index]['public'] = this.weekList[index]['public'] == 1 ? 0 : 1;
                    break;
                case 't':
                    this.tomorrowList[index]['public'] = this.tomorrowList[index]['public'] == 1 ? 0 : 1;
                    break;
                case 'nw':
                    this.nextWeekList[index]['public'] = this.nextWeekList[index]['public'] == 1 ? 0 : 1;
                    break;
            }
        },
        inputFocus(len, label) {
            const idstr = `${label}-input-${len}`;
            this.$nextTick(() => {
                const inputel = document.getElementById(idstr);
                // console.log(idstr, inputel)
                inputel.focus();
            });
        },
        addInput(type) {
            let label = '';
            let len = 0;
            switch(type) {
                case 'd':
                    this.dailyList.push({
                        item_id: 0,
                        text: '',
                        public: 1,
                        item_mode: ITEM_DAY,
                        add_month: 0
                    });
                    label = 'daily';
                    len = this.dailyList.length - 1;
                    break;
                case 'w':
                    this.weekList.push({
                        item_id: 0,
                        text: '',
                        public: 1,
                        item_mode: ITEM_WEEK,
                        add_month: 0
                    });
                    label = 'week';
                    len = this.weekList.length - 1;
                    break;
                case 't':
                    this.tomorrowList.push({
                        item_id: 0,
                        text: '',
                        public: 1,
                        item_mode: ITEM_TOMORROW,
                        add_month: 0
                    });
                    label = 'tomorrow';
                    len = this.tomorrowList.length - 1;
                    break;
                case 'nw':
                    this.nextWeekList.push({
                        item_id: 0,
                        text: '',
                        public: 1,
                        item_mode: ITEM_NEXT_WEEK,
                        add_month: 0
                    });
                    label = 'nextWeek';
                    len = this.nextWeekList.length - 1;
                    break;
            }
            this.inputFocus(len, label);
        },
        updateList(type, index, event) {
            const val = event.target.value;
            switch(type) {
                case 'd':
                    this.dailyList[index]['text'] = val;
                    break;
                case 'w':
                    this.weekList[index]['text'] = val;
                    break;
                case 't':
                    this.tomorrowList[index]['text'] = val;
                    break;
                case 'nw':
                    this.nextWeekList[index]['text'] = val;
                    break;
            }
        },
        async deleteInput(type, index) {
            this.showDeling = true;
            // console.log(this.showDeling)
            let obj = {};
            let success = true;
            switch(type) {
                case 'd':
                    obj = this.dailyList[index];
                    success = await this.deleteItem(obj.item_id);
                    if (success) {
                        this.dailyList.splice(index, 1);
                    }                    break;
                case 'w':
                    obj = this.weekList[index];
                    success = await this.deleteItem(obj.item_id);
                    if (success) {
                        this.weekList.splice(index, 1);
                    }
                    break;
                case 't':
                    obj = this.tomorrowList[index];
                    success = await this.deleteItem(obj.item_id);
                    if (success) {
                        this.tomorrowList.splice(index, 1);
                    }
                    break;
                case 'nw':
                    obj = this.nextWeekList[index];
                    success = await this.deleteItem(obj.item_id);
                    if (success) {
                        this.nextWeekList.splice(index, 1);
                    }
                    this.nextWeekList.splice(index, 1);
                    break;
            }
            this.showDeling = false;
        },
        deleteItem(item_id) {

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // 如果ID不存在证明是新建 或者 item_id为0证明是新创建的 也不发请求
                    if (!ID || item_id === 0) {
                        resolve(true);
                        return;
                    }
                    axios.get('./api_del_items.php', {
                        params: {
                            id: ID,
                            item_id: item_id
                        }
                    })
                    .then((res) => {
                        const response = res.data;
                        if (response.code == 0) {
                            resolve(true);
                        } else {
                            window.alert(response.msg);
                            // 不成功 隐藏弹窗
                            this.showDeling = false;                        reject(false);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        this.showDeling = false;
                        console.log(err);
                        reject(false);
                    });
                }, 500);
            });
        },
        resetHead(str) {
            switch(str) {
                case 'd':
                    this.dailyHead = `${HEAD_DAY} | ${today}`;
                    break;
                case 'w':
                    this.weekHead = `${HEAD_WEEK} | ${week_area}`;
                    break;
                case 't':
                    this.torrowHead = `${HEAD_NEXT_DAY}`;
                    break;
                case 'nw':
                    this.nextWeekHead = `${HEAD_NEXT_WEEK}`;
            }
        }
    },
    watch: {
        current(newval, oldval) {
            if (newval != oldval) {
                this.toggleWeekModeHeader();
            }
        }
    }
})