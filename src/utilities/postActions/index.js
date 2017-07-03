import saveToLocalStorage from './localStorage'
const postActions = (key, state, cb) => {
  saveToLocalStorage(key, state)
  if (cb) {
    cb()
  }
}

export default postActions
