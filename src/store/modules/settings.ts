import { settingsFace } from '../types'
import { MutationTree } from 'vuex'

const state: settingsFace = {
  showDev: false,
  isDark: false,
  showIndexAD: true
}

const mutations: MutationTree<settingsFace> = {
  CHANGE_DEV_FLAG(state, flag) {
    state.showDev = flag
  },
  /**
   * 取反设置 `showDev`
   */
  REVERRSE_DEV_FLAG(state) {
    state.showDev = !state.showDev
  },
  /**
   * 修改 `ui` 主题
   */
  CHANGE_UI_THEME(state, theme: boolean) {
    let style = {
      backgroundColor: 'rgba(0, 0, 0, .8)',
      color: '#fff',
      selectedColor: 'rgb(60, 197, 31)'
    }
    if (!theme) style = {
      backgroundColor: `rgba(255, 255, 255, 0.4)`,
      color: '#333',
      selectedColor: 'rgb(60, 197, 31)'
    }
    uni.setTabBarStyle(style)
    state.isDark = theme
  },
  CHANGE_INDEX_AD_FLAG(state, flag: boolean) {
    state.showIndexAD = flag
  }
}

export default {
  namespaced: true,
  state,
  mutations
}