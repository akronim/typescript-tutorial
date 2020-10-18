var TUTORIAL = TUTORIAL || {};

// All classes in TypeScript have a constructor, whether you specify one or not.

TUTORIAL.constructors = (function () {
  class Song {
    // If you prefix a constructor parameter with an access modifier,
    // such as private, it will automatically be mapped for you
    constructor(private artist: string, private title: string) {}
    play() {
      console.log("Playing " + this.title + " by " + this.artist);
    }
  }

  class Jukebox {
    constructor(private songs: Song[]) {}
    play() {
      const song = this.getRandomSong();
      song.play();
    }
    private getRandomSong() {
      const songCount = this.songs.length;
      const songIndex = Math.floor(Math.random() * songCount);
      return this.songs[songIndex];
    }
  }

  const songs = [
    new Song("Bushbaby", "Megaphone"),
    new Song("Delays", "One More Lie In"),
    new Song("Goober Gun", "Stereo"),
    new Song("Sohnee", "Shatter"),
    new Song("Get Amped", "Celebrity"),
  ];

  const jukebox = new Jukebox(songs);

  jukebox.play();

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// Access Modifiers
// • private
// • protected
// • public