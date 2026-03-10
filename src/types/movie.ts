export interface Movie {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
}
// Додатковий інтерфейс для відповіді від TMDB
export interface TMDBResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}