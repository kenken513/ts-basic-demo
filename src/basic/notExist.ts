export default function notExistSample(){
  let name = null
  console.log("sample1", typeof name, name );
  
  if (!name) {
    console.log("sample2", " nullだよ");
  } else {
    console.log("sample3", "nullじゃないよ");
  }

  let age = undefined
  console.log("sample4", typeof age, age );

  if (!age) {
    console.log("sample5", " 年齢は秘密だよ");
  } else {
    console.log("sample5", " 年齢は" + age);
  }
}