import withData from '../components/withData'
import DisplayCard from '../components/DisplayCard'

export default function Watchlist() {
  const EnhancedDisplayCard = withData(DisplayCard)
  return (
    <div>
      <EnhancedDisplayCard isWatchList={true}></EnhancedDisplayCard>
    </div>
  )
}
