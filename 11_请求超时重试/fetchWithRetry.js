const TIMEOUT_CODE = 10000

async function fetchWithRetryOnTimeout(fetchFuc) {
    try {
        let res = await fetchFuc()
        return res;
    } catch (error) {
        if (error.code !== TIMEOUT_CODE) {
            throw error;
        }
        return await poll(fetchFuc, 1000, 10000, Date.now());
    }
}

async function poll(fetchFuc, pollInterval, maxTimeout, firstTime) {
    return new Promise((resolve, reject) => {
        if (Date.now() - firstTime > maxTimeout) {
            let error = new Error("请求超时");
            error.code = TIMEOUT_CODE;
            reject(error);
        }
        setTimeout(() => {
            fetchFuc().then(resolve).catch(error => {
                if (error.code !== TIMEOUT_CODE) {
                    reject(error);
                }
                poll(fetchFuc, pollInterval, maxTimeout, firstTime).then(resolve).catch(reject)
            })
        }, pollInterval)
    })
}