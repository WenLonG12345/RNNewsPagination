export const topHeadlineRequest = (params) => ({
    type: 'API_REQUEST',
    payload: {
        country: params.country,
        page: params.page,
    }
})