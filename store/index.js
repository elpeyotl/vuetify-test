export const state = () => ({
    authenticated: false
})

export const mutations = {
    toggleAuthentication (state) {
        state.authenticated = !state.authenticated
    }
}