<template>
  <div id="app">
    <div><Navbar /></div>
    <div class="flex-container">
      <div class="session">
        <currentSession />
      </div>
      <div>{{ responses }}</div>
      <div class="queue">
        <Tablepage />
        <b-button @click="addfireDB">
          Add Track
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Tablepage from '../../components/Tablepage'
import Navbar from '../../components/Navbar.vue'
import currentSession from '../../components/Session'
import Session from '../../model/Session'
import { fireDb } from '~/plugins/firebase'
export default {
  name: 'App',
  components: {
    Tablepage,
    Navbar,
    currentSession
  },
  data () {
    return {
      session: new Session(this.$route.params.id),
      input: '',
      errors: [],
      baseuri: 'https://api.spotify.com/v1',
      user_id: 'tphillips-24',
      data: {
        name: this.$route.params.id,
        description: 'Description',
        public: true
      },
      songuri: {
        uris: ['spotify:track:40shLUuowIKHOAc7pPFpky', 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh', 'spotify:track:1301WleyT98MSxVHPZCA6M']
      },
      jsonTracks: [{
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/3l0CmX0FuQjFxr8SK7Vqag'
              },
              href: 'https://api.spotify.com/v1/artists/3l0CmX0FuQjFxr8SK7Vqag',
              id: '3l0CmX0FuQjFxr8SK7Vqag',
              name: 'Clairo',
              type: 'artist',
              uri: 'spotify:artist:3l0CmX0FuQjFxr8SK7Vqag'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/3NEDQmYF1roygFssVEwkwv'
          },
          href: 'https://api.spotify.com/v1/albums/3NEDQmYF1roygFssVEwkwv',
          id: '3NEDQmYF1roygFssVEwkwv',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273bf94e27360806b5aa5025f93',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02bf94e27360806b5aa5025f93',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851bf94e27360806b5aa5025f93',
              width: 64
            }
          ],
          name: 'diary 001',
          release_date: '2018-05-25',
          release_date_precision: 'day',
          total_tracks: 6,
          type: 'album',
          uri: 'spotify:album:3NEDQmYF1roygFssVEwkwv'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3l0CmX0FuQjFxr8SK7Vqag'
            },
            href: 'https://api.spotify.com/v1/artists/3l0CmX0FuQjFxr8SK7Vqag',
            id: '3l0CmX0FuQjFxr8SK7Vqag',
            name: 'Clairo',
            type: 'artist',
            uri: 'spotify:artist:3l0CmX0FuQjFxr8SK7Vqag'
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3lLHpTOJ11tWiUNGYN14gt'
            },
            href: 'https://api.spotify.com/v1/artists/3lLHpTOJ11tWiUNGYN14gt',
            id: '3lLHpTOJ11tWiUNGYN14gt',
            name: 'Rejjie Snow',
            type: 'artist',
            uri: 'spotify:artist:3lLHpTOJ11tWiUNGYN14gt'
          }
        ],
        disc_number: 1,
        duration_ms: 135016,
        explicit: false,
        external_ids: {
          isrc: 'US4HB1800005'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7qwt4xUIqQWCu1DJf96g2k'
        },
        href: 'https://api.spotify.com/v1/tracks/7qwt4xUIqQWCu1DJf96g2k',
        id: '7qwt4xUIqQWCu1DJf96g2k',
        is_local: false,
        is_playable: true,
        name: 'Hello?',
        popularity: 75,
        preview_url: null,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:7qwt4xUIqQWCu1DJf96g2k'
      },
      {
        album: {
          album_type: 'compilation',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of'
              },
              href: 'https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of',
              id: '0LyfQWJT6nXafLPZqxe9Of',
              name: 'Various Artists',
              type: 'artist',
              uri: 'spotify:artist:0LyfQWJT6nXafLPZqxe9Of'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/1gFVlGafcdQ5FSomh1rv1v'
          },
          href: 'https://api.spotify.com/v1/albums/1gFVlGafcdQ5FSomh1rv1v',
          id: '1gFVlGafcdQ5FSomh1rv1v',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273f8fc2b9af93470e792adf74e',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02f8fc2b9af93470e792adf74e',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851f8fc2b9af93470e792adf74e',
              width: 64
            }
          ],
          name: 'HomeOffice Reggaeton',
          release_date: '2020-04-10',
          release_date_precision: 'day',
          total_tracks: 25,
          type: 'album',
          uri: 'spotify:album:1gFVlGafcdQ5FSomh1rv1v'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/790FomKkXshlbRYZFtlgla'
            },
            href: 'https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla',
            id: '790FomKkXshlbRYZFtlgla',
            name: 'KAROL G',
            type: 'artist',
            uri: 'spotify:artist:790FomKkXshlbRYZFtlgla'
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1i8SpTcr7yvPOmcqrbnVXY'
            },
            href: 'https://api.spotify.com/v1/artists/1i8SpTcr7yvPOmcqrbnVXY',
            id: '1i8SpTcr7yvPOmcqrbnVXY',
            name: 'Ozuna',
            type: 'artist',
            uri: 'spotify:artist:1i8SpTcr7yvPOmcqrbnVXY'
          }
        ],
        disc_number: 1,
        duration_ms: 195146,
        explicit: false,
        external_ids: {
          isrc: 'USUM71610032'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/2GkPO9SOJyPif9rJKGHphD'
        },
        href: 'https://api.spotify.com/v1/tracks/2GkPO9SOJyPif9rJKGHphD',
        id: '2GkPO9SOJyPif9rJKGHphD',
        is_local: false,
        is_playable: true,
        name: 'Hello',
        popularity: 1,
        preview_url: null,
        track_number: 24,
        type: 'track',
        uri: 'spotify:track:2GkPO9SOJyPif9rJKGHphD'
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY'
              },
              href: 'https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY',
              id: '4dpARuHxo51G3z768sgnrY',
              name: 'Adele',
              type: 'artist',
              uri: 'spotify:artist:4dpARuHxo51G3z768sgnrY'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/0K4pIOOsfJ9lK8OjrZfXzd'
          },
          href: 'https://api.spotify.com/v1/albums/0K4pIOOsfJ9lK8OjrZfXzd',
          id: '0K4pIOOsfJ9lK8OjrZfXzd',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2734c3bbcff5e7248e415548f12',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e024c3bbcff5e7248e415548f12',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048514c3bbcff5e7248e415548f12',
              width: 64
            }
          ],
          name: '25',
          release_date: '2016-06-24',
          release_date_precision: 'day',
          total_tracks: 11,
          type: 'album',
          uri: 'spotify:album:0K4pIOOsfJ9lK8OjrZfXzd'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY'
            },
            href: 'https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY',
            id: '4dpARuHxo51G3z768sgnrY',
            name: 'Adele',
            type: 'artist',
            uri: 'spotify:artist:4dpARuHxo51G3z768sgnrY'
          }
        ],
        disc_number: 1,
        duration_ms: 295493,
        explicit: false,
        external_ids: {
          isrc: 'GBBKS1500214'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/4sPmO7WMQUAf45kwMOtONw'
        },
        href: 'https://api.spotify.com/v1/tracks/4sPmO7WMQUAf45kwMOtONw',
        id: '4sPmO7WMQUAf45kwMOtONw',
        is_local: false,
        is_playable: true,
        name: 'Hello',
        popularity: 72,
        preview_url: 'https://p.scdn.co/mp3-preview/0b90429fd554bad6785faa2b8931d613db4a0ee4?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:4sPmO7WMQUAf45kwMOtONw'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/5jZeLexrrwGNUy6nv7tzdr'
              },
              href: 'https://api.spotify.com/v1/artists/5jZeLexrrwGNUy6nv7tzdr',
              id: '5jZeLexrrwGNUy6nv7tzdr',
              name: 'C4C',
              type: 'artist',
              uri: 'spotify:artist:5jZeLexrrwGNUy6nv7tzdr'
            },
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/1uJZwuCV2hXbQDSdJvj198'
              },
              href: 'https://api.spotify.com/v1/artists/1uJZwuCV2hXbQDSdJvj198',
              id: '1uJZwuCV2hXbQDSdJvj198',
              name: 'kokoro',
              type: 'artist',
              uri: 'spotify:artist:1uJZwuCV2hXbQDSdJvj198'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/4dbwtwsD09MP1W29TWRdOg'
          },
          href: 'https://api.spotify.com/v1/albums/4dbwtwsD09MP1W29TWRdOg',
          id: '4dbwtwsD09MP1W29TWRdOg',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2730ff922782c2e0ceffa4a611b',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e020ff922782c2e0ceffa4a611b',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048510ff922782c2e0ceffa4a611b',
              width: 64
            }
          ],
          name: "L'aventure EP",
          release_date: '2020-02-14',
          release_date_precision: 'day',
          total_tracks: 6,
          type: 'album',
          uri: 'spotify:album:4dbwtwsD09MP1W29TWRdOg'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5jZeLexrrwGNUy6nv7tzdr'
            },
            href: 'https://api.spotify.com/v1/artists/5jZeLexrrwGNUy6nv7tzdr',
            id: '5jZeLexrrwGNUy6nv7tzdr',
            name: 'C4C',
            type: 'artist',
            uri: 'spotify:artist:5jZeLexrrwGNUy6nv7tzdr'
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1uJZwuCV2hXbQDSdJvj198'
            },
            href: 'https://api.spotify.com/v1/artists/1uJZwuCV2hXbQDSdJvj198',
            id: '1uJZwuCV2hXbQDSdJvj198',
            name: 'kokoro',
            type: 'artist',
            uri: 'spotify:artist:1uJZwuCV2hXbQDSdJvj198'
          }
        ],
        disc_number: 1,
        duration_ms: 149647,
        explicit: false,
        external_ids: {
          isrc: 'TCAEQ2060868'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7bza6R254w7hZyNO9zaIxc'
        },
        href: 'https://api.spotify.com/v1/tracks/7bza6R254w7hZyNO9zaIxc',
        id: '7bza6R254w7hZyNO9zaIxc',
        is_local: false,
        is_playable: true,
        name: 'Hello',
        popularity: 66,
        preview_url: 'https://p.scdn.co/mp3-preview/ed17b198f2f7e76dbc841828af65540d3aa05ada?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:7bza6R254w7hZyNO9zaIxc'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/1dy5WNgIKQU6ezkpZs4y8z'
              },
              href: 'https://api.spotify.com/v1/artists/1dy5WNgIKQU6ezkpZs4y8z',
              id: '1dy5WNgIKQU6ezkpZs4y8z',
              name: 'ROLE MODEL',
              type: 'artist',
              uri: 'spotify:artist:1dy5WNgIKQU6ezkpZs4y8z'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/5xNYe96E1oMXdS1FdboZZv'
          },
          href: 'https://api.spotify.com/v1/albums/5xNYe96E1oMXdS1FdboZZv',
          id: '5xNYe96E1oMXdS1FdboZZv',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273ab8bafa6da1f2e4c6cbfabfc',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02ab8bafa6da1f2e4c6cbfabfc',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851ab8bafa6da1f2e4c6cbfabfc',
              width: 64
            }
          ],
          name: 'oh, how perfect',
          release_date: '2019-11-13',
          release_date_precision: 'day',
          total_tracks: 6,
          type: 'album',
          uri: 'spotify:album:5xNYe96E1oMXdS1FdboZZv'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1dy5WNgIKQU6ezkpZs4y8z'
            },
            href: 'https://api.spotify.com/v1/artists/1dy5WNgIKQU6ezkpZs4y8z',
            id: '1dy5WNgIKQU6ezkpZs4y8z',
            name: 'ROLE MODEL',
            type: 'artist',
            uri: 'spotify:artist:1dy5WNgIKQU6ezkpZs4y8z'
          }
        ],
        disc_number: 1,
        duration_ms: 188546,
        explicit: false,
        external_ids: {
          isrc: 'USUM71919494'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7a2IJHzw9WJjoknwdnCop0'
        },
        href: 'https://api.spotify.com/v1/tracks/7a2IJHzw9WJjoknwdnCop0',
        id: '7a2IJHzw9WJjoknwdnCop0',
        is_local: false,
        is_playable: true,
        name: 'hello!',
        popularity: 63,
        preview_url: null,
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:7a2IJHzw9WJjoknwdnCop0'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/3Fe3pszR2t4TOBVz41B1WR'
              },
              href: 'https://api.spotify.com/v1/artists/3Fe3pszR2t4TOBVz41B1WR',
              id: '3Fe3pszR2t4TOBVz41B1WR',
              name: 'The Oh Hellos',
              type: 'artist',
              uri: 'spotify:artist:3Fe3pszR2t4TOBVz41B1WR'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/1a3UYpjNVB67soVfvtHoG8'
          },
          href: 'https://api.spotify.com/v1/albums/1a3UYpjNVB67soVfvtHoG8',
          id: '1a3UYpjNVB67soVfvtHoG8',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273a4f148bc554d01dbfbd93df0',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02a4f148bc554d01dbfbd93df0',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851a4f148bc554d01dbfbd93df0',
              width: 64
            }
          ],
          name: 'The Oh Hellos EP',
          release_date: '2011-12-01',
          release_date_precision: 'day',
          total_tracks: 4,
          type: 'album',
          uri: 'spotify:album:1a3UYpjNVB67soVfvtHoG8'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3Fe3pszR2t4TOBVz41B1WR'
            },
            href: 'https://api.spotify.com/v1/artists/3Fe3pszR2t4TOBVz41B1WR',
            id: '3Fe3pszR2t4TOBVz41B1WR',
            name: 'The Oh Hellos',
            type: 'artist',
            uri: 'spotify:artist:3Fe3pszR2t4TOBVz41B1WR'
          }
        ],
        disc_number: 1,
        duration_ms: 256006,
        explicit: false,
        external_ids: {
          isrc: 'USCGJ1205481'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/2c62Xf5Po1YSa1N6LOjPHy'
        },
        href: 'https://api.spotify.com/v1/tracks/2c62Xf5Po1YSa1N6LOjPHy',
        id: '2c62Xf5Po1YSa1N6LOjPHy',
        is_local: false,
        is_playable: true,
        name: 'Hello My Old Heart',
        popularity: 65,
        preview_url: 'https://p.scdn.co/mp3-preview/910ebbbe98672c77cfb41873799ddb95db363ab6?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:2c62Xf5Po1YSa1N6LOjPHy'
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/1qDDkysTxJvFandHwP9CMx'
              },
              href: 'https://api.spotify.com/v1/artists/1qDDkysTxJvFandHwP9CMx',
              id: '1qDDkysTxJvFandHwP9CMx',
              name: 'Noah Schnacky',
              type: 'artist',
              uri: 'spotify:artist:1qDDkysTxJvFandHwP9CMx'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/4ueD9HmKArqBLe9d5yEEDT'
          },
          href: 'https://api.spotify.com/v1/albums/4ueD9HmKArqBLe9d5yEEDT',
          id: '4ueD9HmKArqBLe9d5yEEDT',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273206eeefd687333b654ece807',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02206eeefd687333b654ece807',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851206eeefd687333b654ece807',
              width: 64
            }
          ],
          name: 'Hello Beautiful',
          release_date: '2018-01-27',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:4ueD9HmKArqBLe9d5yEEDT'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1qDDkysTxJvFandHwP9CMx'
            },
            href: 'https://api.spotify.com/v1/artists/1qDDkysTxJvFandHwP9CMx',
            id: '1qDDkysTxJvFandHwP9CMx',
            name: 'Noah Schnacky',
            type: 'artist',
            uri: 'spotify:artist:1qDDkysTxJvFandHwP9CMx'
          }
        ],
        disc_number: 1,
        duration_ms: 216992,
        explicit: false,
        external_ids: {
          isrc: 'QM24S1800768'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/1p61zyWNtBhbbAFzg4HUiq'
        },
        href: 'https://api.spotify.com/v1/tracks/1p61zyWNtBhbbAFzg4HUiq',
        id: '1p61zyWNtBhbbAFzg4HUiq',
        is_local: false,
        is_playable: true,
        name: 'Hello Beautiful',
        popularity: 63,
        preview_url: null,
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:1p61zyWNtBhbbAFzg4HUiq'

      }],
      found: false,
      responses: null,
      route: this.$route.params.id
    }
  },
  async mounted () {
    const req = new XMLHttpRequest()
    const name = this.route // this is the sessionid found in the URL
    const snapshot = await
    fireDb
      .collection('sessions')
      .where('result', '==', name)
      .get() // used to check if playlistid is already set
    const holder = []
    let flag = true // will be used later to see if playlist already exists
    snapshot.forEach((item) => {
      // checks to see if the item is undefined or not. set flag false if undefined
      if (typeof item.data().playlistid === 'undefined') {
        flag = false
      } else {
        // if item is defined this means that there is a current playlist on spotify
        holder.push(item.data().playlistid)
      }
    })
    if (flag === true) {
      // used in console developer tools:(ctrl + shift + i) google browser
      console.log('playlist already found: ' + holder)
    }
    //
    // this function is used to dectect change on the request
    //
    req.onreadystatechange = async function () {
      if (req.readyState === 4) {
        //
        // 4 means it responded
        // here checking to see if i got any errors
        // if its within this range no errors detected
        //
        if (req.status >= 200 && req.status <= 300) {
          console.log('success')
          //
          // this will take the response from the api and store it
          //
          this.responses = JSON.parse(req.responseText)
          console.log(name)
          //
          // once the response is stored we can pick out the fields we need
          // here i grabbed the playlistid from the creation
          // and stored it on the firebase for the current session
          //
          await fireDb.collection('sessions').doc(name).update({ playlistid: this.responses.id })
        } else {
          // errors were detected view dev tools
          console.log('failure')
        }
      }
    }
    if (flag === false) { // if playlist is not defined on firebase create playlist on spotify
      console.log('playlist not found! adding playlist to spotify')
      //
      // open http request (method: ,url: https://api.spotify.com/v1/users/{user_id}/playlists, async:)
      //
      req.open('post', 'https://api.spotify.com/v1/users/tphillips24-us/playlists', true)
      //
      // set header for use this format make sure to get access token I used
      // trim() so there were no trailing or beginning spaces
      //
      req.setRequestHeader('Authorization', 'Bearer ' +
        localStorage.getItem('spotify-access-token')
          .toString().trim())
      //
      // set Content-Type to application/json this can be found in spotify documentation
      //
      req.setRequestHeader('Content-Type', 'application/json')
      //
      // make sure to send data with JSON.stringify()
      // data: {name:,public,description}
      // there are more fields that are optional you can add to data {}
      //
      req.send(JSON.stringify(this.data))
    }
  },
  methods: {
    async addmember (name, track) {
      console.log(this.responses)
      // track: {track_id, track_title, track_artist, track_album}
      await this.session.addtoQueue(name, track)
    },
    async addfireDB () {
      const albumholder = []
      this.jsonTracks.forEach((album) => {
        albumholder.push(album)
      })
      console.log()
      for (let i = 0; i < albumholder.length; i++) {
        let song = {
          uri: this.jsonTracks[i].uri,
          url: this.jsonTracks[i].album.images[0].url,
          album_name: this.jsonTracks[i].album.name,
          track_name: this.jsonTracks[i].name,
          artist_name: this.jsonTracks[i].album.artists[0].name
        }
        await this.addmember('bob', song)
        song = {}
        await this.addTrack(this.jsonTracks[i].uri)
      }
    },
    async addTrack (uri) {
      this.songuri = {
        uris: [uri]
      }
      console.log('made it')
      const req = new XMLHttpRequest()
      const snapshot = await
      fireDb
        .collection('sessions')
        .where('result', '==', this.$route.params.id)
        .get() // used to check if playlistid is already set
      const holder = []
      let flag = true // will be used later to see if playlist already exists
      // get one Artist name this.jsonTracks[0].album.artists[0].name
      // get song name this.jsonTracks[0].name
      // get song Album name this.jsonTracks[0].album.name
      // get album img_URL this.jsonTracks[0].album.images[0].url
      // get song uri this.jsonTracks[0].uri)
      snapshot.forEach((item) => {
        // checks to see if the item is undefined or not. set flag false if undefined
        if (typeof item.data().playlistid === 'undefined') {
          flag = false
        } else {
          // if item is defined this means that there is a current playlist on spotify
          holder.push(item.data().playlistid)
        }
      })

      if (req.readyState === 4) {
        if (req.status >= 200 && req.status <= 300) {
          console.log('successfully added track!')
        } else {
          console.log('failed to add track!')
        }
      }
      if (flag === true) {
        req.open('post', '\thttps://api.spotify.com/v1/playlists/' + holder[0].toString().trim() + '/tracks', true)
        req.setRequestHeader('Authorization', 'Bearer ' +
          localStorage.getItem('spotify-access-token')
            .toString().trim())
        req.setRequestHeader('Content-Type', 'application/json')
        req.send(JSON.stringify(this.songuri))
      }
    }
  }
}

</script>
<style>
  .flex-container{
    display: flex;
    flex-wrap: wrap;
  }
  .flex-container .queue{
    width: 90% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  h4{
    color: white;
  }
  h5{
    color: white;
  }
  tr:nth-child(even) {background-color: RGB(75,75,75)
  ;}
  tr:nth-child(odd) {background-color: RGB(69,66,65)
  ;}
</style>
