<?php
/*
form からデータを受け取る
auther: kobatm7@gmail.com
date: 2021.05.26
ver.0
*/
//print_r($_POST);

// foreach($_POST as $key => $value){
//     echo $key.' >> '.$value."<br>\n";
// }

if($_POST["submit"] === "送信"){
    // ファイルに出力する
    foreach($_POST as $key=>$value){
        if($key != 'submit'){
            //echo $key.' >>> '.$value."<br>\n";
            $line .= $value.',';
        }
    }
    $line .="\n";// 改行コードを追加
    //echo $line.'<br>';
    $o_line=mb_convert_encoding($line, "Shift-JIS"); // 文字コードをutf-8 から Shit-JIS へ変換

    $outputfile='./data.csv'; //出力ファイル名を設定
    $fp=fopen($outputfile,"a"); // ファイルをオープン
    flock($fp, LOCK_EX); // ファイルの排他処理
    fputs($fp,$o_line); // ファイルへ1行出力
    fclose($fp); //　ファイルを閉じる

    //　完了画面を出力
    echo '<h1>お問い合わせフォーム　ー　完了画面</h1>';
    echo '<p>お問合せフォームからの送信が完了しました。</p>';
}elseif($_POST["submit"] === "確認する"){
    //echo 'kakunin';
    echo '<h1>お問い合わせフォーム　ー　確認画面</h1>
    <form method="POST" action="form.php">
        <fieldset>';
    echo '<p>名前：'.$_POST["name"].'</p>';
    echo '<p>ふりがな：'.$_POST["fname"].'</p>';
    echo '<p>メールアドレス：'.$_POST["email"].'</p>';
    echo '<p>年齢粋：'.$_POST["nenrei"].'</p>';
    echo '<p>お問合せ：'.$_POST["otoiawase"].'</p>';
    echo '</fieldset>';

    echo '<input type="hidden" name="name" value="'.$_POST["name"].'" />';
    echo '<input type="hidden" name="fname" value="'.$_POST["fname"].'" />';
    echo '<input type="hidden" name="email" value="'.$_POST["email"].'" />';
    echo '<input type="hidden" name="nenrei" value="'.$_POST["nenrei"].'" />';
    echo '<input type="hidden" name="otoiawase" value="'.$_POST["otoiawase"].'" />';

    echo '<p>よろしければ　<input type="submit" name="submit" value="送信"/>　をクリックしてください</p></form>';
}

?>