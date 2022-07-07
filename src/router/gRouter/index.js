import {inject, ref} from 'vue'
import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'

const ROUTER_KEY = '__router__'

function createWebHashHistory() {
    function bindEvent(fn) {
        window.addEventListener('hashchange', fn)
    }
    return {
        bindEvent,
        url: window.location.hash.slice(1) || '/'
    }
}

class Router {
    constructor(options) {
        this.history = options.history
        this.routes = options.routes
        this.current = ref(this.history.url)

        this.history.bindEvent(() => {
            this.current.value = window.location.hash.slice(1)
        })
    }
    install(app) {
        app.provide(ROUTER_KEY, this)
        app.component('router-link', RouterLink)
        app.component('router-view', RouterView)
    }
}

function createRouter(options) {
    return new Router(options)
}

function useRouter() {
    return inject(ROUTER_KEY)
}

export {createWebHashHistory, createRouter, useRouter}