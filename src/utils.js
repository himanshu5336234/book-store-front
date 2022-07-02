


export const isLoggedIn = () => {
const Token =localStorage.getItem("Token")
console.log(Token)
}
exports.logout = () => { localStorage.clear(); window.location.reload() }
exports.getUserId = () => localStorage.getItem('id')
exports.getToken = () => localStorage.getItem('Token')