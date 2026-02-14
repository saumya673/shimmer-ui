import { useEffect, useState } from "react";
import { MemeCard } from "./MemeCard";
import "./Body.css";

export interface MemeType {
    title: string;
    url: string;
    author: string;
}

const Body = () => {
    const [memes, setMemes] = useState<MemeType[]>([]);
    useEffect(()=>{
        fetchMemes();
    },[]);

    const fetchMemes = async() => {
        const response = await fetch("https://meme-api.com/gimme/20")
        const data = await response.json();
        console.log("data =-jkn",data);
        setMemes(data.memes);
    }

    return (
        <>
        <div className="meme-container">
            {memes && memes.map((meme, index) => {
                return (
                    <div key={index}><MemeCard key={index} data={meme}/></div>
                )
            })}
        </div>
        </>
    )
}

export default Body