import { useState, useEffect } from "react";
import mockedResults from "../mockedData/books.json";
import bookType from "@/types/bookType";

const useFetchResults = () => {

    const [results, setResults] = useState <bookType[]> ([])

    useEffect(() => {
        async function fetchResults() {
            setResults(mockedResults)
        }
        
        fetchResults()}, [])


    return {
        results
    }
}

export default useFetchResults;