module.exports = (...params) => class infobip extends require('ut-port-http')(...params) {
    get defaults() {
        return {
            namespace: [
                'infobip'
            ],
            id: 'send'
        };
    }

    handlers() {
        return {
            send: async(msg, $meta) => {
                return {
                    payload: {
                        from: msg.from,
                        to: msg.to,
                        text: msg.text
                    },
                    json: true
                };
            },
            receive: async(msg, $meta) => {
                return msg.payload;
            }
        };
    }
};
