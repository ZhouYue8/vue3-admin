import { defineStore } from 'pinia'

interface UserState {
  foo: string
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    foo: 'bar',
  }),
  getters: {},
  actions: {},
  persist: {
    key: 'User_STORE',
    storage: window.sessionStorage,
  },
})
