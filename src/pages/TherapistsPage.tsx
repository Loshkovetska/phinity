import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import DBStore, {
  filterTherapists,
  getCategories,
  getReviews,
  getTherapists,
  getTherapistsFilters,
} from '../stores/DBStore'
import { observer } from 'mobx-react'
import ContentStore, {
  getBookBlock,
  getTherapistsContent,
} from '../stores/ContentStore'
import GlobalState, { getReviewsIO } from '../stores/GlobalState'
import Filter from '../components/pages/therapists/Filter'
import Layout from '../components/common/Layout'

const BookBlock = lazy(() => import('../components/pages/home/BookBlock'))
const Reviews = lazy(() => import('../components/pages/home/Reviews'))
const Therapists = lazy(() =>
  import('../components/pages/therapists/Therapists'),
)

const TherapistsPage = observer(() => {
  const [filter, setFilter] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const effectRef = useRef<any>(false)

  useEffect(() => {
    if (!loading) {
      if (typeof window === 'undefined' || !window.document) {
        return
      }
    }
  }, [loading])

  let therap = ''
  const linksL = GlobalState.links
  if (linksL) {
    therap = linksL.find((l: any) => l.id == 268).link
  }

  useEffect(() => {
    if (effectRef.current) return

    getReviewsIO()
    getTherapistsFilters()
    getReviews()
    getBookBlock()
    getCategories()
    getTherapists().then(() => {
      if (DBStore.therapists?.length == 1) {
        window.location.href = `${therap}/${DBStore.therapists[0].link}`
      }
    })
    getTherapistsContent().then(() => {
      setLoading(false)
    })
    effectRef.current = true
  }, [])

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  return (
    <>
      {!loading && (
        <Layout withVideo={false}>
          <Suspense fallback={<></>}>
            <Therapists />
            <Reviews dt={ContentStore.therapists.reviews} />
            <BookBlock />
          </Suspense>
        </Layout>
      )}
      <Filter
        params={[{ title: 'Category', list: DBStore.therapistsFilter }]}
        setFilter={(value) => {
          if (value == null) {
            setFilter(null)
            getTherapists()
          } else {
            const st: any = {}
            ;[{ title: 'Category', list: DBStore.therapistsFilter }].forEach(
              (e: any, i: number) => {
                st[e.title.replaceAll(' ', '')] = value[`p${i}`]
              },
            )

            setFilter(st)
            filterTherapists(st)
          }
        }}
      />
    </>
  )
})

export default TherapistsPage
