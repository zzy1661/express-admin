domain = {
    handler() {
        console.log('handler')
    },
    regist(cls) {
        cls.prototype.say = domain.handler;
    }
}
class P {
    say() {
        console.log('error not regist')
    }
}

class S extends P {
    
}
// domain.regist(S);
var s = new S();
s.say();
