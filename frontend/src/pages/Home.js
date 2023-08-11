import { useCallback, useEffect, useState } from "react"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  const fetchWorkouts = async () => {
    console.log('aa');
    const response = await fetch('/api/workouts')
    const json = await response.json()

    if (response.ok) {
      setWorkouts(json)
    }
  }

  useEffect(() => {
    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm fetchWorkouts={fetchWorkouts} />
    </div>
  )
}

export default Home