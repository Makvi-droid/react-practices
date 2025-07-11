import React from "react";
import styles from "./Profile.module.css"

function Profile({image, name, id, age, isEmployed}){
    return(
        <>  
        <div className={styles.container}>
            <div className={styles.box}>
                <img className={styles.img} src={image} alt="profile 1" />
                <p>Name: {name}</p>
                <p>ID: {id}</p>
                <p>Age: {age}</p>
                <p>Employment status: {isEmployed ? "Employed" : "Not Employed"}</p>
            </div>
        </div>
        </>
    );
}

export default Profile