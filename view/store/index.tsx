import { CommonStore } from './common'
import { AuthStore } from './../pages/auth/store'

const store = {
  commonStore: new CommonStore(),
  authStore: new AuthStore(),
}

export default store
