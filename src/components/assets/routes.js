/**
 * Created by zyupo on 2019/05/26
 * https://github.com/openspug/spug
 */
 
import Host from './Host.vue';
import HostExec from './HostExec.vue';

export default [
    {
        path: 'host',
        component: Host,
        meta: {
            permission: 'assets_host_view'
        }
    },
    {
        path: 'host_exec',
        component: HostExec,
        meta: {
            permission: 'assets_host_exec_view'
        }
    },

]
