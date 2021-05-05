export default function typeAiliasSample() {
  //型エイリアス
  type Country = {
    capital: string,
    language: string,
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'japanese',
    name: 'Japan'
  }

  console.log('object alias sample1', japan);

  const america: Country = {
    capital: 'Washinton, D.C.',
    language: 'English',
    name: 'america'
  }

  console.log('object alias sample1', america);

  //合併型（union）と交差型（intersection）
  type Knight = {
    hp: number,
    sp: number,
    weapon: string,
    swordSkill: string
  }

  type Wizard = {
    hp: number,
    mp :number,
    weapon: string,
    magickSkill: string
  }

  //合併型　KnightまたはWizardの型を持つ
  type Adventure = Knight | Wizard

  //交差型　KnightかつWizardの型を持つ（両方の型を持つ）
  type Paladin = Knight & Wizard

  //Knightよりの冒険者
  const adventure1: Adventure = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連斬り'
  }

  //Wizardよりの冒険者
  const adventure2: Adventure = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magickSkill: 'ファイアーボール'
  }

  console.log('object alias sample3', adventure1);
  console.log('object alias sample4', adventure2);

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連斬り',
    magickSkill: 'ファイアーボール'
  }

  console.log('object alias sample3', paladin);
}