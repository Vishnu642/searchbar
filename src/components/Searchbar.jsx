import "./Searchbar.css"
import { useEffect,useState } from "react"
import axios from "axios";

export const Searchbar=({placeholder})=>{
    const [data,setData] = useState([]);
    
    const [filterData,setFilterData] = useState([]);

    useEffect(()=>{
        axios({
            method:"GET",
            url:" http://localhost:8050/countries"
        }).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log("err:",err);
        })
    },[])
    console.log(data)

    const handleChange=(event)=>{
        const searchWord = event.target.value
        const newFilter = data.filter((value)=>{
            return value.country.toLowerCase().includes(searchWord.toLowerCase())
        })
        if(searchWord===""){
            setFilterData([])
        }else{
        setFilterData(newFilter);
        }
    }

    return(
        <div>
            <div className="search-box" >
                <input className="search"  onChange={handleChange} type="text" placeholder={placeholder}></input>
            </div>
            {filterData.length!=0 && (
            <div className="display">
               {filterData.slice(0,5).map((val)=>{
                return(
                    <div className="display-div">{val.country}</div>
                )
               })}
               
            </div>
            )}
        </div>
    )
}
// 