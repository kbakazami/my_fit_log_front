export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        // for Spring Boot backend
        return { Authorization: 'Bearer ' + user.token };

        // for Node.js Express backend
       // return { 'x-access-token': user.token };
    } else {
        return {};
    }
}