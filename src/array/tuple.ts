export default function tupleSample() {
  //一般的なタプルの型定義
  let response: [number, string] = [200, 'OK']
  console.log('array tuple sample1', response);
  
  //可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['kana', 'miku', 'keiko']
  girlfriends.push('misa')
  console.log('array tuple sample2', girlfriends);
}