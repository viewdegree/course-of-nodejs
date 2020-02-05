function ajax(json){
    if(json.url===undefined){
        return;
    }
    var url = json.url;
    var method = json.method.toUpperCase()||'GET';
    var data = json.data||{};
    var xhr = new XMLHttpRequest;
    function jsonUrl(data){
        var arr = [];
        for(var key in data){
            arr.push(key+'='+data[key])
        }
        return arr.join('&');
    }
    switch(method){
        case 'GET':
            xhr.open('GET',url+'?'+jsonUrl(data),true);
            xhr.send(null);
            break;
        case 'POST':
            xhr.open('POST',url,true);
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
            xhr.send(jsonUrl(data));
            break;
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){//表示数据完全接受完毕
            if(xhr.status>=200&&xhr.status<=300||xhr.status===304){//表示返回页面的状态是正常页面
                json.success(xhr.responseText);
            }else{
                json.error(xhr.status);
            }
        }
    }
}