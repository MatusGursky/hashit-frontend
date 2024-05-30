import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useHashStore = defineStore('hash', {
  actions: {
    async computeHashSHA256 (text: string) {
      try {
        const response = await api.post('/hashes/sha256', { text })
        return response.data.hash
      } catch (error) {
        console.error('Error computing SHA256 hash:', error)
        throw error
      }
    }
  }
})
