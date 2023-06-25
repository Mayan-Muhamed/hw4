import {useEffect, useState} from 'react'
import './App.css'
import Example from "./components/Example.jsx";
import Slider from "./components/Swiper.jsx";

function App() {

    const [data, setData] = useState([])

    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos')
        const response = await data.json()
        const sliceData = response.slice(0, 10)
        setData(sliceData)
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <Example/>
            <Slider slides={data}/>
        </div>
    )
}

export default App