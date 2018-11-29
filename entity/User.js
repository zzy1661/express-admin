const Entity = require('DomainEntity.js');

class User extends Entity{

    constructor({id=null, name='',pw=''}) {
        this.id = id;
        this.name = name;
        this.pw = pw;
    }

    getTasks() {
        this.dispatch('queryAll')
    }

    getTaskById() {
        this.dispatch('queryById')
    }

    createTask(task) {

    }

    deleteTask(task) {

    }

    updateTask(task) {

    }

}
module.exports = User;