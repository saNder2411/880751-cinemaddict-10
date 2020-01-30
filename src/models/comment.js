export default class Comment {
  constructor(data) {
    this.id = data[`id`];
    this.author = data[`author`];
    this.comment = data[`comment`];
    this.date = data[`date`];
    this.emotion = data[`emotion`];
  }

  toRAW() {
    return {
      "id": this.id,
      "author": this.author,
      "comment": this.comment,
      "date": this.date,
      "emotion": this.emotion,
    };
  }

  static parseComment(result) {
    return new Comment(result);
  }

  static parseComments(result) {
    return result.map(Comment.parseComment);
  }
}
