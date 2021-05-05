export default function objectSample() {
  const a: object = {
    name: 'kentaro',
    age: 16
  }
  
  //オブジェクトリテラル記法で型定義
  let country: {
    language: string,
    name: string
  } = {
    language: 'japanese',
    name: 'japan'
  }

  console.log('object sample1', country);
  
  country = {
    language: 'English',
    name: 'United states of america'
  }

  console.log('object sample2', country);

  //オプショナルとreadonly
  const kentaro: {
    age: number,
    lastName: string,
    readonly  firstName: string,
    gender?: string
  } = {
    age: 16,
    lastName: 'Nakagawa',
    firstName: 'Kentaro',
  }

  kentaro.gender = 'mail'
  kentaro.lastName = 'Nakamura'

  console.log('object sample3', kentaro);

  //インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul'
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('object sample4', capitals);
}