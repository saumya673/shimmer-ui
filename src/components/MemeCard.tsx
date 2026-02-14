import type { MemeType } from "./Body"
import "./MemeCard.css"

export const MemeCard = ({data}: {data: MemeType}) => {
  const {url, title, author} = data;
  return (
    <>
    <div className="meme-card">
      <div className="meme-title">{title}</div>
      <img src={url} alt="meme" height="200px" width="200px" />
      <div>{author}</div>
    </div>
    </>
  )
}