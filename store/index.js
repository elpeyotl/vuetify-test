export const state = () => ({
    authenticated: false
})

export const mutations = {
    toggleAuthentication (state) {
        state.authenticated = !state.authenticated
        localStorage.setItem('loggedIn', state.authenticated);
    }
}

export const getters = {
    authStatus: (state) => {
        return state.authenticated
    }
}

