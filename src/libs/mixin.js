import Vue from "vue"
Vue.mixin({
    data() {
        return {
            imgUrl: 'http://img3.imgtn.bdimg.com/it/u=3959692633,4152325680&fm=26&gp=0.jpg',
        }
    },
    methods: {
        /**
         * 路由跳转 push
         */
        goToPage(pathName, queryObj = {}, params = {}) {
            this.$router.push({
                name: pathName,
                query: queryObj,
                params
            });
        },
        /**
         * 路由跳转 replace
         */
        goTo(pathName, queryObj = {}, params = {}) {
            this.$router.replace({
                name: pathName,
                query: queryObj,
                params
            });
        },
        /**
         * 页面reload
         */
        reload() {
            location.href = location.href.split('#')[0]
        },
        /**
         *时间格式转换
         */
        formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            return [year, month, day].join('-');
        }
    }
})
