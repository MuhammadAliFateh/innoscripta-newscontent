export interface newsAPISourceItem {
    id: string,
    name: string,
    category: string,
}
export interface newsAPISourceResponse {
    items: newsAPISourceItem[]
}