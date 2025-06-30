import { createContext, ReactNode, useState } from "react";

interface DataContextState {
    searchQuery : string,
    setSearchQuery : (value: string) => void,
    filterSources : string,
    setFilterSources : (value: string) => void,
    filterCategory : string,
    setFilterCategory : (value: string) => void,
    filterDateFrom : string,
    setFilterDateFrom : (value: string) => void,
    filterDateTo : string,
    setFilterDateTo : (value: string) => void,
}

export const DataContext = createContext<DataContextState | undefined>(undefined);

interface DataProviderProps {
    children : ReactNode
}

export const DataProvider =({children}: DataProviderProps)=>{
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [filterSources, setFilterSources] = useState<string>('')
    const [filterCategory, setFilterCategory] = useState<string>('')
    const [filterDateFrom, setFilterDateFrom] = useState<string>('')
    const [filterDateTo, setFilterDateTo] = useState<string>('')

    const dataCollection = {searchQuery, setSearchQuery, filterSources, setFilterSources, filterCategory, setFilterCategory, filterDateFrom, setFilterDateFrom, filterDateTo, setFilterDateTo};
    return (
        <DataContext.Provider value={dataCollection}>
            {children}
        </DataContext.Provider>
    )
}
