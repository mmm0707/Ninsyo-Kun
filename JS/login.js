//認証ボタンをトリガーとする
const login = document.getElementById('login-button');
login.addEventListener('click', function () {

    //APIGateWayの認証機能エンドポイントにリクエストする…vscode
    //DynamoDB中にIDとPASSの組み合わせに該当するものがあれば認証する…aws内に関数を作る
    var req = new XMLHttpRequest();
    req.open(
        "GET",
        "https://oafgomqqvg.execute-api.us-east-1.amazonaws.com/APItest/dynamodbctrl"
    );
    req.send();
    req.onreadystatechange = function () { //onreadystatechangeはreadyState 属性が変化するたびに呼び出す
        var data = JSON.parse(req.responseText || "null"); //JSONの読み込み
        //認証OKであれば『トップページ』へ。
        if (data) {
            console.log(data);
            // } else {
            //     //認証NGであればアラートを出す。
            //     alert('電話番号もしくはパスワードが違います。');
        }
    };
});