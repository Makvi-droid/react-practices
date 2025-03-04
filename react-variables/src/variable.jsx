import './variable.css';

function Variables(){
    
    const food1 = "orange";
    let food2 = "banana";
    let food3 = "apple";
    
    return(
        <>
        <h1 className="header">My Webpage</h1>
            <div className="list">
                Foods
                <ul>
                    <li>{food1}</li>
                    <li>{food2}</li>
                    <li>{food3}</li>
                </ul>
            </div>
        </>
    );
}

export default Variables;