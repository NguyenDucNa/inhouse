import { useEffect, useState } from "react";

export default function usePagination(length : number){
    const [perPage, setPerPage] = useState<number>(10);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState<number>(0);
    const [buttonNumberDisplay, setButtonNumberDisplay] = useState(5);

    useEffect(() => {
        setSize(length)
    },[length]);
    
    const updatePerPage = (newPerPage: number) => {
        setPerPage(newPerPage);
    }

    const updateCurrent = (newCurrent: number) => {
        setCurrent(newCurrent);
    }

    const updateSize = (newSize: number) => {
        setSize(newSize);
    }

    const updateButtonNumberDisplay = (newButtonNumberDisplay: number) => {
        setButtonNumberDisplay(newButtonNumberDisplay)
    }

    return {
        infor : {
            perPage,
            size,
            current,
            buttonNumberDisplay,
        },
        updateCurrent,
        updateSize,
        updatePerPage,
        updateButtonNumberDisplay
    }
}