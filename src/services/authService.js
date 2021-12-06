export const Login = (username) => {

    localStorage.setItem('username',username)
}

export const getUser = () => {
    let username = localStorage.getItem('username')

    return username;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}