const { useEffect , useState } = require("react")


function Timer(params) {
    const [count, setCount] = useState(0)
    useEffect(() => {
      // setTimeout(() => {
        setCount((count) => count + 2);

      // }, 1000);
    },[])
    return <h1>{count}</h1>
    
}

export default Timer