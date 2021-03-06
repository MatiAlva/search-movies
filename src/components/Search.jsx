import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa"
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Search() {
    const query = useQuery()
    const search = query.get("search")


    const [searchText, setsearchText] = useState("");
    const history = useHistory();

    useEffect(() => {
        setsearchText(search || "")
    }, [search]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push("/?search=" + searchText)
    }
    return (
        <form className={styles.seachContainer} onSubmit={handleSubmit}>
            <div className={styles.seachBox}>
                <input 
                className={styles.seachInput} 
                type="Text" 
                value={searchText} onChange={(e) => setsearchText(e.target.value)}/>
                
                <button className={styles.seachButton} type="submit"> 
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}
