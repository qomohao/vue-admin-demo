export default {
    /**
     * sessionStorage 相关
     */
    setSS: (key, val) => {
        sessionStorage.setItem(key, val instanceof Object ? JSON.stringify(val) : val)
    },
    getSS: (key) => {
        try {
            return JSON.parse(sessionStorage.getItem(key))
        } catch (error) {
            return null;
        }
    },
    removeSS: (key) => {
        sessionStorage.remove(key)
    },
    clearSS: () => {
        sessionStorage.clear()
    },
    /**
     * localStorage 相关
     */
    setLS: (key, val) => {
        localStorage.setItem(key, val instanceof Object ? JSON.stringify(val) : val)
    },
    getLS: (key) => {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch (error) {
            return null;
        }
    },
    removeLS: (key) => {
        localStorage.remove(key)
    },
    clearLS: () => {
        localStorage.clear()
    }
}