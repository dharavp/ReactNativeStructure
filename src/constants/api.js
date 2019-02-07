const isLive = true;
const baseUrl = isLive ? 'https://www.liveurl.com/' : 'https://www.betaurl.com/'
const api = {
    login: `${baseUrl}api1`,
    signup: `${baseUrl}api2`
}

export default api;