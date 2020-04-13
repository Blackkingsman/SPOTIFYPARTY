import { fireDb } from '~/plugins/firebase'
class Queue {
  // track: {track_id, track_title, track_artist, track_album}
  // userID: "johndoe"
  // playlist = [
  //  track:{..},
  //  userID
  // ]
  constructor () {
    this.oplaylist = []
    this.localsession = ''
  }

  async getdbQueue (sessionID) {
    const snapshot = await fireDb.collection('sessions').where('result', '==', sessionID).get()
    this.oplaylist = []
    const db = []
    const songs = []
    if (snapshot) {
      snapshot.forEach((track) => {
        db.push(track.data())
      })
      if (db[0].playlist) {
        db[0].playlist.forEach((item) => {
          songs.push(item)
        })
      }

      if (songs) {
        songs.forEach((item) => {
          this.oplaylist.push({ uid: item.uid, track: item.track, time: item.time })
        })
      }
    } else {
      this.oplaylist = []
    }
  }

  async addPlaylist (sessionID, userID, track) {
    const timestamp = Math.floor((new Date()).getTime() / 1000)
    await this.getdbQueue(sessionID)
    this.oplaylist.push({ uid: userID, track, time: timestamp })
    // add to database
    await fireDb.collection('sessions').doc(sessionID).update({ playlist: this.oplaylist })
    // add to spotify playlist
  }

  getPlaylist () {
    return this.playlist
  }
}
export default Queue
