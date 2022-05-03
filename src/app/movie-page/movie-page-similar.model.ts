export interface SimilarMovies{
        page: number,
        results: [
          {
            adult: boolean,
            backdrop_path: string,
            genre_ids: [
              number
            ],
            id: number,
            original_language: string,
            original_title: string,
            overview: string,
            release_date: string,
            poster_path: string | null,
            popularity: number,
            title: string,
            video: false,
            vote_average: number,
            vote_count: number
          }
        ],
        total_pages: number,
        total_results: number
}