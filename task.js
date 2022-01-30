class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
	}
	state = 100;
	type = null;
	fix(){
		return state * 1,5
	}
}