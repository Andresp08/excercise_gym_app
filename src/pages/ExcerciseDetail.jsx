
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { excerciseOptions, fetchData } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExcerciseVideos from '../components/ExcerciseVideos'
import SimilarExcercises from '../components/SimilarExcercises'

const ExcerciseDetail = () => {
  return (
    <Box>
      <Detail />
      <ExcerciseVideos />
      <SimilarExcercises />
    </Box>
  )
}

export default ExcerciseDetail