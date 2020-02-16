export function createStore(reducer, enhancer) {
    // 增强createStore功能

    if (enhancer) {
        return enhancer(createStore)(reducer)
    }

    // 默认状态
    let state = undefined;
    // 保存回调函数
    let stateListeners = []

    function getState() {
        // 直接返回state
        return state
    }

    function dispatch(action) {
        state = reducer(state, action)
        // 变更通知
        stateListeners.map(v => v())
        return action
    }

    function subscribe(cb) {
        stateListeners.push(cb)
    }
    dispatch({
        type: "@@redux/12312312312"
    });
    return {
        getState,
        dispatch,
        subscribe
    }
}

export function applyMiddleware(...applyMiddlewares) {
    return createStore => (...args) => {
        // 创建store
        const store = createStore(...args);

        // 原生dispatch
        let dispatch = store.dispatch;
        const reduxApi = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        };

        // 增强dispatch
        const chain = applyMiddlewares.map(mw => mw(reduxApi));

        dispatch = compose(...chain)(store.dispatch);

        return {
            ...store,
            dispatch
        };
    }
}

// 聚合function 
export function compose(...funcs) {
    return funcs.reduce((left, right) => (...args) => {
        return right(left(...args))
    })
}