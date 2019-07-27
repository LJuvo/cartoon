const { hostname, port, protocol } = window.location;
const restUrl =
    process.env.NODE_ENV === "production" ?
    `${protocol}//${hostname}:${port}/` :
    `http://192.168.28.42:8080`;

export default {
    projectName: "Cartoon",
    copyright: "© 2019 All Rights Reserved Cartoon",
    enableAuth: false,

    http: {
        baseURL: restUrl,
        timeout: 10 * 1000,
        noToken: false,
        showSpin: true
    }
};