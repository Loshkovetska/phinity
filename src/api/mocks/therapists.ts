import img from '../../assets/unsplash_SJvDxw0azqw.png'
import img1 from '../../assets/therap/unsplash_pAtA8xe_iVM (1).png'
import img2 from '../../assets/therap/unsplash_pAtA8xe_iVM.png'
import img3 from '../../assets/therap/unsplash_SJvDxw0azqw.png'
import img4 from '../../assets/therap/unsplash_SJvDxw0azqw (1).png'
import img5 from '../../assets/therap/unsplash_SJvDxw0azqw (2).png'
import img6 from '../../assets/therap/unsplash_SJvDxw0azqw (3).png'
import img7 from '../../assets/therap/unsplash_SJvDxw0azqw (4).png'
export type Therapist = {
  id: number
  name: string
  position: string
  img: string
  rating: number
  service_id: number
  category: string
  approach: string
  experience: number
  timeofWork: string
  location: string
}

const therapists: Array<Therapist> = [
  {
    id: 1,
    name: 'Evangilina Braun',
    position: 'Counselling Psychologist',
    img: img7,
    rating: 5,
    service_id: 1,
    category: 'Academic stress',
    approach: '',
    experience: 3,
    timeofWork: 'Mon',
    location: 'London',
  },
  {
    id: 2,
    name: 'Evangilina Braun',
    position: 'Counselling Psychologist',
    img: img1,
    rating: 5,
    service_id: 2,
    category: 'Academic stress',
    approach: '',
    experience: 3,
    timeofWork: 'Mon',
    location: 'London',
  },
  {
    id: 3,
    name: 'Evangilina Braun',
    position: 'Counselling Psychologist',
    img: img2,
    rating: 5,
    category: 'Academic stress',
    service_id: 3,
    approach: '',
    experience: 3,
    timeofWork: 'Mon',
    location: 'London',
  },
  {
    id: 4,
    name: 'Evangilina Braun',
    position: 'Counselling Psychologist',
    img: img3,
    rating: 5,
    service_id: 4,
    category: 'Academic stress',
    approach: '',
    experience: 3,
    timeofWork: 'Mon',
    location: 'London',
  },
  {
    id: 5,
    name: 'Eva Braun',
    position: 'Counselling Psychologist',
    img: img4,
    rating: 5,
    service_id: 5,
    category: 'Academic stress',

    approach: '',
    experience: 3,
    timeofWork: 'Mon',
    location: 'London',
  },
  {
    id: 6,
    name: 'Eva Braun',
    position: 'Counselling Psychologist',
    img: img5,
    rating: 5,
    service_id: 6,
    category: 'Academic stress',
    approach: '',
    experience: 3,
    timeofWork: 'Mon',
    location: 'London',
  },
  {
    id: 7,
    name: 'Eva Braun',
    position: 'Counselling Psychologist',
    img: img6,
    rating: 5,
    service_id: 7,
    category: 'Academic stress',
    approach: '',
    experience: 3,
    timeofWork: 'Mon',
    location: 'London',
  },
  {
    id: 8,
    name: 'Eva Braun',
    position: 'Counselling Psychologist',
    img: img,
    rating: 5,
    service_id: 8,
    category: 'Academic stress',
    approach: '',
    experience: 3,
    timeofWork: 'Mon',
    location: 'London',
  },
]
export default therapists
