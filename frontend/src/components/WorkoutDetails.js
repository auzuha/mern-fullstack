const WorkoutDetails = (props) => {

    const workout = props.workout;

    return ( 
        <div className="workoutDetail">
            <h3>{workout.title}</h3>
            <br />
            <p><strong>Load (kg.): </strong>{workout.load}</p>
            
            <p><strong>Reps: </strong>{workout.reps}</p>
        </div>

     );
}
 
export default WorkoutDetails;