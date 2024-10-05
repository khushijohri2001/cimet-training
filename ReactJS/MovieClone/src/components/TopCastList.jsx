/* eslint-disable react/prop-types */
import TopCastCard from "./TopCastCard"

const TopCastList = ({castDetails}) => {
  
  return (
    <div className="flex gap-6 flex-wrap">
      {
        castDetails.cast.map((cast) =>  <TopCastCard key={cast.id} cast={cast}/>)
      }
    </div>
  )
}

export default TopCastList