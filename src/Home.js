

const Home = () => {
    const handleClick=() =>{
        console.log('hello, esperanza');
    }

    const handleClickAgain = (fruit) => {
        console.log('hello ' +  fruit);
        
    }
    return (
        <div className="home">
            <h1>HomePage </h1>
            <button onClick={handleClick}> Click me</button>
            <button onClick={() => handleClickAgain('mango')}>click me again</button>

        </div>
      );
}
 
export default Home;