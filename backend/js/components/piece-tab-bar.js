define(function(){
    var $tabBar = $('#piece-tab-bar');
    var $nowDate = $tabBar.find('.now-date').eq(0);
    var $text = $tabBar.find('.text').eq(0);
    var $back = $('#back');

    var getNowDate = function() {
        var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var week = now.getDay();

        return year + '年' + month +'月' + day + '日' + '<em>' + weekday[week] + '</em>';
    }

    var mingyan = function() {
        var jitangs = [
            '要做一个谦逊的人。善于倾听。三人行，必有我师。',
            '大多数不开心的人，往往低估了自己所拥有的，又高估了别人所拥有的。',
            '不同的人，为你做同一件事，你会感到天壤之别。因为我们在意的，往往不是人做的事，而只是做事的人。',
            '你越懂事，这世界就让你承受越多与年龄不符的痛苦，你越忍耐，这世界就给你越多需要忍耐的东西。',
            '不要试图去说服对你不敬或者讨厌你的人，你的言语改变不了任何人和事。很多时候，沉默是金不仅仅是种美德，更是种智慧。',
            '觉得自己做的到和不做的到，其实只在一念之间。',
            '滔滔红尘在身边流过，我们只是拥挤的人群之中一粒细微的粉尘，是时光长河里一朵渺小的浪花。',
            '到了一定年龄，便要学会寡言，每一句话都要有用，有重量。喜怒不形于色，大事淡然，有自己的底线。',
            '好的坏的我们都收下吧，然后一声不响，继续生活。',
            '信任是这个世界上最容易失去的东西，也是最难挽回的东西。',
            '人们平白消失，又无故再现，各奔东西，失去对方，相互追寻，最后又在几米开外找到彼此。',
            '只有摆脱过去，才能重获新生，只有自发地突破过去的成功模式，才能释放出更大的潜力。',
            '非淡泊无以明志，非宁静无以致远',
            '所谓成长，就是逼着你一个人，踉踉跄跄的受伤，跌跌撞撞的坚强。',
            '让你难过的事情，总有一天，你一定会笑着说出来。',
            '希望命运善待所有孤勇前行的人，包括她，包括你我。',
            '一个人成熟的标志，是学会狠心，学会独立，学会微笑，学会丢弃不值得的感情。',
            '如果你想要从未拥有过的东西，那么你必须做你从未做过的事。',
            '人生四大悲剧：穷得没钱做坏事，熟得没法做情侣，饿得不知吃什么，困得就是睡不着！',
            '人生路的尽头，仍然是路，只要你愿意走。',
            '越是想知道自己是不是忘记的时候，反而记得越清楚。',
            '活得累是因为心里装了多余的东西，跟吃饱了撑的是一个道理。',
            '那些你以为过不去的坎儿，早晚都会过去，要对时间有耐心。',
            '放不下的时候，多想想对方是怎么放下你的。',
            '经历深了，看到的人和事物不一样，那一定就会成熟一些吧，不会像现在这样，情绪一碰就碎的不行。',
            '成熟的人，不是没有浮躁，而是浮躁的时候，心灵始终不会偏离理性的航道。',
            '终于明白，有些路，只能一个人走，那些约好要同行的人，一起相伴雨季，走过年华，但有一天终究会在某个渡口散失。',
            '何必在乎别人看法，懂你的不用解释，不懂你的无需解释。',
            '没有人会感同身受，他们只是在努力的安慰你的苦痛，然后继续生活。',
            '有时候，我们做过的最艰难的选择，最终成了我们为自己做过的最棒的事。',
            '做好手中事,珍惜眼前人。',
            '如果耐不住寂寞，你就看不到繁华。',
            '少说多做，句句都会得到别人的重视；多说少做，句句都会受到别人的忽视。',
            '每一个成功者都有一个开始。勇于开始，才能找到成功。',
            '玉不啄，不成器；人不学，不知道。——《礼记》',
            '己所不欲，勿施于人。——孔子',
            '在人生道路上谦让三分，就能天宽地阔。——卡内基',
            '志坚者，功名之柱也。登山不以艰险而止，则必臻乎峻岭。',
            '我这个人走得很慢，但是我从不后退。——亚伯拉罕·林肯',
            '所有的胜利，与征服自己的胜利比起来，都是微不足道。',
            '只有把抱怨环境的情绪，化为上进的力量，才是成功的保证。——罗曼·罗兰',
            '沉浸于现实的忙碌之中，没有时间和精力思念过去，成功也就不会太远了。——雷音',
            '善良的人永远是受苦的，那忧苦的重担似乎是与生俱来的，因此只有忍耐。',
            '意志命运往往背道而驰，决心到最后会全部推倒。——莎士比亚',
            '征服自己，就能征服一切。',
            '在别人藐视的事中获得成功，是一件了不起的事，因为它证明不但战胜了自己，也战胜了别人。——蒙特兰',
            '凡是自强不息者，最终都会成功。——歌德',
            '人的才华就如海绵的水，没有外力的挤压，它是绝对流不出来的。流出来后，海绵才能吸收新的源泉。',
            '书痴者文必工，艺痴者技必良。——蒲松龄',
            '少壮不努力，老大徒伤悲。——《汉乐府长歌行》',
            '对于攀登者来说，失掉往昔的足迹并不可惜，迷失了继续前时的方向却很危险。',
            '立身以立学为先，立学以读书为本。——欧阳修',
            '一个有良知而纯洁的人，觉得人生是一件甜美而快乐的事。——列夫·托尔斯泰',
            '崇高的理想就像生长在高山上的鲜花，如果要摘下它，勤奋才能是攀登的绳索。',
            '人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。——海贝尔',
            '生活的道路一旦选定，就要勇敢地走到底，决不回头。——左拉',
            '取得成就时坚持不懈，要比遭到失败时顽强不屈更重要。——拉罗什夫科',
            '同在一个环境中生活，强者与弱者的分界就在于谁能改变它。',
            '创造，或者酝酿未来的创造。这是一种必要性：幸福只能存在于这种必要性得到满足的时候。——罗曼·罗兰',
            '未遭拒绝的成功决不会长久。',
            '成功的秘诀就在于多努力一次。为了成功，你努力了多少次？',
            '唯书籍不朽。——乔特',
            '人生是伟大的宝藏，我晓得从这个宝藏里选取最珍贵的珠宝。——佚名',
            '让珊瑚远离惊涛骇浪的侵蚀吗？那无异是将它们的美丽葬送。',
            '要知道对好事的称颂过于夸大，也会招来人们的反感轻蔑和嫉妒。——培根',
            '过去不等于未来。',
            '学而不思则罔，思而不学则殆。——孔子',
            '遇到困难时不要抱怨，既然改变不了过去，那么就努力改变未来。',
            '读书百遍，其义自见。——《三国志》',
            '人，就像钉子一样，一旦失去了方向，开始向阻力屈身，那么就失去了他们存在的价值。——兰道',
            '用爱心来做事，用感恩的心做人。',
            '成功永远属于那些爱拼搏的人。',
            '决心是成功的开始。',
            '人生是花，而爱便是花的蜜。——雨果',
            '你要对自己负责。虽然你不能改变外部环境不能改变季节不能改变风云，但是你能改变自己。——Jim·Rohn',
            '读书是易事，思索是难事，但两者缺一，便全无用处。——富兰克林',
            '决定一个人的一生，以及整个命运的，只是一瞬之间。——歌德',
            '理论彻底，策略准确。然后以排除万难坚定不移的勇气和精神向前干去，必有成功的一日。——邹韬奋',
            '少而好学，如日出之阳；壮而好学，如日中之光；志而好学，如炳烛之光。——刘向',
            '读万卷书，行万里路。——刘彝',
            '如果把生活比喻为创作的意境，那么阅读就像阳光。——池莉',
            '旧书不厌百回读，熟读精思子自知。——苏轼',
            '如果人只是为了自己而劳动，他也许能成为有名的学者绝顶的聪明人出色的诗人，但他决不可能成为真正的完人和伟人。——马克思',
            '死亡教会人一切，如同考试之后公布的结果――虽然恍然大悟，但为时晚矣！',
            '读不在三更五鼓，功只怕一曝十寒。——郭沫若',
            '唯有行动才能改造命运。',
            '天空黑暗到必须程度，星辰就会熠熠生辉。',
            '读书有三到，谓心到，眼到，口到。——朱熹',
            '书不仅仅是生活，而且是此刻过去和未来文化生活的源泉。——库法耶夫',
            '凡真心尝试助人者，没有不帮到自己的。',
            '最常见的勇气就是在日常生活中做到诚实和正直，能够抵制诱惑，敢于讲真话，表现自己真实的一面，而不要虚伪造作。',
            '人生富贵驹过隙，惟有荣名寿金石。——顾炎武',
            '意志坚强的人能把世界放在手中像泥块一样任意揉捏。——歌德',
            '天才是由于对事业的热爱感而发展起来的，简直能够说天才。',
            '一切节省，归根到底都归结为时间的节省。——马克思',
            '重复别人所说的话，只需要教育；而要挑战别人所说的话，则需要头脑。——玛丽·佩蒂博恩·普尔',
            '人生所贵在知已，四海相逢骨肉亲。——李贺',
            '光说不干，事事落空；又说又干，马到成功。',
            '三军可夺帅也，匹夫不可夺志也。——孔丘',
            '构成天才的决定因素就应是勤奋。——郭沫若',
            '韬略终须建新国，奋发还得读良书。——郭沫若',
            '战士的意志要象礁石一样坚定，战士的性格要像和风一样温柔。',
            '千里之行，始于足下。——老子',
            '既然我已经踏上这条道路，那么，任何东西都不应妨碍我沿着这条路走下去。——康德',
            '希望是人生的乳母。——科策布',
            '兴于《诗》，立于礼，成于乐。——孔子',
            '没有比人更高的山，没有比心更宽的海，人是世界的主宰。',
            '人生像曲曲折折的山涧流水，断了流，却又滚滚而来。——波普',
            '真正的价值并不在人生的舞台上，而在我们扮演的主角中。——席勒',
            '最大的骄傲于最大的自卑都表示心灵的最软弱无力。——斯宾诺莎',
            '生命不可能有两次，但许多人连一次也不善于度过。——吕凯特',
            '学习是劳动，是充满思想的劳动。——乌申斯基',
            '求乐的人生观，才是自然的人生观，真实的人生观。我们就应顺应自然，立在真实上，求得人生的光明，不可陷入勉强虚伪的境界，把真正人生都归幻灭。——李大钊',
            '执着追求和不断的分析，这是走向成功的双翼。不执着，便容易半途而废；不分析，便容易一条道走到天黑。',
            '行动是成功的阶梯，行动越多，登得越高。',
            '故立志者，为学之心也；为学者，立志之事也。——王阳明',
            '要体验人生，就要把握现实，相信现实。——拉蒂特',
            '在人生中第一要紧的是发现自己。为了这个目的，各位时常需要孤独和深思。——南森',
            '人，最大的敌人是自己。',
            '有勇气承担命运这才是英雄好汉。——黑塞',
            '时间就像海绵里的水，只要愿挤，总还是有的。——鲁迅',
            '瀑布对悬崖无可畏惧，所以唱出气势磅礴的生命之歌。',
            '感激每一个新的挑战，因为它会锻造你的意志和品格。——佚名',
            '先相信自己，然后别人才会相信你。——罗曼·罗兰',
            '读书之法，在循序而渐进，熟读而精思。——朱熹',
            '真的算得勇敢的人是那个最了解人生的幸福和灾患，然后勇往直前，担当起将来会发生的事故的人。——伯利克里',
            '书卷多情似故人，晨昏忧乐每相亲。——于谦',
            '太阳虽有黑点，却在奋力燃烧中树立了光辉的形象。',
            '在无限的时间的河流里，人生仅仅是微小又微小的波浪。——郭小川',
            '最具挑战性的挑战莫过于提升自我。——迈克尔·F·斯特利',
            '有勇气在自己生活中尝试解决人生新问题的人，正是那些使社会臻于伟大的人！那些仅仅循规蹈矩过活的人，并不是在使社会进步，只是在使社会得以维持下去。——泰戈尔',
            '必须记住我们学习的时间是有限的。时间有限，不只由于人生短促，更由于人事纷繁。我们就应力求把我们所有的时间用去做最有益的事情。——斯宾塞',
            '在茫茫沙漠，唯有前时进的脚步才是希望的象征。',
            '人生是一座能够采掘开拓的金矿，但总是因为人们的勤奋程度不一样，给予人们的回报也不相同。——佚名',
            '读书忌死读，死读钻牛角。——叶圣陶',
            '阅读的最大理由是想摆脱平庸，早一天就多一份人生的精彩；迟一天就多一天平庸的困扰。——余秋雨',
            '读书有三到，谓心到，眼到，口到。——朱熹',
            '下定决心必须要，才是成功的关键。',
            '卓越的人一大优点是：在不利与艰难的遭遇里百折不饶。——贝多芬',
            '没有失败，只有暂时停止的成功。',
            '无知识的人，其生命如同无叶子的树，缺少勃勃生机。——佚名',
            '人生有情泪沾衣，江水江花岂终极。——杜甫',
            '人若软弱就是自己最大的敌人；人若勇敢就是自己最好的朋友。',
            '谁和我一样用功，谁就会和我一样成功。——莫扎特',
            '我们若已理解最坏的，就再没有什么损失。——卡耐基',
            '黑发不知勤学早，白发方悔读书迟。——颜真卿',
            '她们把自己恋爱作为终极目标，有了爱人便什么都不要了，对社会作不了贡献，人生价值最少。——向警予',
            '读一切好书，就是和许多高尚的人谈话。——笛卡儿',
            '理想的人物不仅仅要在物质需要的满足上，还要在精神旨趣的满足上得到表现。——黑格尔',
            '知之者不如好之者，好之者不如乐之者。——孔子',
            '读书破万卷，下笔如有神。——杜甫',
            '对一个人来说，所期望的不是别的，而仅仅是他能全力以赴和献身于一种完美事业。——爱因斯坦',
            '人生有两出杯具。一是万念俱灰；另一是踌躇满志。——萧伯纳',
            '父亲问我人生有什么追求？我回答金钱和美女，父亲凶狠的打了我的脸；我回答事业与爱情，父亲赞赏的摸了我的头。',
            '所谓成功，就是在平凡中做出不平凡的坚持。',
            '所谓恶人，无论有过多么善良的过去，也已滑向堕落的道路而消逝其善良性；所谓善人，即使有过道德上不堪提及的过去，但他还是向着善良前进的人。——杜威',
            '自己打败自己是最可悲的失败，自己战胜自己是最可贵的胜利。',
            '一个人，只要知道付出爱与关心，她内心自然会被爱与关心充满。',
            '天下之事常成于困约，而败于奢靡。——陆游',
            '自己的饭量自己知道。——苏联',
            '没有斗争就没有功绩，没有功绩就没有奖赏，而没有行动就没有生活。——别林斯基',
            '读一本好书，就如同和一个高尚的人在交谈。——歌德',
            '过去一切时代的精华尽在书中。——卡莱尔',
            '活着，要有自己的价值，要作为一个强者存在于这个世界。——夏宁',
            '读一读关于人生真谛的描述，这对他摆脱他那落后于时代的老顽固思想是会有好处的。——奥尼尔',
            '真正伟大的人，是由行动使他人见识其不凡之处。',
            '书犹药也，善读之能够医愚。——刘向',
            '成功者绝不给自己软弱的借口。',
            '生活不是局限于人类追求自己的实际目标所进行的日常行动，而是显示了人类参加到一种宇宙韵律中来，这种韵律以形形色色的方式证明其自身的存在。——泰戈尔',
            '意志是一个强壮的盲人，倚靠在明眼的跛子肩上。——叔本华',
            '读过一本好书，像交了一个益友。——藏克家',
            '不要回避苦恼和困难，挺起身来向它挑战，进而克服它。——池田大作',
            '只有永远躺在泥坑里的人，才不会再掉进坑里。——黑格尔',
            '阅读一切好书如同和过去最杰出的人谈话。——笛卡儿',
            '只要有信心，人永远不会挫败。',
            '遇到困难时不要放弃，要记住，坚持到底就是胜利。',
            '生命不等于是呼吸，生命是活动。——卢梭',
            '志不立，天下无可成之事。',
            '学习需要有计划。',
            '志在峰巅的攀登者，不会陶醉在沿途的某个脚印之中。',
            '目标的坚定是性格中最必要的力量源泉之一，也是成功的利器之一。没有它，天才会在矛盾无定的迷径中徒劳无功。',
            '人之所以能，是相信能。',
            '人生用物，各有天限；夏涝太多，必有秋旱。——许名奎',
            '自己打败自己的远远多于比别人打败的。',
            '瀑布跨过险峻陡壁时，才显得格外雄伟壮观。',
            '成功的秘诀，是在养成迅速去做的习惯，要趁着潮水涨得最高的一刹那，不但没有阻力，而且能帮忙你迅速地成功。——劳伦斯',
            '人生是短暂的，每个人都有一个一生，不会再多。——李尔克',
            '不要抱怨自己所处的环境，如果改变不了环境，那么就改变自己的心态。',
            '内外相应，言行相称。——韩非',
            '用最少的悔恨应对过去；用最少的浪费应对此刻；用最多的梦想应对未来。',
            '整个人生就是思想与劳动，劳动虽然是无闻的平凡的，却是不能间断的。——冈察洛夫',
            '读书是在别人思想的帮忙下，建立起自己的思想。——鲁巴金',
            '努力是成功之母。——塞万提斯',
            '发奋识遍天下字，立志读尽人间书。——苏轼',
            '最灵繁的人也看不见自己的背脊。——非洲',
            '自己活着，就是为了使别人过得更完美。——雷锋',
            '实现梦想比睡在床上的梦想更灿烂。',
            '懒人无法享受休息之乐。——拉布克',
            '学到很多东西的诀窍，就是一下子不要学很多。——洛克',
            '只有具备真才实学，既了解自己的力量又善于适当而谨慎地使用自己力量的人，才能在世俗事务中获得成功。——歌德',
            '人不能创造时机，但是它能够抓住那些已经出现的时机。',
            '今日应做的.事没有做，明天再早也是耽误了。——裴斯泰洛齐',
            '雄心壮志是茫茫黑夜中的北斗星。',
            '业精于勤，荒于嬉；行成于思，毁于随。——韩愈',
            '莫等闲，白了少年头，空悲切。——岳飞',
            '坚持意志伟大的事业需要始终不渝的精神。——伏尔泰',
            '业余生活要有好处，不要越轨。——华盛顿',
            '只有在人群中间，才能认识自己。——德国',
            '非淡泊无以明志，非宁静无以致远。——诸葛亮',
            '我的努力求学没有得到别的好处，只但是是愈来愈发觉自己的无知。——笛卡儿',
            '成功的道路上充满荆棘，苦战方能成功。',
            '合理安排时间，就等于节约时间。——培根',
            '只要功夫深，铁杵磨成针。',
            '理解挑战，就能够享受胜利的喜悦。——杰纳勒尔·乔治·S·巴顿',
            '阅读使人充实，会谈使人敏捷，写作使人精确。——培根',
            '自知之明是最难得的知识。——西班牙',
            '谁不向前看，谁就会面临许多困难。',
            '不怕读得少，只怕记不牢。——徐特立',
            '越是无能的人，越喜欢挑剔别人的错儿。——爱尔兰',
            '共同的事业，共同的斗争，能够使人们产生忍受一切的力量。——奥斯特洛夫斯基',
            '奇文共欣赏，疑义相如析。——陶渊明',
            '书到用时方恨少，事非经过不知难。——陆游',
            '谁若游戏人生，他就一事无成；谁不主宰自己，永远是一个奴隶。——歌德',
            '路漫漫其修道远，吾将上下而求索。——屈原',
            '要使民族自立于世界之林，就要自己看得起自己。——吉鸿昌',
            '我们唯一不会改正的缺点是软弱。——拉罗什福科',
            '当你能飞的时候就不要放弃飞；当你有梦的时候就不要放弃梦。',
            '学问是异常珍贵的东西，从任何源泉吸收都不可耻。——阿卜·日·法拉兹',
            '苦难与幸福一样，都是生命盛开的花朵。',
            '问渠那得清如许，为有源头活水来。——朱熹',
            '越是没有本领的就越加自命不凡。——邓拓',
            '自己的鞋子，自己知道紧在哪里。——西班牙',
            '非学无以广才，非志无以成学。——诸葛亮',
            '熟读唐诗三百首，不会作诗也会吟。——孙洙《唐诗三百首序》',
            '人生如音乐，要用听觉感情和本能谱成，不能只凭规律。——Samuel·Butlev',
            '人的一生是短的，但如果卑劣地过这一生，就太长了。——莎士比亚',
            '资料充实的生命就是长久的生命，我们要以此为而不是以时间来衡量生命。——塞涅卡',
            '奋斗令我们的生活充满生机，职责让我们的生命充满好处，常遇困境说明你在进步，常有压力，说明你有目标。',
            '目标再远大，终离不开信念去支撑。',
            '即使行动导致错误，却也带来了学习与成长；不行动则是停滞与萎缩。',
            '成功的信念在人脑中的作用就如闹钟，会在你需要时将你唤醒。',
            '深窥自己的心，而后发觉一切的奇迹在你自己。——培根',
            '我们关心的，不是你是否失败了，而是你对失败能否无怨。——林肯',
            '人要有足够的压力，才能超越颠峰。',
            '炫耀是需要观众的，而炫耀恰恰让我们失去观众。',
            '人生无论在极坏的时候或是最好的时候，总是美的，而且向来是美的。——德莱塞',
            '说话不在多，在于说得对，说中了事和理的要害，能打动听者的心。——谢觉哉',
            '所谓高质量人生，其实就是平衡不断遭到破坏和重建。——赵鑫珊',
            '人生的价值，并不是用时间，而是用深度去衡量的。——列夫·托尔斯泰',
            '一个真正的人，就应为人民用尽自己的才智，专长和精力，再离开人间。不然，他总会感受到遗憾，浪费了有限的生命。——曹禺',
            '书籍把我们引入最完美的社会，使我们认识各个时代的伟大智者。——史美尔斯',
            '士搏出惊涛骇流而不沉沦，懦夫在风平浪静也会溺水。',
            '问渠哪得清如许，为有源头活水来。——朱熹',
            '自卑是剪了双翼的飞鸟，难上青天，这两者都是成才的大忌。',
            '不要生气要争气，不要看破要突破，不要嫉妒要欣赏，不要拖延要积极，不要心动要行动。',
            '少说多做，句句都会得到别人的重视；多说少做，句句都会受到别人的忽视。',
            '做好手中事，珍惜眼前人。',
            '寒冷到了极致时，太阳就要光临。',
            '微笑比皱眉好看，请求比呵斥自然。',
            '还能冲动，表示你还对生活有激情，总是冲动，表示你还不懂生活。',
            '成功在优点的发挥，失败是缺点的累积。',
            '强者向人们揭示的是确认人生的价值，弱者向人们揭示的却是对人生的怀疑。',
            '每个人的一生都有许多梦想，但如果其中一个不断搅扰着你，剩下的就仅仅是行动了。',
            '学而不思则罔，思而不学则殆。——孔子'
        ];
        let len = jitangs.length;
        let num = Math.floor(Math.random() * len);
        return jitangs[num];
    }

    var goback = function() {
        $back.on('click', function() {
            window.history.go(-1);
        });
    }

    var init = function() {
        var today = getNowDate();
        var text = mingyan();
        $nowDate.html(today);
        $text.html(text);
        goback();
    }
    
    return {
        init: init
    };
})