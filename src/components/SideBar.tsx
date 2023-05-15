import { Button } from "./Button";

interface Genres {
    id: number
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
    title: string
}

interface SideBarProps {
  genres: Genres[]
  selectedGenreId: number
  handleClickButton: (id: number) => void
}

interface DataProps {
  data: SideBarProps
}

export function SideBar({data} : DataProps) {

    return (
    <div className="buttons-container">
      {data.genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => data.handleClickButton(genre.id)}
          selected={data.selectedGenreId === genre.id}
        />
      ))}
    </div>

  )
}