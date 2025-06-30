export interface IFilterItems {
    itemName: string,
    itemValue: string,
    itemSetValue: (val: string)=>void
    itemList?: string[] 
}
export interface IFilterComponent {
    items: IFilterItems[],
    action: ()=>void
}

export interface ISearch {
    action: ()=>void
}