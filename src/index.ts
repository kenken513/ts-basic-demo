// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello TypeScript World!')
// world.sayHello(root)

//基本の型定義
// import {primitiveSample, notExistSample, anySample, unknownSample} from './basic/index';

// primitiveSample();
// notExistSample();
// anySample();
// unknownSample();

//関数の型定義
// import {logMessage} from './function/basic'
// import {isUserSignedIn, isUserSignedIn2, sumProductsPrice} from './function/parameters'

// logMessage("hello TypeScript!");
// isUserSignedIn('ABC', 'kentaro');
// isUserSignedIn2('ABC');
// const sum = sumProductsPrice(100, 200, 300, 400, 500)
// console.log('sum' ,sum);

//オブジェクトの型定義
// import objectSample from './object/object'
// import typeAiliasSample from './object/alias'
// objectSample();
// typeAiliasSample();

//配列とタプルの型定義
// import arraySample from './array/array'
// import tupleSample from './array/tuple'
// arraySample();
// tupleSample();

//ジェネリック型
// import genericsBasicSample from './generics/basic'
// import genericsAdvancedSample from './generics/advanced'
// genericsBasicSample();
// genericsAdvancedSample();

//非同期処理
import callbackSample from './asynchronous/collback'
import promiseSample from './asynchronous/promise'
import asyncAwaitsample from './asynchronous/asyncAwait'
// callbackSample()
// promiseSample()
asyncAwaitsample()