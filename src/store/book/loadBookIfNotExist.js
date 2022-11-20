import { bookSlice } from "."
import { prepareData } from "../utils"
import { selectBooks } from "./selectors"

export const loadBookIfNotExist = (dispatch, getState) => {
    if (selectBooks(getState())?.length > 0) {
        return
    }
    dispatch(bookSlice.actions.startLoading())
    fetch('https://shop-server-nyqa.vercel.app/api/books')
    .then((response) => response.json())
    .then(books => {
        dispatch(bookSlice.actions.successLoading(prepareData(books)))
        // console.log(books);
    })
    .catch(() => {
        dispatch(bookSlice.actions.failLoading())
    })
}