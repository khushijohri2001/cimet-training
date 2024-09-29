/* eslint-disable react/prop-types */
const RelatedHighlights = ({title, list}) => {
  return (
    <div className="p-8 flex flex-col gap-6">
      <h3 className="text-3xl">{title}</h3>
      <div>
        {list}
      </div>
    </div>
  )
}

export default RelatedHighlights