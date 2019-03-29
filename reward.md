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
        <textarea name="file" id="file-context" cols="80" rows="20"></textarea><br/>
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

