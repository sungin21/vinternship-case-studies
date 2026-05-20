// ======================
// NewsSource Interface
// ======================

interface NewsSource {

    fetchArticles():
        Promise<string[]>;
}


// ======================
// RSS Feed Source
// ======================

class RSSFeedSource
implements NewsSource {

    async fetchArticles():
        Promise<string[]> {

        return [
            "RSS: Article 1",
            "RSS: Article 2"
        ];
    }
}


// ======================
// API Source
// ======================

class APISource
implements NewsSource {

    async fetchArticles():
        Promise<string[]> {

        return [
            "API: Article A",
            "API: Article B"
        ];
    }
}


// ======================
// Mock Source
// ======================

class MockSource
implements NewsSource {

    async fetchArticles():
        Promise<string[]> {

        return [
            "Mock: Test Article"
        ];
    }
}


// ======================
// Simple IoC Container
// ======================

class Container {

    private static services:
        Map<string, any> =
        new Map();

    static register(
        key: string,
        value: any
    ): void {

        this.services.set(
            key,
            value
        );
    }

    static resolve<T>(
        key: string
    ): T {

        return this.services.get(
            key
        );
    }
}


// ======================
// News Aggregator
// ======================

class NewsAggregator {

    constructor(
        private source:
        NewsSource
    ) {}

    async getLatestArticles():
        Promise<void> {

        const articles =
            await this.source.fetchArticles();

        console.log(
            "Latest Articles:"
        );

        articles.forEach(
            (article) => {

                console.log(article);
            }
        );
    }
}


// ======================
// Register RSS Source
// ======================

Container.register(
    "NewsSource",
    new RSSFeedSource()
);


const rssSource =
    Container.resolve<NewsSource>(
        "NewsSource"
    );

const aggregator1 =
    new NewsAggregator(
        rssSource
    );

aggregator1.getLatestArticles();


// ======================
// Swap to API Source
// ======================

Container.register(
    "NewsSource",
    new APISource()
);


const apiSource =
    Container.resolve<NewsSource>(
        "NewsSource"
    );

const aggregator2 =
    new NewsAggregator(
        apiSource
    );

aggregator2.getLatestArticles();


// ======================
// Inject Mock Source
// ======================

Container.register(
    "NewsSource",
    new MockSource()
);


const mockSource =
    Container.resolve<NewsSource>(
        "NewsSource"
    );

const testAggregator =
    new NewsAggregator(
        mockSource
    );

testAggregator.getLatestArticles();
