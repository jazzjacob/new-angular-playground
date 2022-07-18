export class Movie {
  public title: string;
  public director: string;
  public cinematographer: string;

  constructor(title: string, director: string, cinematographer: string) {
    this.title = title;
    this.director = director;
    this.cinematographer = cinematographer;
  }
}