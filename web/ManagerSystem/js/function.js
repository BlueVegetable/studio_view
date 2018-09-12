function getProjectState(state) {
    switch (state) {
        case 0: return "失效";break;
        case 1: return "开启";break;
        case 2: return "完成";break;
        default:return "状态错误";break;
    }
}
function changeDate(time) {
    if(time==null)
        return "";
    var date = new Date(time);
    return date.getFullYear() + "年" + (date.getMonth()+1) + "月" + date.getDate() + "日" +
        date.getHours() + "时" + date.getMinutes() + "分" +date.getSeconds() + "秒";
}
function changeDifficulty(difficulty) {
    if(difficulty==0) {
        return "无难度";
    }
    var result = "";
    for (var i = 0; i < difficulty; i++) {
        result += "★";
    }
    return result;
}
function getTaskState(state) {
    switch (state) {
        case 0: return "失效";break;
        case 1: return "开启";break;
        case 2: return "完成";break;
        default:return "状态错误";break;
    }
}
function getParameter(href,key) {
    var parameterString=href.split("?")[1];
    if(parameterString==null)
        return "";
    var parameters=parameterString.split("&");
    for(var i=parameters.length-1;i>=0;i--) {
        if(parameters[i].split("=")[0]==key)
            return parameters[i].split("=")[1];
    }
    return "";
}
function delay(time,finish) {
    var planTime = new Date(time);
    var nowTime = new Date();
    if(finish!=null) {
        if(finish<time)
            return "按期完成";
        nowTime = new Date(finish);
    }
    var result = "delay:";
    if(nowTime.getFullYear()>planTime.getFullYear())
        result += (nowTime.getFullYear()-planTime.getFullYear()) + "年";
    if(nowTime.getMonth()>planTime.getMonth())
        result += (nowTime.getMonth()-planTime.getMonth()) + "月";
    if(nowTime.getDate()>planTime.getDate())
        result += (nowTime.getDate()-planTime.getDate()) + "天";
    if((nowTime.getDate()-planTime.getDate())==0)
        return "0天";
    return result;
}