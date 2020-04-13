import { fireDb } from '~/plugins/firebase.js'
export default class Queue {
  // track: {track_id, track_title, track_artist, track_album}
  // userID: "johndoe"
  // playlist = [
  //  track:{..},
  //  userID
  // ]
  constructor () {
    this.oplaylist = []
  }

  // async getdbQueue (sessionID) {
  // const snapshot = await fireDb.collection('sessions').where('result', '==', sessionID).get()
  // this.oplaylist = []
  // const db = []
  // const songs = []
  // snapshot.forEach((track) => {
  //  db.push(track.data())
  // })
  // db[0].playlist.forEach((item) => {
  //  songs.push(item)
  // })
  // songs.forEach((item) => {
  //  this.oplaylist({ uid: item.uid, track: item.track, time: item.time })
  // })
  // }

  async addPlaylist (sessionID, userID, track) {
    const timestamp = Math.floor((new Date()).getTime() / 1000)
    //await this.getdbQueue(sessionID)
    this.oplaylist.push({ uid: userID, track, time: timestamp })
    // add to database
    await fireDb.collection('sessions').doc(sessionID).update({ playlist: this.oplaylist })
    // add to spotify playlist
  }

  getPlaylist () {
    return this.playlist
  }
}
export { Queue }
