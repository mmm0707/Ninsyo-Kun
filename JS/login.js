//認証ボタンをトリガーとする
const login = document.getElementById('login-button');
login.addEventListener('click', function () {

    // メイン
    //APIGateWayの認証機能エンドポイントにリクエストする…vscode
    //DynamoDB中にIDとPASSの組み合わせに該当するものがあれば認証する…aws内に関数を作る

    //すること： IDとPWを取得　フォームの！
    const tel = document.getElementById('tel');
    const password = document.getElementById('password');
    console.log(tel.value);//ok
    console.log(password.value);//ok

    //すること：取得したIDとPWを送る　＝　POSTする！GETじゃない！
    var req = new XMLHttpRequest();
    req.open(
        "POST",
        "https://oafgomqqvg.execute-api.us-east-1.amazonaws.com/APItest/dynamodbctrl"
    );
    // setRequestHeader() HTTPリクエストヘッダを設定するメソッド。
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(tel.value, password.value);

    //IDとPWとがあっていたかAWS側からのレスポンスを受け取る、見る
    //それがOKなのかERRなのかを受け取る
    //OKであればTOPページへ
    //ERRであればアラート表示
});
