import { defineStore } from 'pinia'

// 定義一個叫做 settings 的 store
export const useSettingsStore = defineStore('app', {
  // 這個 store 的資料，必須要寫成 function return
  state: () => ({
    alarms: [
      {id: 1, name: 'alarm', file: new URL('@/assets/alarm.mp3', import.meta.url).href},
      {id: 2, name: 'yay', file: new URL('@/assets/yay.mp3', import.meta.url).href}
    ],
    images: [
      {id: 1, name: 'normal', file: new URL('@/assets/bg1.jpg', import.meta.url).href},
      {id: 2, name: 'sunset', file: new URL('@/assets/bg2.jpg', import.meta.url).href},
      {id: 3, name: 'night', file: new URL('@/assets/bg3.jpg', import.meta.url).href},
      {id: 4, name: 'morning', file: new URL('@/assets/bg4.jpg', import.meta.url).href},
    ],
    selectedAlarm: 1,
    selectedBG: 1,
    notify: false
  }),
  getters: {
    selectedAlarmFile() {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarm)
      return this.alarms[i].file
    },
    selectedBGFile () {
      const i = this.images.findIndex(image => image.id === this.selectedBG)
      return this.images[i].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    paths: [
      'selectedAlarms', 'selectedBG', 'notify'
    ]
  }
})
