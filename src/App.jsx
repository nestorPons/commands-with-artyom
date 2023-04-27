import {useState} from 'react'
import ArtyomComponent from './components/Artyom'

export default function App() {
    const [count, setCount] = useState(0)

    return (
        <main className="container mx-auto flex justify-center align-middle flex-col text-center">
            <h1>NPL-SPEECHRECOGNITION</h1>
            <ArtyomComponent></ArtyomComponent>
        </main>
    )
}
