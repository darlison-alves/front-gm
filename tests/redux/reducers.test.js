import auth from '../../src/redux/reducers/auth'
import user from '../../src/redux/reducers/user'
import repos from '../../src/redux/reducers/repos'

import { LOGIN_SUCCESS, LOGIN_FAILED } from '../../src/redux/actions/auth';
import { SUCCESS_USER, FAILED_USER } from '../../src/redux/actions/user';
import { REPO_STARRED, REPO_STARRED_FAILED } from '../../src/redux/actions/repos';

describe("reducers", () => {
    var userState = { login: "darlison-alves", url: "http://github.com.br/darlison-alves" }


    describe("auth", () => {
        it("should return the initial state", () => {
            expect(auth(undefined, {})).toEqual({
                data: {},
                error: null,
                loading_data_user: false
            })
        })

        it("should handle LOGIN_SUCCESS", () => {
            expect(auth(undefined, { type: LOGIN_SUCCESS, user: userState }))
                .toEqual({
                    data: userState,
                    error: null,
                    loading_data_user: false
                })
        })

        it("should handle LOGIN_FAILED", () => {
            expect(auth(undefined, { type: LOGIN_FAILED, error: "Not Found" }))
                .toEqual({
                    data: {},
                    error: "Not Found",
                    loading_data_user: false
                })
        })
    })

    describe("user", () => {
        it("should return the initial state", () => {
            expect(user(undefined, {})).toEqual({
                data: {},
                loading_user: false
            })
        })

        it("should handle SUCCESS_USER", () => {
            expect(user(undefined, { type: SUCCESS_USER, payload: userState })).toEqual({
                data: userState,
                loading_user: false
            })
        })

        it("should handle FAILED_USER", () => {
            expect(user(undefined, { type: FAILED_USER, payload: "Not found" }))
                .toEqual({
                    data: {},
                    error: "Not found",
                    loading_user: false
                })
        })
    })

    describe("repos", () => {
        it("should return the initial state", () => {
            expect(repos(undefined, {})).toEqual({
                data: [],
                loading_repo: false,
                error: null
            })
        })

        it("should handle REPO_STARRED", () => {
            const reposlist = { "nome":"nome do repositorio", "start": 41 }

            expect(repos(undefined, { type: REPO_STARRED, payload: [reposlist] }))
            .toEqual({
                data: [reposlist],
                loading_repo: false,
                error: null
            })
        })

        it("should handle REPO_STARRED_FAILED", () => {
            expect(repos(undefined, { type: REPO_STARRED_FAILED, payload: "Error ocorreu" }))
            .toEqual({
                data: [],
                loading_repo: false,
                error: "Error ocorreu"
            })
        })

        
    })


})

