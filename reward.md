---
layout: simple
title: "抽奖"
description: "幸运大抽奖"
header-img: "img/green.png"
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>抽奖</title>
    <link href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <style>
        #view {
            position: fixed;
            left: 50%;
            top: 40%;
            z-index: 10001;
            -webkit-transform: translate3d(-50%, -50%, 0);
            -ms-transform: translate3d(-50%, -50%, 0);
            -o-transform: translate3d(-50%, -50%, 0);
            transform: translate3d(-50%, -50%, 0);
            font-size: 128px;
        }

        #choujiang {
            position: fixed;
            top: 80%;
            left: 50%;
            font-size: 64px;
            -webkit-transform: translate3d(-50%, -50%, 0);
            -ms-transform: translate3d(-50%, -50%, 0);
            -o-transform: translate3d(-50%, -50%, 0);
            transform: translate3d(-50%, -50%, 0);
        }
        
        table {
            width: 500px;
        }

        td {
            list-style: none;
            border: 1px solid #999;
            margin-right: -1px;
            margin-bottom: -1px;
            padding: 0 10px;
            text-align: center;
            height: 48px;
        }

        td:nth-child(1) {
            width: 80px;
        }

        td:nth-child(2) {
            /*width: 160px;*/
            text-align: left;
        }

        td:nth-child(3) {
            width: 80px;
        }

        td:nth-child(4) {
            width: 80px;
        }

        #grid input {
            margin-right: 10px;
        }

        #numberForm {
            max-width: 480px;
        }

        #view ul {
            padding-left: 0;
            display: flex;
            flex-wrap: wrap;
        }

        #view li {
            list-style: none;
            font-size: 64px;
            line-height: 2;
            padding: 10px 30px;
            box-sizing: border-box;
            width: 50%;
            text-align: center;
        }
    </style>
</head>
<body>
    
    <div id="page-prize-draw">
        <div class="menu">
            <a href="javascript:void(0)" data-page="#page-customer-list" class="menu-item">抽奖人员管理</a>
        </div>
        <div id="view">幸运大抽奖</div>
        <div class="control">
            <button class="btn" id="choujiang">开始</button>
        </div>
    </div>
    <div id="page-customer-list" style="display: none">
        <ul class="nav">
            <li class="nav-item"><a class="nav-link" data-page="#page-prize-draw" href="javascript:void(0)">继续抽奖</a></li>
            <li class="nav-item"><a class="nav-link active" data-filter href="javascript:void(0)">所有人员</a></li>
            <li class="nav-item"><a class="nav-link" data-filter="attendance" href="javascript:void(0)">签到人员</a></li>
            <li class="nav-item"><a class="nav-link" data-filter="unattendance" href="javascript:void(0)">未签到人员</a></li>
            <li class="nav-item"><a class="nav-link" data-filter="readreward" href="javascript:void(0)">可以奖人员</a></li>
            <li class="nav-item"><a class="nav-link" data-filter="reward" href="javascript:void(0)">中奖人员</a></li>
            <li class="nav-item"><a class="nav-link" data-page="#page-reward-number" href="javascript:void(0)">设置抽奖人数</a></li>
            <li class="nav-item"><a class="nav-link" data-page="#page-customer-input" href="javascript:void(0)">导入数据</a></li>
        </ul>
        <div id="content">
            <table>
                <thead>
                    <tr>
                        <td>序号</td>
                        <td>名称</td>
                        <td>签到</td>
                        <td>中奖</td>
                    </tr>
                </thead>
                <tbody id="grid">
                    
                </tbody>
            </table>
        </div>
    </div>
    <div id="page-customer-input" style="display: none">
        <p>请把cvs文件数据复制到下面的输入框中</p>
        <textarea name="file" id="file-context" cols="80" rows="20">1;林少群
2;黄明德
3;黄群英
4;骆丽嫦
5;葛光辉
6;程玉儿
7;彭致容
8;蒋云莲
9;方芳
10;温秀明
11;麦爱文
12;李梓贤
13;林明华
14;谭笑冰
15;孔佩霞
16;简丽群
17;贺凤晓
18;李永好
19;黄洁冰
20;曾丽芬
21;谷晓丹
22;洪冠华
23;苏翊
24;欧雪芬
25;陈远金
26;余广生
27;魏春秀
28;文瑞兰
29;卢燕霞
30;李广英
31;林婉
32;叶明怡
33;梁美娟
34;曾敏娟
35;何健贞
36;林钻仪
37;林金清
38;梁洁玲
39;周红霞
40;朱辛容
41;梁琛仪
42;阮丽华
43;李冰
44;梁赛平
45;化妆师
46;魔术师
47;魔术师助手
48;黄少凤
49;黄萍
50;胡健芬
51;谭卫东
52;吴育嫦
53;司徒小川
54;刘丽艳
55;罗志强
56;周兰香
57;李浩天
58;黄火成
59;王凤英
60;陈练
61;陶云峰
62;任海鹰
63;曲效直
64;曲效直
65;莫柱东
66;朱鼎良
67;王洪霞
68;区慧仪
69;张岩
70;白广勇
71;杨代弟
72;陈坚
73;李少玲
74;胡宝玲
75;陈健照
76;黄慈慧
77;温淑雯
78;岑仙喜
79;谭楚倩
80;吴健伶
81;周桥发
82; 李文峰
83;江汀
84;叶鸿
85;徐_杰
86;张钰滨
87;李德成
88;周国亮
89;姚梦冬
90;蒋晓红
91;梁志雄
92;陈惠娴
93;苏泳
94;李雪珍
95;张丽华
96;周光临
97;陈炽康
98;黄智
99;黄玉娜
100;武立斌
101;陈广新
102;李千真
103;关卫
104;戚剑辉 
105;汤宗岳
106;王敏杰
107;沈本眉
108;钟惠明
109;陈仲文
110;王志强
111;许国强
112;杨国斌
113;岑宝炽
114;黄湛群
115;陶志强
116;袁绮琴
117;刘忠明
118;郑文荣
119;包杰
120;曾超林
121;杜爱平
122;伍巧儿
123;冯爱莲
124;徐东升
125;黎小坚
126;赵雪梅
127;马嘉喜
128;林国_
129;朱景欣
130;邓嘉靖
131;林燕旋
132;杨晨豪
133;李翔
134;刘洪伟
135;陈小文</textarea><br/>
        <button type="button" class="btn btn-primary" id="input-data">导入</button>
        <a class="btn btn-secondary" data-page="#page-customer-list" href="javascript:void(0)">返回管理</a>
    </div>
    <div id="page-reward-number" style="display: none">
        <p>请按顺序填写抽奖人数，不填默认为1</p>
        <form id="numberForm" action="javascript:void(0)">
            <div class="form-group row">
                <label class="col-3" for="inputNumber1">第一次</label>
                <input type="number" class="form-control col-9" id="inputNumber1" name="number[]">
            </div>
            <div class="form-group row">
                <label class="col-3" for="inputNumber2">第二次</label>
                <input type="number" class="form-control col-9" id="inputNumber2" name="number[]">
            </div>
            <div class="form-group row">
                <label class="col-3" for="inputNumber3">第三次</label>
                <input type="number" class="form-control col-9" id="inputNumber3" name="number[]">
            </div>
            <div class="form-group row">
                <label class="col-3" for="inputNumber4">第四次</label>
                <input type="number" class="form-control col-9" id="inputNumber4" name="number[]">
            </div>
            <div class="form-group row">
                <label class="col-3" for="inputNumber5">第五次</label>
                <input type="number" class="form-control col-9" id="inputNumber5" name="number[]">
            </div>
            <div class="form-group row">
                <label class="col-3" for="inputNumber6">第六次</label>
                <input type="number" class="form-control col-9" id="inputNumber6" name="number[]">
            </div>
            <div class="form-group row">
                <label class="col-3" for="inputNumber7">第七次</label>
                <input type="number" class="form-control col-9" id="inputNumber7" name="number[]">
            </div>
            <div class="form-group row">
                <label class="col-3" for="inputNumber8">第八次</label>
                <input type="number" class="form-control col-9" id="inputNumber8" name="number[]">
            </div>
            <div class="form-group row">
                <label class="col-3" for="inputNumber9">第九次</label>
                <input type="number" class="form-control col-9" id="inputNumber9" name="number[]">
            </div>
        </form>
        <button type="button" class="btn btn-primary" id="input-number">确认</button>
        <a class="btn btn-secondary" data-page="#page-customer-list" href="javascript:void(0)">返回管理</a>
    </div>
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="//guanhuahong.github.io/js/cj.js"></script>
<script>
    $('#input-data').on('click', inputData);
    $('#input-number').on('click', inputNumber);
    var customPage = $('#page-prize-draw');
    var _pageInitCallback = {
        '#page-reward-number': initRewardNumber,
        '#page-customer-list': initList,
    }
    $('a[data-page]').on('click', function() {
        var nextPage = $(this).data('page');
        customPage.hide();
        if (_pageInitCallback[nextPage]) {
            _pageInitCallback[nextPage]($(nextPage), customPage)
        }
        $(nextPage).show();
        customPage = $(nextPage);
    })
    var view = document.getElementById('view');
    var button = document.getElementById('choujiang');

    function inputData(event) {
        players.reset()
        var fileContext = $('#file-context').val();
        var rows = fileContext.split('\n');
        rows.map(function(rowStr, index) {
            var row = rowStr.split(';');

            players.addPlayer(parseInt(row[0]), row[1])
        })

        players.save()

        if (players.getPlayers().length > 0) {
            alert('导入成功')
        } else {
            alert('代入失败，请检查数据，必须第一列是ID，第二列是名称')
        }
    }

    var _rewardTimes = [];
    var __CACHE_REWARD_TIMES__ = '__CACHE_REWARD_TIMES__'
    loadRewardTimers()
    
    function saveRewardTimers() {
        if (window.localStorage) {
            window.localStorage.setItem(__CACHE_REWARD_TIMES__, JSON.stringify(_rewardTimes))
        }
    }

    function loadRewardTimers() {
        if (window.localStorage) {
            var cache = window.localStorage.getItem(__CACHE_REWARD_TIMES__)
            if (cache) {
                _rewardTimes = JSON.parse(cache)
            }
        }
    }
    function inputNumber(event) {
        var inputForm = document.getElementById('numberForm');
        [].map.call(inputForm['number[]'], function(input, index) {
            _rewardTimes[index] = parseInt(input.value) > 0 ? parseInt(input.value) : 1;
        });
        console.log(_rewardTimes);
        if (_rewardTimes.length > 0) {
            saveRewardTimers()
            alert('修改成功')
        } else {
            alert('修改失败')
        }
    }

    function initRewardNumber(nextPage, currentPage) {
        var inputForm = document.getElementById('numberForm');
        [].map.call(inputForm['number[]'], function(input, index) {
            input.value = _rewardTimes[index] > 0 ? _rewardTimes[index] : 1;
            input.onfocus = function() { this.select() }
        })
    }

    function initList(nextPage, currentPage) {
        render(players.getPlayers())
    }


    function Players() {
        this.list = []
        this.isUpdate = false
    }

    var __CACHE_PLAYER_LIST__ = '__CACHE_PLAYER_LIST__';

    Players.prototype = {
        getPlayersByAttendance: function() {
            return this.list.filter(function(item, index) {
                return item.attendance === 1
            })
        },

        getPlayersByUnattendance: function() {
            return this.list.filter(function(item, index) {
                return item.attendance === 0
            })
        },

        getPlayersByReward: function() {
            return this.list.filter(function(item, index) {
                return item.reward === 1
            })
        },


        getPlayersByReadReward: function() {
            return this.list.filter(function(item, index) {
                return item.attendance === 1 && item.reward === 0
            })
        },

        addPlayer: function(id, name) {
            return this.list.push({ id: id, name: name, attendance: 0, reward: 0, rt: 0 })
        },

        getPlayers: function() {
            return this.list;
        },

        getPlayerById: function(id) {
            return this.list.find(function(item) { return item.id === id })
        },

        reset: function() {
            this.list = []
            this.isUpdate = false
            return this
        },

        load: function() {
            if (window.localStorage) {
                var cache = window.localStorage.getItem(__CACHE_PLAYER_LIST__)
                if (cache) {
                    this.list = JSON.parse(cache)
                    return this
                }
            }
            this.list = []
            return this
        },

        save: function() {
            if (window.localStorage) {
                window.localStorage.setItem(__CACHE_PLAYER_LIST__, JSON.stringify(this.list))
            }

            return this
        }
    } 

    var players = new Players();
    players.load();

    

    var actions = {
        attendance: actionAttendance
    }

    function actionAttendance(event) {

    }
    var currentType = '';
    $('a[data-filter]').on('click', function() {
        var type = $(this).data('filter');
        var list = '';
        switch(type) {
            case 'attendance':
                list = players.getPlayersByAttendance();
            break;
            case 'unattendance':
                list = players.getPlayersByUnattendance();
            break;
            case 'reward':
                list = players.getPlayersByReward();
            break;
            case 'readreward':
                list = players.getPlayersByReadReward();
            break;
            default:
                list = players.getPlayers();
            break;
        }
        currentType = type
        render(list);
    })


    function numtopic(b, a) {
        if (b === 1) {
            return '<span class="text-success">√</span>'  
        } else {
            if (a) {
                return '<button type="button" class="btn btn-primary" data-attendance="'+a.id+'">签到</button>'
            } else {
                return '<span class="text-danger">&times;</span>'
            }
            
        }
    }

    function canAttendance() {
        return (currentType === '' || currentType === 'unattendance')
    }

    function render(data) {
        var items = data.reduce(function(result, item, index) {
            return result + '<tr><td>'+item.id+'</td><td>'+item.name+'</td><td>'+numtopic(item.attendance, canAttendance() ? item : null)+'</td><td>'+numtopic(item.reward)+'</td></tr>'
        }, '');
        $('#grid').html(items);
        if (canAttendance()) {
            $('#grid').off('click').on('click','[data-attendance]', function() {
                var id = parseInt($(this).data('attendance'));
                var player = players.getPlayerById(id)
                player.attendance = 1
                players.save()
                $(this).after('<span class="text-success">√</span>');
                $(this).remove();
            })
        }
    }

    var preList;
    var cj  = new PrizeDraw();

    cj.onDraw = function(seed) {
        if (typeof seed === 'object') {
            view.innerHTML = '';
            var $list = $('<ul/>');
            seed.map(function(i) {
                $list.append('<li>'+preList[i].name+'</li>')
            })
            $list.appendTo($(view));
        } else {
            view.innerHTML = preList[seed].name
        }
        
    }
    var rt = 1
    cj.onStop = function(seed) {
        if (typeof seed === 'object') {
            seed.map(function(i) {
                var player = preList[i];
                player.reward = 1;
                player.rt = rt
            })
        } else {
            var player = preList[seed];
            player.reward = 1;
            player.rt = rt
        }
        rt = rt + 1;
    }

    button.addEventListener('click', function() {
        if (cj.isRun()) {
            cj.stop()
            button.innerHTML = '开始';
        } else {
            preList = players.getPlayersByReadReward();
            cj.setNumber(preList.length);
            cj.setSame(_rewardTimes.length > 0 ? _rewardTimes.shift() : 1)
            cj.run()
            button.innerHTML = '停止';
        }
    })
</script>
</body>
</html>

