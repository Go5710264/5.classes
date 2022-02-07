class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	
	fix(){
		this.state *= 1.5;	
	}

	set state(condition) {
		if (condition < 0) {
			this._condition = 0;
		} else if (condition > 100) {
			this._condition = 100;
		} else {
			this._condition = condition;
		}
	}
	get state() {
		return this._condition;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount)
	}
	type = 'magazine';
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
		this.author = author;
	}
	type = 'book';
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
	}
	type = 'novel';
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
	}
	type = 'fantastic';
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
	}
	type = 'detective';
}

// Задача 2

class Library {

	constructor(name){
		this.name = name;
		this.books = [];
	}

	addBook(book){
		if(book.state > 30) {this.books.push(book)}
	}

	findBookBy(prop, value){

		// Рабочий цикл

		// for (let indexArr of this.books){
		// 	for (let [key, meaning] of Object.entries(indexArr)){
		// 		if (key === prop && meaning === value){
		// 			return indexArr;
		// 		}
		// 	}
		// }
		// return null;

		let bookSearch = this.books.find(indexArr => {
			for (let [key, meaning] of Object.entries(indexArr)){
				if (key === prop && meaning === value){
					return indexArr;			
				}
			}
		}); 
		
		if (bookSearch === undefined) {
				return null;
			} else {
				return bookSearch;
			}
	}

	giveBookByName(bookName){
		for (let indexArr of this.books){
			for (let [key, meaning] of Object.entries(indexArr)){
				if (meaning === bookName){
					this.books.splice(this.books.indexOf(indexArr), 1);
					return indexArr;
				}
			}
		}
		return null;
	}
}