function Click(){

   

    let stop = () => {
        alert(`clicked me yamete!!`);
    }

   

    return(
        <>
            <button onClick={() => stop()}>Click</button>
        </>
    );
}

export default Click