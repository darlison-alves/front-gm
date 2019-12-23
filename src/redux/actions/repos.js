import { api } from "./api";
import { getUsername } from "./auth";

export const LOADING_REPO_STARRED = 'LOADING_REPO_STARRED'
export const REPO_STARRED = 'REPO_STARRED'
export const REPO_STARRED_FAILED = 'REPO_STARRED_FAILED'

export const getReposStarred = () => dispatch => {
    const username = getUsername();
    dispatch({ type: LOADING_REPO_STARRED })
    return api.get(`/users/${username}/starred`).then(res => {
        return dispatch({ type: REPO_STARRED, payload: res.data })
    }).catch(error => {
        return dispatch({ type: REPO_STARRED_FAILED, error })
    })
}