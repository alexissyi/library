function Book(title, author, pages, info, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    output = this.title + ", " + this.pages + " pages, ";
    if (read) {
      output += "already read";
    } else {
      output += "not read yet";
    }
    return output;
  };
}
