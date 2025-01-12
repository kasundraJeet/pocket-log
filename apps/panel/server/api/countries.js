import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  
  try {
    const { data, error } = await client.from('countries').select('*')
    if (error) {
      console.error('Supabase error:', error)
      return { countries: [] } // Handle error response gracefully
    }
    console.log('Fetched countries:', data) // Log fetched data
    return { countries: data }
  } catch (error) {
    console.error('Error in event handler:', error)
    return { countries: [] } // Handle the exception
  }
})
