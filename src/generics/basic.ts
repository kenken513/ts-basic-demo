export default function genericsBasicSample() {
  //ジェネリク型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log('generics sample1', stringReduce(['may', 'the', 'force'], ''));

  const numberReduce = (array: number[], initialValue: number): number=> {
    let result = initialValue
    for (let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('generics sample2', numberReduce([100, 200, 300], 1000));

  type Reduce = {
    (array: string[], initialValue: string): string
    (array: number[], initialValue: number): number
  }

  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('generics sample3', genericStringReduce(['make', 'typscript'], ''));

  const genericNumberReduce: GenericReduce<number>= (array, initialValue) => {
    let result = initialValue
    for (let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('generics sample3', genericNumberReduce([400,600], 2000));

  //いろいろなジェネリック型の定義方法
  //完全な呼び出しシグネチャ
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T):T
    <U>(array: U[], initialValue: U):U
  }

  //呼び出しシグネチャの省略記法
  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}