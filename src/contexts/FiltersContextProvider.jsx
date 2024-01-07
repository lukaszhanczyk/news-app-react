import {createContext, useContext, useState} from 'react'

const FiltersStateContext = createContext({
    filters: null,
    setFilters: () => {},
})

export const FiltersContextProvider = ({children}) => {

    const [filters, setFilters] = useState({})

    return (
        <FiltersStateContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersStateContext.Provider>
    )
}

export const useFiltersContextProvider = () => useContext(FiltersStateContext)
