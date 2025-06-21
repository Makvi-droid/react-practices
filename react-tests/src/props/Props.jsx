
function Props(name){
    return(
        <>
            <p>Game: {name.game}</p>
            <p>Creator: {name.creator}</p>
            <p>Year released: {name.year}</p>
            <p>Active: {name.isActive ? "Yes" : "No"}</p>
        </>
    );
}



export default Props;