import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type {Joke} from "@/types.ts";

export const useJokesStore = defineStore('jokes', () => {
  const jokes = ref<Joke[]>([]);
  const isLoading = ref<boolean>(false);

  async function getJokes() {
    try {
      isLoading.value = true;
      const response = await axios.get< Joke[] >('https://official-joke-api.appspot.com/random_ten')
      if (jokes.value.length > 0) {
        jokes.value.push(...response.data);
      } else {
        jokes.value = response.data
      }

      isLoading.value = false
      console.log(response, 'response')
    } catch (error) {
      console.error(error);
      isLoading.value = false
    }
  }

  return { jokes, getJokes, isLoading }
})
