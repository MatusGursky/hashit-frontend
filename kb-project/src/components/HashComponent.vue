<template>
  <q-page padding class="flex flex-center">
    <q-card class="row q-pa-md" bordered>
      <q-card>
        <q-card-section>
          <div class="row items-center justify-center">
            <q-input type="textarea" :rows="20" dense
                     v-model="inputText"
                     label="Input Text"
                     filled style="width: 50vh;"
            />
          </div>
        </q-card-section>
      </q-card>
      <div class="col justify-center items-center">
        <q-select
          dense
          options-dense
          v-model="selectedHashFunction"
          :options="sortHashFunctions()"
          label="Hash Function"
          emit-value
          filled
          style="width: 20vh"
        />
      </div>
      <q-card>
        <q-card-section>
          <div class="col items-center justify-center">
            <q-input type="textarea" :rows="15" dense
                     v-model="hashedText"
                     :bg-color="sameHashes() ? 'green-2' : ''"
                     :label="'Hash ' + selectedHashFunction"
                     filled style="width: 50vh"
                     readonly
            >
              <template v-slot:append>
                <div class="flex" style="position: relative; top: 1rem; flex-direction: column">
                  <q-btn
                    class="q-mb-sm"
                    size="sm"
                    color="primary"
                    label="Save Hash"
                    @click="saveHash"
                    :disable="disableBtn"
                  />
                  <q-btn
                    size="sm"
                    label="Copy"
                    color="primary"
                    @click="copyHash"
                    :disable="disableBtn"
                  />
                </div>
              </template>
            </q-input>
            <q-input type="textarea" :rows="4" dense
                     v-model="previousHashText"
                     :label="'Saved hash ' + previousHashFunction"
                     :bg-color="sameHashes() ? 'green-2' : ''"
                     filled style="width: 50vh"
                     readonly
            />
          </div>
        </q-card-section>
      </q-card>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import {
  computed,
  ref, watch
} from 'vue'
import sha256 from 'crypto-js/sha256'
import sha512 from 'crypto-js/sha512'
import sha1 from 'crypto-js/sha1'
import sha384 from 'crypto-js/sha384'
import sha224 from 'crypto-js/sha224'
import sha3 from 'crypto-js/sha3'
import md5 from 'crypto-js/md5'

import {
  useHashStore
} from "stores/example-store"

const hashStore = useHashStore()

const inputText = ref<string>('')
const hashedText = ref<string>('')
const previousHashText = ref<string>('')
const previousHashFunction = ref<string>('')
const selectedHashFunction = ref<string>('')

const disableBtn = computed(() => {
  return !hashedText.value
})

const hashFunctions = [
  {
    label: 'SHA-256', value: 'SHA-256'
  },
  {
    label: 'SHA-512', value: 'SHA-512'
  },
  {
    label: 'SHA-1', value: 'SHA-1'
  },
  {
    label: 'SHA-384', value: 'SHA-384'
  },
  {
    label: 'SHA-224', value: 'SHA-224'
  },
  {
    label: 'SHA-3', value: 'SHA-3'
  },
  {
    label: 'MD5', value: 'MD5'
  }
]

const sortHashFunctions = () => {
  return hashFunctions.sort((a, b) => a.label.toLowerCase().localeCompare(b.label.toLowerCase()))
}

watch(() => inputText.value, () => {
  if (inputText.value.length === 0) {
    hashedText.value = ''
  }
})

const computeHash = async () => {
  if (!inputText.value || !selectedHashFunction.value) {
    return
  }
  switch (selectedHashFunction.value) {
    case 'SHA-256':
      hashedText.value = await hashStore.computeHashSHA256(inputText.value) // sha256(inputText.value).toString()
      break
    case 'SHA-512':
      hashedText.value = sha512(inputText.value).toString()
      break
    case 'SHA-1':
      hashedText.value = sha1(inputText.value).toString()
      break
    case 'SHA-384':
      hashedText.value = sha384(inputText.value).toString()
      break
    case 'SHA-224':
      hashedText.value = sha224(inputText.value).toString()
      break
    case 'SHA-3':
      hashedText.value = sha3(inputText.value).toString()
      break
    case 'MD5':
      hashedText.value = md5(inputText.value).toString()
      break
  }
}

const sameHashes = () => {
  if (!hashedText.value || !previousHashText.value) {
    return false
  }
  return hashedText.value === previousHashText.value
}

const saveHash = () => {
  if (!hashedText.value) {
    return
  }
  previousHashText.value = hashedText.value
  previousHashFunction.value = selectedHashFunction.value
}

const copyHash = () => {
  navigator.clipboard.writeText(hashedText.value || '')
}

watch(() => inputText.value, computeHash)
watch(() => selectedHashFunction.value, computeHash)
</script>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.col {
  flex: 1;
}

</style>
