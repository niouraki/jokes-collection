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

  async function getJokes() {
    try {
      console.log('here')
      const response = await axios.get< Joke[] >('https://official-joke-api.appspot.com/random_ten')
      jokes.value = response.data
      console.log(response, 'response')
    } catch (error) {
      console.error(error);
    }
  }

  return { jokes, getJokes }
})
