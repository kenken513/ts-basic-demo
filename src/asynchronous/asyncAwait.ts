export default async function asyncAwaitsample() {
  const url = 'https://api.github.com/users/kenken513'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = async () => {
    const response = await fetch(url)
    .then((res) => res)
    .catch((error) => {
      console.error(error);
      return null
    })

    if (!response) {
      return null
    }

    const json = await response.json()
    .then((json: Profile) => {
      console.log('asynchronous asinc await sample 1', json);
      return json
    })
    .catch((error) => {
      console.error(error);
      return null
    })

    if (!json) {
      return null
    }

    return json
  }
  const profile = await fetchProfile()
  if (profile) {
    console.log('asynchronous asinc await sample 2', profile);
  }
}