import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

export const useJokesStore = defineStore('jokes', () => {
  const jokes = ref<Joke[]>([]);
  const isLoading = ref<boolean>(false);

  async function getJokes() {
    try {
      isLoading.value = true;
      const response = await axios.get< Joke[] >('https://official-joke-api.appspot.com/random_ten')
      jokes.value = response.data
      isLoading.value = false
      console.log(response, 'response')
    } catch (error) {
      console.error(error);
      isLoading.value = false
    }
  }

  return { jokes, getJokes, isLoading }
})
