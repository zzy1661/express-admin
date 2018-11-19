class Domain {
    
    constructor() {
        supper();
    }

    regist(actorClass,actionTypes,eventCenter) { //数组的情况
        this.eventCenter = eventCenter;
        actorClass.prototype.dispatch = (actionType) => {
            if(actionTypes.indexOf(actionType)) {
                this.dispatch(actionType);
            }
        }
    }
    dispatch(actionType) {
        eventCenter.emit(actionType)
    }
    

}
module.exports = Domain;