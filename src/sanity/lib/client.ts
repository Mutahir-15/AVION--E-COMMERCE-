import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: 'smj5umdm',
  dataset: 'production',
  apiVersion,
  useCdn: true, 
})
