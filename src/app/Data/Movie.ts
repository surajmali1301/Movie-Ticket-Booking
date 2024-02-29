export default class Movie {
  constructor(
    public id: number,
    public titre: string,
    public description: string,
    public genre: string,
    public releaseDate: string,
    public duration: number,
    public rating: number
  ) {}
}
