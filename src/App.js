import './App.css';
import Select from 'react-select';

import {useEffect, useState} from 'react'


function App() {
    const [datas, setDatas] = useState([])

    const getApple = async () => {
        const apple = await fetch('https://newsapi.org/v2/everything?q=apple&from=2022-09-28&to=2022-09-28&sortBy=popularity&apiKey=96c861837c224db684211aadafa57098')
        const value = await apple.json()
        const article = value.articles.map(data => {
            return {
                label: data.author,
                value: data.author
            }
        })
        setDatas(article)
    }

    useEffect(() => {
        getApple()
    }, [])

    return (
        <div>
            <Select options={datas}></Select>
        </div>
    )
}

export default App