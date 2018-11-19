const actionTypes = {
    LOGIN: 0,
    LOGOUT: 1,
    REGIST: 2,
    CREATETASK: 3,
    DELETETASK: 4,
    FINISHTASK: 5,
    UPDATETASK: 6,
    GETTASK: 7
}

const userActionTypes = function (role) {
    const copy = JOSN.parse(JOSN.stringify(role));
    return copy;
}