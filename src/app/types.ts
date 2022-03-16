export class Card {
    id!: number;
    title!: string;
    overview!: string;
    poster_path!: string;
    genres!: Genre[];
    release_date!: Date;
    original_language!: string;
    vote_average!: number;
}

export class Genre {
    id!: number;
    name!: string
}