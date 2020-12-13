/* 
The SRP requires that a class should have only one reason to change
and that each method performs just one task and is named in a way 
that reveals the intended behavior of the method
*/

namespace SingleResponsibilityPrinciple {
  class DataBase {
    save(movie: string) {
      console.log("Movie saved");
    }

    static connect(user: string, movies: string[]): DataBase {
      return new DataBase();
    }
  }

  class Movie {
    constructor(private title: string, private year: number) {}

    getTitle() {
      return this.title + " (" + this.year + ")";
    }
  }

  class MovieRepository {
    private db: DataBase;

    constructor() {
      this.db = DataBase.connect("user:pw@mydb", ["movies"]);
    }
    save(movie: Movie) {
      this.db.save(JSON.stringify(movie));
    }
  }

  // Movie
  const movie = new Movie("The Internship", 2013);

  // MovieRepository
  const movieRepository = new MovieRepository();
  movieRepository.save(movie);
}
