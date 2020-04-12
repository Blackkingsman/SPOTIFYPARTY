import { fireDb } from '~/plugins/firebase.js'
export default class Queue {
  // track: {track_id, track_title, track_artist, track_album}
  // userID: "johndoe"
  // playlist = [
  //  track:{..},
  //  userID
  // ]
  constructor () {
    this.playlist = []
  }

  async getdbQueue (sessionID) {
    const snapshot = await fireDb.collection('sessions').where('result', '==', sessionID).get()
    this.playlist = []
    snapshot.forEach((doc) => {
      this.playlist.push(doc.data().playlist)
    })
  }

  async addPlaylist (sessionID, userID, track) {
    const timestamp = Math.floor((new Date()).getTime() / 1000)
    this.getdbQueue(sessionID)
    this.playlist.push({ uid: userID, track, time: timestamp })
    // add to database
    await fireDb.collection('sessions').doc(sessionID).update({ playlist: this.playlist })
    // add to spotify playlist
  }

  getPlaylist () {
    return this.playlist
  }
}
export { Queue }
