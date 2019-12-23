
import "jest";
import configurateMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter'

import { getReposStarred, LOADING_REPO_STARRED, REPO_STARRED } from "../../src/redux/actions/repos";
import { getUser } from "../../src/redux/actions/user";

import { INITIAL_STATE } from "../../src/redux/reducers/repos";
import { INITIAL_STATE as INITIAL_STATE_USER } from "../../src/redux/reducers/user"
import { INITIAL_STATE as INITIAL_STATE_AUTH } from "../../src/redux/reducers/auth"


import { api } from "../../src/redux/actions/api";
import { USER_NAME, login } from "../../src/redux/actions/auth";

const middlewares = [thunk];
const mockStore = configurateMockStore(middlewares);

describe("async actions", () => {

    var mock = new MockAdapter(api);

    afterAll(() => {
        mock = new MockAdapter(api)
        localStorage.setItem(USER_NAME, "darlison-alves")
    })

    beforeAll(() => {
        localStorage.clear()
    })

    describe("Repos", () => {
        it("should return the array of repositories", () => {
            localStorage.setItem(USER_NAME, "darlison-alves")
            const data = [{ full_name: "nome completo do repositoório", stargazers_count: 45 }]

            mock.onGet("https://api.github.com/users/darlison-alves/starred").reply(200, data);

            const store = mockStore(INITIAL_STATE)

            return store.dispatch(getReposStarred()).then(value => {
                expect(store.getActions()).toEqual([
                    { type: LOADING_REPO_STARRED },
                    { type: REPO_STARRED, payload: data }
                ])
            })
        })
    })

    describe("User", () => {

        it("should return the data of user", () => {
            localStorage.setItem(USER_NAME, "darlison-alves")
            const data = { full_name: "nome completo do repositoório", stargazers_count: 45 }

            mock.onGet("https://api.github.com/users/darlison-alves").reply(200, data)

            const store = mockStore({ user: INITIAL_STATE_USER })

            return store.dispatch(getUser()).then(value => {
                expect(store.getActions()).toEqual([
                    {
                        "payload": {
                            "full_name": "nome completo do repositoório",
                            "stargazers_count": 45,
                        },
                        "type": "SUCCESS_USER",
                    }

                ])
            })
        })
    })

    describe("Auth", () => {
        it("should verify the user login and retrieve their data", () => {

            const data = { username: "darlison-alves", full_name: "nome completo do repositoório", stargazers_count: 45 };

            mock.onGet("https://api.github.com/users/darlison-alves").reply(200, data);

            const stores = mockStore(INITIAL_STATE_AUTH);

            return stores.dispatch(login({ username: "darlison-alves" })).then(value => {
                
                expect(stores.getActions()).toEqual([{ type: 'LOGIN_LOADING' },
                {
                    type: 'LOGIN_SUCCESS',
                    user:
                    {
                        username: 'darlison-alves',
                        full_name: 'nome completo do repositoório',
                        stargazers_count: 45
                    }
                },
                {
                    type: 'SUCCESS_USER',
                    payload:
                    {
                        username: 'darlison-alves',
                        full_name: 'nome completo do repositoório',
                        stargazers_count: 45
                    }
                }]
                )
            })

        })
    })

})
