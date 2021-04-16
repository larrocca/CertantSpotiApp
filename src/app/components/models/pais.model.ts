export class Pais {
    name: string;
    nataliti: number;
    capital: string;
    currencie: string;
    lenguages: string[];

    constructor(
        name: string,
        nataliti: number,
        capital: string,
        currencie: string,
        lenguages: string[],
    ) {
        this.name = name;
        this.nataliti = nataliti;
        this.capital = capital;
        this.currencie = currencie;
        this.lenguages = lenguages;
    }
}