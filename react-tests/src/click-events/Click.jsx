function Click(){

    let myName = 'dayum'

    let stop = (name) => {
        alert(`${name} clicked me yamete!!`);
    }

    return(
        <>
            <button onClick={() => stop(myName)}>Click</button>
        </>
    );
}

export default Click