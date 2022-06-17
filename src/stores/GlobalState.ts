import { observable, runInAction } from 'mobx'
import searchRes from '../mocks/search'

type GlobalType = {
  isMenuOpen: boolean
  isSearchOpen: boolean
  search: any
  locoScroll: any
  rating: any
  isTheraFilter: boolean
  theraFilterCount: number
  sortThera: {
    jobCat: Array<any>
    approach: Array<any>
    exper: Array<any>
    time: Array<any>
    locate: Array<any>
  }
}
const GlobalState: GlobalType = observable({
  isMenuOpen: false,
  isSearchOpen: false,
  search: null,
  locoScroll: null,
  rating: null,
  isTheraFilter: false,
  theraFilterCount: 0,
  sortThera: {
    jobCat: Array(),
    approach: Array(),
    exper: Array(),
    time: Array(),
    locate: Array(),
  },
})

export default GlobalState

export const changeTheraFilterState = () => {
  runInAction(() => {
    GlobalState.isTheraFilter = !GlobalState.isTheraFilter
  })
}

export const changeMenuState = () => {
  if (!GlobalState.isMenuOpen) {
    runInAction(() => {
      GlobalState.isSearchOpen = false
      GlobalState.search = null
    })
  }
  runInAction(() => {
    GlobalState.isMenuOpen = !GlobalState.isMenuOpen
  })
}

export const changeSearchState = () => {
  if (!GlobalState.isSearchOpen) {
    runInAction(() => {
      GlobalState.isMenuOpen = false
      GlobalState.search = null
    })
  }
  runInAction(() => {
    GlobalState.isSearchOpen = !GlobalState.isSearchOpen
    GlobalState.search = null
  })
}

export const search = async (text: string) => {
  try {
    const fd = new FormData()
    fd.append('text', text)
    fd.append('status', 'search')
    // let response = await fetch('/', {
    //   method: 'POST',
    //   body: new FormData(),
    // })

    // let res = await response.json();
    runInAction(() => {
      GlobalState.search = searchRes
    })
  } catch (e) {
    console.log(e)
  }
}

export const getReviewsIO = async () => {
  try {
    // let response = await fetch(
    //   'https://api.reviews.io/product/rating-batch?store=[STORE]&sku=SKUS;SEPERATED;BY;SEMI-COLON',
    //   {
    //     method: 'GET',
    //   },
    // )

    // let res = await response.json()
    runInAction(() => {
      GlobalState.rating = {
        average_rating: 4.5,
        num_ratings: 10,
      }
    })
  } catch (e) {
    console.log(e)
  }
}
