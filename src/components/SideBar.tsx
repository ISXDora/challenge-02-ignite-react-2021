import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SideBarProps {
  genres : GenreResponseProps[];
  selectedGenreId: number;
  onHandleClickButton: (id: number) => void
}

export function SideBar({genres, selectedGenreId,onHandleClickButton}: SideBarProps) {

 function handleClick(id: number){
  onHandleClickButton(id)
 }
  
return (
  <nav className="sidebar">
  <span>Watch<p>Me</p></span>

  <div className="buttons-container">
    {genres.map(genre => (
      <Button
        key={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => handleClick(genre.id)}
        selected={selectedGenreId === genre.id}
      />
    ))}
  </div>

</nav>
)
}