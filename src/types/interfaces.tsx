export interface Movie {
    id: number,
    overview: string,
    poster: string,
    release_date: string,
    title: string
}

export interface UserPrefs {
    genre: string,
    era: string,
    runtime: string
}