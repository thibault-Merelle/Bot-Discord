import {injectable} from "inversify";

@injectable()
export class PingFinder {

    private regexp = 'hello robot';
    private test_word = 'hello';

    public isPing(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }

    public isTestWord(stringToSearch: string): boolean {
        return stringToSearch.search(this.test_word) >= 0;
    }
}