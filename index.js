//値取得
const login = document.getElementById('login');
const userTelValue = document.getElementById('tel').value;
const userPassValue = document.getElementById('password').value;


//仮ユーザー情報を設定
let userTel = '123';
let userPass = '456';

//新規ユーザー登録処理
// newuser.addEventListener('click', e) =>{
//     let newUserTel = document.getElementById('newTel').value;
//     let newUserPassword = document.getElementById('newPassword').value;
// });

//ログイン処理
//te: 11桁入力、ハイフンなし　pw:8～10桁　半角英数字　大文字小文字含む
login.addEventListener('click', e => {
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
