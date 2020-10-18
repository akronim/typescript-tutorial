var TUTORIAL = TUTORIAL || {};

TUTORIAL.classHeritage = (function () {
  interface Audio {
    play(): any;
  }

  // A class can implement multiple interfaces
  class Song implements Audio {
    constructor(private artist: string, private title: string) {}

    // The play method must be implemented
    play(): void {
      console.log("Playing " + this.title + " by " + this.artist);
    }

    static Comparer(a: Song, b: Song) {
      if (a.title === b.title) {
        return 0;
      }
      return a.title > b.title ? 1 : -1;
    }
  }

  class Playlist {
    constructor(public songs: Audio[]) {}

    play() {
      var song = this.songs.pop();
      song.play();
    }

    sort() {
      this.songs.sort(Song.Comparer);
    }
  }

  // A class can only inherit from a single superclass.
  // This class will gain all the properties and methods of the base class.
  class RepeatingPlaylist extends Playlist {
    private songIndex = 0;
    constructor(songs: Song[]) {
      super(songs);
    }

    // You can override a public member of the base class
    play() {
      this.songs[this.songIndex].play();
      this.songIndex++;
      if (this.songIndex >= this.songs.length) {
        this.songIndex = 0;
      }
    }
  }

  const songs = [
    new Song("Bushbaby", "Megaphone"),
    new Song("Delays", "One More Lie In"),
    new Song("Goober Gun", "Stereo"),
    new Song("Sohnee", "Shatter"),
    new Song("Get Amped", "Celebrity"),
  ];

  const repeatingPlaylist = new RepeatingPlaylist(songs);
  repeatingPlaylist.play();

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

/* 
    A method on a class can have fewer parameters than the interface specifies. 
    This allows a class to ignore arguments that it doesn’t require to execute 
    the method. Any parameters that are specified must match
    the parameters in the interface.
*/
