import { fireDb } from '~/plugins/firebase.js'

function createId () {
  const length = 4
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    )
  }
  return result
}

export async function makeId (router) {
  const hash = createId()
  const ref = fireDb.collection('sessions').doc(hash)
  const docToSave = {
    apiToken: localStorage.getItem('spotify-access-token'),
    voteCount: 0,
    users: [],
    playlist: []
  }
  try {
    await ref.get().then((doc) => {
      if (doc.exists) {
        makeId(router)
      } else {
        ref.set(docToSave)
        router.push(`/session/${hash}`)
      }
    })
  } catch (e) {}
}
