class Movies {
    constructor() {
        this.Movies = []
    }
    getAllmovie() {
        return this.Movies
    }
    addMovie(title, year, director, genre) {
        if (!title || !year || !director || !genre) {
            return undefined;
        }
        let searchMovie = this.Movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase() &&
            movie.director.toLowerCase() === director.toLowerCase())
        if (searchMovie !== undefined) {
            return undefined;
        }
        const newMovie = {
            title: title,
            year: year,
            director: director,
            genre: genre,
        }
        this.Movies.push(newMovie)
        return newMovie;
    }
    updateMovie(title, updatedDetails) {
        let findMovie = this.movie.find((movie) => movie.title.toLowerCase() === title.toLowerCase())
        if (findMovie === undefined) {
            return findMovie;
        }
        let { year, director, genre } = updatedDetails
        if (year !== undefined) {
            findMovie.year = year;
        }
        if (director !== undefined) {
            findMovie.director = director;
        }
        if (genre !== undefined) {
            findMovie.genre = genre;
        }
        return findMovie;
    }

}