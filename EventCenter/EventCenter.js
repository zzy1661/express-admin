const EventEmitter = require('events');
const taskEventCenter = new EventEmitter();
taskEventCenter.on('createTask', (task,cb) => {
    console.log('create task');
    cb('create task result')
    
})
const serviceEventCenter = new EventEmitter();
serviceEventCenter.on('get user',(user,cb) => {
    console.log('get user');
    cb('get user result')
})
