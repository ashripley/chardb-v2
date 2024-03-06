import { useSelector } from "react-redux"
import { GalleryStore } from "../redux/store"
import { CustomCard } from "./Custom/CustomCard"
import { CustomTile } from "./Custom/CustomTile"
import { CustomList } from "./Custom/CustomList"

export const GalleryContent = () => {
  const { view } = useSelector((state: GalleryStore) => state.gallery)
  return (
    <>
      {view === "card" ? (
        <>
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </>
      ) : view === "tile" ? (
        <>
          <CustomTile />
          <CustomTile />
          <CustomTile />
          <CustomTile />
          <CustomTile />
          <CustomTile />
          <CustomTile />
          <CustomTile />
          <CustomTile />
          <CustomTile />
          <CustomTile />
          <CustomTile />
          <CustomTile />
          <CustomTile />
          <CustomTile />
          <CustomTile />
        </>
      ) : (
        <>
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
          <CustomList />
        </>
      )}
    </>
  )
}
