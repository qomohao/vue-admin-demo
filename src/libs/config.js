const config = {
    // 开发环境
    development: {
        baseURL: ''
    },
    // 生产环境
    production: {
        prod: {
            baseURL: ''
        },
        beta: {
            baseURL: ''
        },
        dev: {
            baseURL: ''
        }
    },
}
export default process.env.NODE_ENV == 'production' ?
    config[process.env.NODE_ENV][process.env.VUE_APP_CURRENTMODE] :
    config[process.env.NODE_ENV]