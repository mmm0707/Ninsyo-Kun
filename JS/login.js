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

    //XMLHttpRequestオブジェクトを作成
    var req = new XMLHttpRequest();

    //onreadystatechangeイベントで処理の状況変化を監視
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }

    //すること：取得したIDとPWを送る　＝　POSTする！GETじゃない！
    req.open(
        "POST",
        "APIs/ninsyo-kun.php",
        // "https://oafgomqqvg.execute-api.us-east-1.amazonaws.com/APItest/dynamodbctrl"
    );


    // setRequestHeader() HTTPリクエストヘッダを設定するメソッド。
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader('Access-Control-Allow-Origin', '*');
    req.send();

    //IDとPWとがあっていたかAWS側からのレスポンスを受け取る、見る
    //それがOKなのかERRなのかを受け取る
    //OKであればTOPページへ
    //ERRであればアラート表示

    // 2022/7/12
    // APIを返すものを作る：OKだけを返すだけのをを使ってリクエストを行う
    //req.sendの送り方が違うのかも
    // /APIs/ninsyo - kun.php　 <~~~~このパスで動くかも
    //  "https://humpz.in/APIs/ninsyo-kun.php"
});
