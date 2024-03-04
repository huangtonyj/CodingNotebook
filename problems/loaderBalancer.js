class LoaderBalancer {
    constructor(servers) {
        this.servers = servers.map((server) => {
            const [serverId, maxLoad] = server;
            return new Server(serverId, maxLoad)
        });
    }

    route(weight, ttl) {
        const severToRoute = this._getFirstLeastLoadServer(weight);
        
        if (severToRoute) {
            severToRoute.process(weight, ttl);
            return severToRoute;
        } else {
            return null; // No avaliable server, maybe try again or spin up another server
        }
    }

    _getFirstLeastLoadServer(weight) {
        let selectedServer = null;

        for (let server of this.servers) {
            if (server.capacity >= weight) return server;
        }

        return selectedServer;
    }
}

class Server {
    constructor(serverId, maxLoad) {
        this.serverId = serverId;
        this.maxLoad = maxLoad;
        this.capacity = maxLoad;
    }

    process(weight, ttl) {
        if (this.capacity < this.weight) throw new Error("Not enough capacity");
        
        this.capacity -= weight
        setTimeout(() => this.capacity += weight, ttl)
    }
}


const lb = new LoaderBalancer([ // [serverId, maxLoad]
    ['a', 1000],
    ['b', 500],
    ['c', 500]
]);

console.log(lb.route(500, 10), "a");
console.log(lb.route(500, 10), "a");
console.log(lb.route(500, 10), "b");
console.log(lb.route(500, 10), "c");
console.log(lb.route(500, 10), null);

setTimeout(() => {
    console.log(lb.route(500, 10), null);
}, 5)

setTimeout(() => {
    console.log(lb.route(500, 10), "a");
}, 10)
setTimeout(() => {
    console.log(lb.route(500, 10), "a");
}, 10)
setTimeout(() => {
    console.log(lb.route(500, 10), "b");
}, 10)
setTimeout(() => {
    console.log(lb.route(500, 10), "c");
}, 10)
setTimeout(() => {
    console.log(lb.route(500, 10), null);
}, 10)