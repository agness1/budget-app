export interface FinancialArticle {
    id: string;
    title: string;
    datePublished: string;
    content: {
        html: string;
    };
    img: {
        url: string;
    };
    author: {
        name: string;
        avatar: {
            url: string;
        };
    };
}