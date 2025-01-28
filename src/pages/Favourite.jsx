import withData from '../components/withData'
import DisplayCard from '../components/DisplayCard'

export default function Favourite() {
  const EnhancedDisplayCard = withData(DisplayCard)
  return (
    <div>
      <EnhancedDisplayCard isFav={true}></EnhancedDisplayCard>
    </div>
  )
}
