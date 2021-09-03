import {servers} from "../consts/servers";

const liveStatsLoader = (id) => {
    return fetch(servers.filter(s => s.id === id)[0].api)
        .then(resp => resp.json())
}

export default liveStatsLoader;