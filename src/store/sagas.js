import { getTopHeadlineRequest } from "../api";
import { put, takeLatest, all } from "@redux-saga/core/effects";

function* getTopHeadline({ payload }) {
    try {
        const res = yield (getTopHeadlineRequest(payload))
        if (res.data.articles.length > 0) {
            yield put({
                type: 'API_SUCCESS',
                data: res.data
            })
        } else {
            yield put({ type: 'API_LIST_END' })
        }
    } catch (err) {
        yield put({
            type: 'API_FAILURE',
            error: err.message
        })
    }
}

function* topHeadlineSaga() {
    yield takeLatest('API_REQUEST', getTopHeadline);
}

export default function* rootSaga() {
    yield all([
        topHeadlineSaga(),
    ])
}