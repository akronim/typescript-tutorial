namespace PropertiesAndMethods {
  class Song {
    // If you prefix a constructor parameter with an access modifier,
    // such as private, it will automatically be mapped for you
    constructor(public artist: string, public title: string) {}
    play() {
      console.log("Playing " + this.title + " by " + this.artist);
    }
  }

  class Playlist {
    // Instance properties are typically declared before
    // the constructor in a TypeScript class.
    // Instance properties can be accessed from within the class
    // using the this keyword.
    private songs: Song[] = [];

    // If the property is public it can be accessed using
    // the instance name.
    public songsTotal: number = 0;

    static readonly maxSongCount = 30;

    constructor(public name: string) {}

    // Methods are defined a lot like functions, but
    // they leave out the function keyword.
    addSong(song: Song) {
      if (this.songs.length >= Playlist.maxSongCount) {
        throw new Error("Playlist is full");
      }
      this.songs.push(song);
      this.songsTotal = this.songs.length;
    }

    static printName(name: string): void {
      console.log(name);

      // Error: static members have no access to nonstatic properties or methods
      // console.log(this.songs.length);
    }
  }

  // Creating a new instance
  const playlist = new Playlist("My Playlist");

  // Accessing a public instance property
  const name = playlist.name;

  Playlist.printName(playlist.name);

  // Calling a public instance method
  playlist.addSong(new Song("Therapy?", "Crooked Timber"));

  // Accessing a public static property
  const maxSongs = Playlist.maxSongCount;

  // Accessing a public instance property
  console.log(playlist.songsTotal);

  // Error: Cannot assign to a readonly property
  //Playlist.maxSongCount = 20;
}

namespace PropertyGettersAndSetters {
  // property getters and setters allow you to wrap property
  // access with a method

  // Accessors are only available when targeting ECMAScript 5 and higher

  interface StockItem {
    description: string;
    asin: string;
  }

  class WarehouseLocation {
    private _stockItem!: StockItem;
    constructor(public aisle: number, public slot: string) {}
    get stockItem() {
      return this._stockItem;
    }
    set stockItem(item: StockItem) {
      this._stockItem = item;
    }
  }

  const figure = { asin: "B001TEQ2PI", description: "Figure" };

  const warehouseSlot = new WarehouseLocation(15, "A6");

  warehouseSlot.stockItem = figure;

  console.log(warehouseSlot.stockItem);
}

// tsc --target ES5 propsAndMethods.ts --outFile ../app.js --watch
