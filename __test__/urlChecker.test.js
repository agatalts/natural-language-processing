
import { checkForUrl } from "../src/client/js/urlChecker"

describe("test if url is valid", () => {
    
    test("valid url test", () => {
        expect(checkForUrl("https://www.bbc.com/worklife/article/20210401-how-to-stay-awake-and-alert-at-work")).toBe(true);
    });

    test("valid url test", () => {
        expect(checkForUrl("https://news.sky.com/story/covid-19-uk-records-further-52-coronavirus-related-deaths-and-3-402-new-cases-12263786/")).toBe(true);
    });

    test("valid url test", () => {
        expect(checkForUrl("dictionary.cambridge.org/dictionary/english/volcano")).toBe(true);
    });

    test("valid url test", () => {
        expect(checkForUrl("www.foxnews.com/entertainment/duck-dynasty-willie-korie-robertson-new-show")).toBe(true);
    });

    test("invalid url test", () => {
        expect(checkForUrl("htt://www.google.com")).toBe(false);
    });
});