export default function primitiveSample() {
  let name: string = 'なかけん'
  console.log('smple:1', typeof name, name);

  let age: number = 16
  console.log('smple:2', typeof age, age);

  let isSingle: boolean = true
  console.log('smple:3', typeof isSingle, isSingle);

  const isOver20: boolean = age >= 20
  console.log('smple:4', typeof isOver20, isOver20)
}