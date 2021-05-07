export default function promiseSample() {
  const url = 'https://api.github.com/users/kenken513'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
    .then((res) => {
      //レスポンスのBodyをJSONで読み取った結果を返す
      res.json()
      .then((json: Profile) => {
        console.log('Asynchronous callback Promisesample1', json);
        resolve(json)
      })
      .catch((error) => {
        console.error(error);
        reject(null)
      })
    })
    .catch((error) => {
      console.error(error);
      reject(null)
    })
    })
  }

  fetchProfile()
  .then((profile: Profile | null) => {
    if (profile) {
      console.log('Asynchronous callback Promisesample2', profile);
    }
  })
  .catch(() => {

  })
}