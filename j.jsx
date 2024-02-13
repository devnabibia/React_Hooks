() => {
    const [randomNumber, setRandomNumber] = useState(0)
    const [effectLogs, setEffectLogs] = useState([])

    //Passing in 'randomNumber' in the array dependency
    useEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect fn has been invoked'])
    
}