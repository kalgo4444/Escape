export const HEADER = ['home', 'Categories', 'About', 'Contact']

export const CATEGORY = [
  'Nature',
  'Photography',
  'Relaxation',
  'Vacation',
  'Travel',
  'Adventure',
]

import img1 from '../assets/images/postcard1.svg'
import img2 from '../assets/images/postcard2.svg'
import bg1 from '../assets/images/postcardbg1.svg'
import bg2 from '../assets/images/postcardbg2.svg'

export const POSTCARD = [
  {
    id: 1,
    background: bg1,
    title: 'The Road Ahead',
    desc: 'The road ahead might be paved - it might not be.',
    auth: 'Mat Vogels',
    img: img1,
    date: 'September 25, 2015',
    type: false,
  },
  {
    id: 2,
    background: bg2,
    title: 'From Top Down',
    desc: 'Once a year, go someplace you’ve never been before.',
    auth: 'William Wong',
    img: img2,
    date: 'September 25, 2015',
    type: {
      gool: true,
      info: 'Adventure',
    },
  },
]

import recentcard from '../assets/images/recentcard1.svg'
export const RECENTCARD = [
  {
    id: 1,
    cardTitle: 'Still Standing Tall',
    cardDescription: 'Life begins at the end of your comfort zone.',
    author: 'William Wong',
    date: '9/25/2015',
    image: img2,
    img: recentcard,
  },
  {
    id: 2,
    cardTitle: 'Sunny Side Up',
    cardDescription:
      "No place is ever as bad as they tell you it's going to be.",
    author: 'Mat Vogels',
    date: '9/25/2015',
    image: img1,
    img: recentcard,
  },
  {
    id: 3,
    cardTitle: 'Water Falls',
    cardDescription:
      'We travel not to escape life, but for life not to escape us.',
    author: 'Mat Vogels',
    date: '9/25/2015',
    image: img1,
    img: recentcard,
  },
  {
    id: 4,
    cardTitle: 'Through the Mist',
    cardDescription:
      'Travel makes you see what a tiny place you occupy in the world.',
    author: 'William Wong',
    date: '9/25/2015',
    image: img2,
    img: recentcard,
  },
  {
    id: 5,
    cardTitle: 'Awaken Early',
    cardDescription: 'Not all those who wander are lost.',
    author: 'Mat Vogels',
    date: '9/25/2015',
    image: img1,
    img: recentcard,
  },
  {
    id: 6,
    cardTitle: 'Try it Always',
    cardDescription:
      'The world is a book, and those who do not travel read only one page.',
    author: 'Mat Vogels',
    date: '9/25/2015',
    image: img1,
    img: recentcard,
  },
]
