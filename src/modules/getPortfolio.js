import { ref } from 'vue'

import image1 from '@/assets/test.jpeg'

const getPortfolioItems = () => {
  const portfolioItems = ref([
    {
      id: 1,
      title: 'Project TRAPHOLT',
      description: 'This is the first portfolio item',
      image: image1,
      category: 'web'
  
    },
    {
      id: 2,
      title: 'Project GJESING',
      description: 'This is the second portfolio item',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.google.com',
      category: 'video'
    },
    {
      id: 3,
      title: 'Project KLEEN KESTER',
      description: 'This is the third portfolio item',
      category: 'photo'
    },
    {
      id: 4,
      title: 'Project SUSTENIA',
      description: 'This is the second portfolio item',
      category: 'photo'
    },
    {
      id: 5,
      title: 'Project JOB PORTAL',
      description: 'This is the second portfolio item',
      category: 'photo'
    },
    {
      id: 6,
      title: 'Project BEAT UP',
      description: 'This is the second portfolio item',
      category: 'photo'
    }    
  ])

  return { portfolioItems }
}

export default getPortfolioItems


