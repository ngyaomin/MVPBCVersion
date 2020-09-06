module.exports = {
    networks: {
        ganache: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        },
        dev: {
            host: "localhost",
            port: 7545,
            network_id: "*" // Match any network id
        }
    }
};
