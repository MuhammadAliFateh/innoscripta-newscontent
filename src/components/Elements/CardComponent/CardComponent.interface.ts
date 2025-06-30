export interface ISource {
    id: string,
    name: string
}
export interface ICardItem {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: ISource,
    urlToImage: string
    title: string
}
export interface ICardRequest {
    articles?: ICardItem[],
    localItem: string
}