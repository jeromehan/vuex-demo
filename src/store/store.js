import vuex from 'vuex'
import vue from 'vue'
import actions from './action'
import mutations from './mutation'
vue.use(vuex);
export default new vuex.Store({
    state:{
        amsg: '',
        bmsg: ''
    },
    actions,
    mutations,
    getters:{
        amsg(state){
            console.log(state)
            return state.amsg
        },
        bmsg(state){
            return state.bmsg
        }
    }
})