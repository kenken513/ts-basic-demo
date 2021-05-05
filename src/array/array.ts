export default function arraySample() {

  //シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  console.log('array sample1', colors);
  
  const even: Array<number> = [2, 4, 6]
  even.push(7)
  console.log('array sample2', even);

  const ids: (string | number)[] = ['abc', 123]
  ids.push('def')
  ids.push(456)
  console.log('array sample3', ids);

  //配列の型推論
  const generateSomeArray = () => {
    const _someArray = [] //any[]
    _someArray.push(123) //number[]
    _someArray.push('abc')// (string | number)[]
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  someArray.push('def')
  console.log('array sample4', someArray);

  //イミュータブルな配列をつくる 書き換え、追加不可能
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  console.log('array sample5', commands);
}