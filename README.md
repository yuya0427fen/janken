# じゃんけんでできるだけ多くの相手を倒そう

## はじめかた

1. 必要なプログラムを事前にインストールしておきます
2. ファイル一式を自分のPCへダウンロードします
3. 依存するライブラリをインストールして、サーバを起動します
4. [http://localhost:8888](http://localhost:8888/)へアクセスします

### 必要なプログラムのインストール

このアプリを利用するためには、依存するライブラリ以外に[node.js](https://nodejs.org/)が必要です。次のサイトからダウンロードしてインストールしましょう。

* [node.js](https://nodejs.org/)

バージョンがいくつかありますが、わからない場合はLTSのものをインストールしましょう。

このアプリでは、手を決めるプログラムを自分で書くことになります。そのためのアプリが必要です。
もし好みがない場合は、[Visual Studio Code](https://www.microsoft.com/ja-jp/dev/products/code-vs.aspx)を利用すると良いでしょう。これも次のサイトからダウンロードできます。

* [Visual Studio Code](https://www.microsoft.com/ja-jp/dev/products/code-vs.aspx)

### 依存するライブラリのインストール

このアプリをダウンロードし、展開したら、ターミナルで展開されたフォルダへ移動します。
例えば`/Users/your_name/zyanken`へ展開したなら、次のように移動します。

~~~sh
% cd /Users/your_name/zyanken
~~~

移動後、次のコマンドを実行します。`npm`はnode.jsに付属しているコマンドで、
ライブラリのインストールなどを行うツールです。

~~~sh
% npm install
~~~

### サーバの起動

次のコマンドを実行することで、サーバを起動できます。起動後は、[http://localhost:8888/](http://localhost:8888/)でアプリにアクセスできます。

~~~sh
% npm run serve
~~~

起動したサーバは、`Ctrl`キーと一緒に`c`を押すことで停止できます。

##　自分の手を決めるプログラムの開発

`docs/player.js`に自分の手を決めるプログラムを記述します。
具体的には状況に合わせて`action`の返り値を変えるように`action`を実装します。

### `action(oppornent)`

この関数は、次の3つの値のいずれかを返すと期待されています。
これ以外の値を返した場合は、全て「グーを出したもの」として扱われます。

|返り値|意味|
|-----|---|
|0|グーを出す|
|1|チョキを出す|
|2|パーを出す|

また引数には、対戦相手のIDが文字列で与えられます。
これまでの手に関する情報や、勝敗に関する情報は関数を呼び出して取得します。

例えば「常にグーを返す」プログラムは次のように実装します。

~~~javascript
function action(oppornent){
  return 0;
}
~~~

これを改修し、完全ランダムに手を決めるプログラムは次のようになります。

~~~javascript
function action(oppornent){
  const value = Math.random() * 3;
  return Math.floor(value);
}
~~~

### `cards()`

対戦中に対戦相手が出したカードの履歴が参照できます。
この関数を呼ぶと、これまで出したカードが順に納められた配列が取得できます。

例えば、これまで最も多く相手が出してきたカードに勝てるように手を選ぶには、次のように記述します。

~~~javascript
function action(oppornent){
  const gu = cards().filter(i => i == 0);
  const choki = cards.filter(i => i == 1);
  const par = cards().filter(i => i == 2);
  
  const list = [
    {value: gu.length, card: 2}, 
    {value: choki.length, card: 0},
    {value: par.length, card: 1}
  ];
  list = list.sort((i, j) => j.value - i.value);
  return list[0].card;
}
~~~

### `results()`

これまでの勝敗が配列で取得できます。
各要素の値と、勝敗との対応関係は次のようになります。


|値|意味|
|-----|---|
|0|負け|
|1|ひきわけ|
|3|勝ち|

例えば、負けの数は次のようにわかります。

~~~javascript
const defeats = results().filter(i => i == 0).length;
~~~