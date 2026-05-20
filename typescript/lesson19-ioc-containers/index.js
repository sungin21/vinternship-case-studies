"use strict";
// ======================
// NewsSource Interface
// ======================
// ======================
// RSS Feed Source
// ======================
class RSSFeedSource {
    async fetchArticles() {
        return [
            "RSS: Article 1",
            "RSS: Article 2"
        ];
    }
}
// ======================
// API Source
// ======================
class APISource {
    async fetchArticles() {
        return [
            "API: Article A",
            "API: Article B"
        ];
    }
}
// ======================
// Mock Source
// ======================
class MockSource {
    async fetchArticles() {
        return [
            "Mock: Test Article"
        ];
    }
}
// ======================
// Simple IoC Container
// ======================
class Container {
    static services = new Map();
    static register(key, value) {
        this.services.set(key, value);
    }
    static resolve(key) {
        return this.services.get(key);
    }
}
// ======================
// News Aggregator
// ======================
class NewsAggregator {
    source;
    constructor(source) {
        this.source = source;
    }
    async getLatestArticles() {
        const articles = await this.source.fetchArticles();
        console.log("Latest Articles:");
        articles.forEach((article) => {
            console.log(article);
        });
    }
}
// ======================
// Register RSS Source
// ======================
Container.register("NewsSource", new RSSFeedSource());
const rssSource = Container.resolve("NewsSource");
const aggregator1 = new NewsAggregator(rssSource);
aggregator1.getLatestArticles();
// ======================
// Swap to API Source
// ======================
Container.register("NewsSource", new APISource());
const apiSource = Container.resolve("NewsSource");
const aggregator2 = new NewsAggregator(apiSource);
aggregator2.getLatestArticles();
// ======================
// Inject Mock Source
// ======================
Container.register("NewsSource", new MockSource());
const mockSource = Container.resolve("NewsSource");
const testAggregator = new NewsAggregator(mockSource);
testAggregator.getLatestArticles();
