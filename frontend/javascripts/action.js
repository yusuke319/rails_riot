let action = {};
Object.defineProperties(action, {
    add: {
        value: function(name, act) {
            if(this[name]) throw "action_" + name +  " already defined";
            this[name] = {
                handler : {
                    name : "action_" + name,
                    action : act
                }
            }
        },
        enumerable: false,
        writable: false,
        configurable: false
    }
});

export default action
