import { MovieInfo} from '../movie-info/movie-info.model'

export interface Preferences{
    page: number,
    results: MovieInfo[],
    total_results: number,
    total_pages: number
}