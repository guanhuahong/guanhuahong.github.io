---
layout: page
title: "抽奖"
description: "幸运大抽奖"
header-img: "img/green.png"
---


<style>
    .page {
        position: relative;
        min-height: 640px;
    }
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
</style>


<div id="page-prize-draw" class="page">
    <div class="menu">
        <a href="javascript:void(0)" data-page="#page-customer-list" class="menu-item">抽奖人员管理</a>
    </div>
    <div id="view">幸运大抽奖</div>
    <div class="control">
        <button class="btn" id="choujiang">开始</button>
    </div>
</div>
<div id="page-customer-list" style="display: none"  class="page">
    <ul class="nav">
        <li class="nav-item"><a class="nav-link active" data-page="#page-prize-draw" href="javascript:void(0)">继续抽奖</a></li>
        <li class="nav-item"><a class="nav-link active" data-filter href="javascript:void(0)">所有人员</a></li>
        <li class="nav-item"><a class="nav-link" data-filter="attendance" href="javascript:void(0)">签到人员</a></li>
        <li class="nav-item"><a class="nav-link" data-filter="unattendance" href="javascript:void(0)">未签到人员</a></li>
        <li class="nav-item"><a class="nav-link" data-filter="prereward" href="javascript:void(0)">可以奖人员</a></li>
        <li class="nav-item"><a class="nav-link" data-filter="reward" href="javascript:void(0)">中奖人员</a></li>
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
        <ul id="control"><a data-action="attendance" href="javascript:void(0)">签到</a></ul>
    </div>
</div>
<script>
(function(exports) {
    var PrizeDraw = exports.PrizeDraw = function() {
        this._number = 0;
        this.seed = 0;
    }

    PrizeDraw.prototype.setNumber = function(value) { this._number = value; }
    PrizeDraw.prototype.getNumber = function() { return this._number; }

    PrizeDraw.prototype.isRun = function() { return this._run; }

    PrizeDraw.prototype.run = function() { this._run = true; this.update(); }
    PrizeDraw.prototype.stop = function() {
        this._run = false;

        var seed = Math.floor(this._number * Math.random());
        if (seed >= this._number) {
            seed = this._number - 1;
        }

        if (this.onDraw) { 
            this.onDraw(seed)
        }

        if (this.onStop) { 
            this.onStop(seed)
        }

        if (this._number > 0) {
            this._number = this._number - 1;
        }
    }

    PrizeDraw.prototype.update = function() {
        if (!this._run) return;
        if (this._number <= 0) return;
        var seed = Math.floor(this._number * Math.random());
        if (seed >= this._number) {
            seed = this._number - 1;
        }

        if (this.onDraw) { 
            this.onDraw(seed)
        }
        var self = this;

        window.setTimeout(function() {
            self.update()
        }, 1000/60)
    }
}(window))
</script>
<script>
    var customPage = $('#page-prize-draw');
    $('a[data-page]').on('click', function() {
        var nextPage = $(this).data('page');
        customPage.hide();
        $(nextPage).show();
        customPage = $(nextPage);
    })
    var view = document.getElementById('view');
    var button = document.getElementById('choujiang');
    var players = [
        {id: 1, name: 'abc', attendance: 1, reward: 0 },
        {id: 2, name: 'cde', attendance: 1, reward: 0 },
        {id: 3, name: 'dfg', attendance: 1, reward: 0 },
        {id: 4, name: 'jhg', attendance: 1, reward: 0 },
        {id: 5, name: 'wer', attendance: 1, reward: 0 },
        {id: 6, name: 'rty', attendance: 1, reward: 0 },
        {id: 7, name: 'oiu', attendance: 0, reward: 0 },
        {id: 8, name: 'plm', attendance: 0, reward: 0 },
    ]

    var rewardPlayerList = [];

    var filters = {
        attendance: filterAttendance,
        unattendance: filterUnattendance,
        reward: filterReward,
        prereward: filterReadReward
    }


    function filterAttendance(data) {
        return data.filter(function(item, index) {
            return item.attendance === 1
        })
    }

    function filterUnattendance(data) {
        return data.filter(function(item, index) {
            return item.attendance === 0
        })
    }

    function filterReward(data) {
        return rewardPlayerList
    }

    function filterReadReward(data) {
        return data.filter(function(item, index) {
            return item.attendance === 1 && item.reward === 0
        })
    }

    var actions = {
        attendance: actionAttendance
    }

    function actionAttendance(event) {

    }
    var currentType = '';
    $('a[data-filter]').on('click', function() {
        var type = $(this).data('filter');
        list = players
        if (type) {
            list = filters[type](list)
        }
        currentType = type
        render(list);
    })

    render(players)

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
            $('#grid').on('click','[data-attendance]', function() {
                var id = parseInt($(this).data('attendance'));
                var player = players.find(function(item) { return item.id === id })
                player.attendance = 1
                $(this).after('<span class="text-success">√</span>');
                $(this).remove();
            })
        }
    }

    var preList = filterReadReward(players);
    var cj  = new PrizeDraw();
    cj.setNumber(preList.length);
    cj.onDraw = function(index) {
        view.innerHTML = preList[index].name
    }

    cj.onStop = function(index) {
        var player = preList[index];
        player.reward = 1;
        rewardPlayerList.push(player);
        preList = filterReadReward(players);
    }

    button.addEventListener('click', function() {
        if (cj.isRun()) {
            cj.stop()
            button.innerHTML = '开始';
        } else {
            cj.run()
            button.innerHTML = '停止';
        }
    })
</script>


