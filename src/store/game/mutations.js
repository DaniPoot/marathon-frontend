export const setDifficulties = (state, difficulties) => {
  state.difficulties = difficulties 
}

export const setTopics = (state, topics) => {
  state.topics = topics
}

export const setAjustmen = (state, ajustmen) => {
  state.ajustmen = ajustmen
}

export const clearGame = (state) => {
  state = {
    topics: [],
    difficulties: [],
    ajustmen: undefined,
    userPoints: 0,
    ignorancePoints: 0
  }
}

export const resetPoints = (state) => {
  state.userPoints = 0
  state.ignorancePoints = 0
}

export const addPointToUser = (state) => {
  state.userPoints++
}

export const addPointToIgnorance = (state, ajustmen) => {
  state.ignorancePoints++
}
