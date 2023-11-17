function solution(tickets) {
    let routes = {};

    tickets.forEach(([from, to]) => {
        if (!routes[from]) {
            routes[from] = [];
        }
        routes[from].push(to);
    });

    for (let airport in routes) {
        routes[airport].sort();
    }

    const path = [];

    function dfs(airport) {
        while (routes[airport] && routes[airport].length > 0) {
            dfs(routes[airport].shift());
        }
        path.push(airport);
    }

    dfs('ICN');

    return path.reverse();

}
