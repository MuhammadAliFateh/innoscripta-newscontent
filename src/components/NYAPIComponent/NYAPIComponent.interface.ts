import { ICardItem } from "../Elements/CardComponent/CardComponent.interface"

export interface NYAPISourceItem {
    id: string,
    name: string,
    category: string,
}
export interface NYAPISourceResponse {
    items: NYAPISourceItem[]
}
export interface INYAPIResponse {
    articles: ICardItem[],
    sourceItem: string[],
    categoryItem: string[]
}