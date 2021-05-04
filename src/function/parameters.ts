//オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('function parameters sample 1: User is signed in!! username is', username)
    return true
  } else {
    console.log('function parameters sample 1: User is signed in!! user is not signed in', username)
    return false
  }
}

//デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, username = "No Name"): boolean => {
  if (userId === 'ABC') {
    console.log('function parameters sample 3: User is signed in!! username is', username)
    return true
  } else {
    console.log('function parameters sample 4: User is signed in!! user is not signed in', username)
    return false
  }
}

//レストパラメーターを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice
  }, 0)
}

//呼び出しシグネチャ（省略記法）
type LogMessage = (messge: string) => void
export const logMessage6: LogMessage = (message) => {
  console.log('sample6', message);
}

//完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}
export const logMessage7: FullLogMessage = (message) => {
  console.log('sample 7', message);
}