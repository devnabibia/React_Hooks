() => {
    const [items, setItems] = useState(0)
    const [price, setPrice] = 
    useState(10)

    const handleItems = () => setItems(items + 1)
    const handlePrice = () =>
    setPrice(price + 10)

    return (
        <div>
            <p>The user has {items} number of items.</p>
            <p>And they sell items worth {price} USD</p>

            <div>
                <button onClick = {handleItems}>
                    Increase number of items by 1
                </button>
                <button onClick={handlePrice}>
                    Increase price by 10
                </button>
            </div>
        </div>
    )
}