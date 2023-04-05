import { observer } from 'mobx-react'
import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Layout from '../components/common/Layout'
import Filter from '../components/pages/therapists/Filter'
import ContentStore, { getHome, getWork } from '../stores/ContentStore'
import DBStore, {
  filterVacancies,
  getVacancies,
  getWorkFilters,
} from '../stores/DBStore'
import { getReviewsIO } from '../stores/GlobalState'

const VacanciesContent = lazy(() =>
  import('../components/pages/works/VacanciesContent'),
)

const WorkPage = observer(() => {
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

  if (typeof window === 'undefined' || !window.document) {
    return <></>
  }

  useEffect(() => {
    if (effectRef.current) return
    getVacancies()
    getWorkFilters()
    getReviewsIO()
    getHome()
    getWork().then(() => {})
    effectRef.current = true
  }, [])

  useEffect(() => {
    if (DBStore.vacancies && ContentStore.works) {
      setLoading(false)
    }
  }, [DBStore.vacancies, ContentStore.works])

  if (!ContentStore.works) return <></>
  return (
    <>
      {!loading && (
        <Layout withVideo={false}>
          <Suspense fallback={<></>}>
            <VacanciesContent />
          </Suspense>
        </Layout>
      )}
      <Filter
        params={[{ title: 'Category', list: DBStore.worksCategories }] || null}
        setFilter={(value) => {
          if (value == null) {
            setFilter(null)
            getVacancies()
          } else {
            const st: any = {}
            ;[{ title: 'Category', list: DBStore.worksCategories }]?.forEach(
              (e: any, i: number) => {
                st[e.title.replaceAll(' ', '')] = value[`p${i}`]
              },
            )
            setFilter(st)
            filterVacancies(st)
          }
        }}
      />
    </>
  )
})

export default WorkPage
