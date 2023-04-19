import axios from "axios";
import { useEffect, useState } from "react"
// import { RAPID_API_KEY } from '@env'

// const API_KEY = RAPID_API_KEY;


export default useFetch = (endpoint, query)=> {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {...query},
  headers: {
    'X-RapidAPI-Key': '9f74242680msh895c22db625d279p18e85ejsnbb59100bb08b',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

const fetchData = async ()=> {
  setIsLoading(true)

  try {
    const response = await axios.request(options)

    setData(response.data.data)
    setIsLoading(false)
  } catch (error) {
    setError(error)
    console.log('error', error)
    alert('There was an error')
  } finally {
    setIsLoading(false)
  }
}

useEffect(() => {
  fetchData()
  return () => {}
}, [])

const refetch = ()=> {
  setIsLoading(true)
  fetchData()
}

return { error, data, isLoading, refetch };

}