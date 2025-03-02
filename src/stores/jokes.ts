import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type {Joke} from "@/types.ts";

export const useJokesStore = defineStore('jokes', () => {
  const jokes = ref<Joke[]>([])
  const jokeCollection = ref<Joke[]>([])
  const isLoading = ref<boolean>(false)
  const showNotification = ref<boolean>(false)

  async function getJokes() {
    try {
      isLoading.value = true;
      showNotification.value = false
      const response = await axios.get< Joke[] >('https://official-joke-api.appspot.com/random_ten')

      if (jokes.value.length > 0) {
        jokes.value.push(...response.data);
      } else {
        jokes.value = response.data
      }

      isLoading.value = false
    } catch (error) {
      isLoading.value = false
      showNotification.value = true

      setTimeout(() => {
        showNotification.value = false;
      }, 3000)
    }
  }

  function saveJokeToCollection(currentJoke: Joke) {
    // if joke already in collection remove it
    if (jokeCollection.value.some(joke => joke.id === currentJoke.id)) {
      removeJokeFromCollection(currentJoke.id)
      return
    }

    jokeCollection.value.push(currentJoke)
  }

  function removeJokeFromCollection(jokeId:number) {
    jokeCollection.value = jokeCollection.value.filter(joke => joke.id !== jokeId);
  }

  return { jokes, jokeCollection, getJokes, isLoading, saveJokeToCollection, showNotification, removeJokeFromCollection }
})
