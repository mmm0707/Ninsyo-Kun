// XMLHttpRequestオブジェクトの作成
var request = new XMLHttpRequest();
var endpoint = "https://oafgomqqvg.execute-api.us-east-1.amazonaws.com/APItest/dynamodbctrl";

// URLを開く
request.open('POST', endpoint, true);

// リクエストをURLに送信
request.send();

// レスポンスが返ってきた時の処理を記述 
request.onload = function (e) {
    // レスポンスが返ってきた時の処理
    if (this.status === 200) {
        console.log(request.responseText);
    }
};

function login() {
    //値取得
    const login = document.getElementById('login');

    //仮ユーザー情報を設定
    let userTel = '123';
    let userPass = '456';

    //ログイン処理
    //tel: 11桁入力、ハイフンなし　pw:8～10桁　半角英数字　大文字小文字含む
    login.addEventListener('click', e => {
        const userTelValue = document.getElementById('tel').value;
        const userPassValue = document.getElementById('password').value;
        if (3 <= userTelValue.length || 3 <= userPassValue.length) {
            if (userTel === userTelValue && userPass === userPassValue) {
                console.log('ok!');
                console.log(userTelValue.length);
            } else {
                console.log('電話番号もしくはパスワードが間違っています。');
            }
        } else {
            console.log('文字数が不足しています。');
        }
    });
}

