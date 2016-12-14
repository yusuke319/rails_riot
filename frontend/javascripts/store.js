let store = {};
Object.defineProperties(store, {
    add: {
        value: function(name, act, defaultData) {
            if(this[name]) throw "store_" + name +  " already defined";
            this[name] = {
                data: defaultData,
                handler : {
                    name : "store_" + name
                }
            };
            this[name].handler.action = act.bind(this[name]);
        },
        enumerable: false,
        writable: false,
        configurable: false
    }
});

export default store
