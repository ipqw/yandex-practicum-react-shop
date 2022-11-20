import { reviewsSlice } from "."
import { prepareData } from "../utils"
import { selectBooks } from "./selectors"

export const loadReviewsIfNotExist = (dispatch, getState) => {
    // if (selectBooks(getState())?.length > 0) {
    //     return
    // }
    dispatch(reviewsSlice.actions.startLoading())
    fetch('http://localhost:3001/api/reviews')
    .then((response) => response.json())
    .then(reviews => {
        dispatch(reviewsSlice.actions.successLoading(prepareData(reviews)))
    })
    .catch(() => {
        dispatch(reviewsSlice.actions.failLoading())
    })
}