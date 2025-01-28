import withData from '../components/withData'
import DisplayCard from '../components/DisplayCard'


export default function Home() {
  const EnhancedDisplayCard = withData(DisplayCard)
  return (
    <div>
      <EnhancedDisplayCard></EnhancedDisplayCard>
    </div>
  )
}
