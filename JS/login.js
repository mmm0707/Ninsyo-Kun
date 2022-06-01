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
