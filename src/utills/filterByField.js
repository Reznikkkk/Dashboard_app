export function filterByField (state, payload, field) {
    const lowerCasedName = payload.trim().toLowerCase();
    return state.filter((user) => user[field].toLowerCase().includes(lowerCasedName))
}