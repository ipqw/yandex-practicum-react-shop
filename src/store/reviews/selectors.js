import { Statuses } from "../../constants/statuses"

export const selectReviewsModule = (state) => state.reviews

export const selectReviews = (state) => 
    Object.values(selectReviewsModule(state).entities)

export const selectIsReviewsLoading = (state) => 
    selectReviewsModule(state).status == Statuses.inProgress

