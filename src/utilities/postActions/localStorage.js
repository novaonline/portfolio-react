export const LOCAL_STORAGE = 'localStorage'
export const INIT_STATE = 'initState'

export const EDUCATION = 'EDUCATION_CONTENT'
export const EXPERIENCE_FRAMEWORKS = 'EXPERIENCE_FRAMEWORKS_CONTENT'
export const EXPERIENCE_HIGHLIGHTED = 'EXPERIENCE_HIGHLIGHTED_CONTENT'
export const EXPERIENCE_LANGUAGE = 'EXPERIENCE_LANGUAGE_CONTENT'
export const EXPERIENCE_RANKS = 'EXPERIENCE_RANKS'
export const LAYOUT = 'LAYOUT_CONTENT'
export const CONTACT = 'CONTACT_CONTENT'
export const INTERESTS = 'INTERESTS_CONTENT'

export const saveToLocalStorage = (key, state) => {
  if (storageAvailable(LOCAL_STORAGE)) {
    // Yippee! We can use localStorage awesomeness
    localStorage.setItem(key, JSON.stringify(state))
  } else {
    // Too bad, no localStorage for us
  }
}
export const getFromLocalStorage = (key) => {
  if (storageAvailable(LOCAL_STORAGE)) {
    return JSON.parse(localStorage.getItem(key))
  } else {
    return null
  }
}

export const clearFromLocalStorage = () => {
  // quick helper for beta phase
  if (storageAvailable(LOCAL_STORAGE)) {
    localStorage.removeItem(EDUCATION)
    localStorage.removeItem(EXPERIENCE_FRAMEWORKS)
    localStorage.removeItem(EXPERIENCE_HIGHLIGHTED)
    localStorage.removeItem(EXPERIENCE_LANGUAGE)
    localStorage.removeItem(EXPERIENCE_RANKS)
    localStorage.removeItem(LAYOUT)
    localStorage.removeItem(CONTACT)
    localStorage.removeItem(INTERESTS)
    window.location.reload()
  }
}

export const storageAvailable = (type) => {
  const storage = window[type]
  try {
    const x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
  }
}

export default saveToLocalStorage
