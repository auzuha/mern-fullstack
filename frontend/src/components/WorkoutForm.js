import { useState } from "react";

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const request_body = {title, load, reps}
        
        console.log(request_body)
        const response = await fetch('/api/workouts/',
            {
                method: 'POST',
                body: JSON.stringify(request_body),
                headers: {
                    'Content-Type' : 'application/json'
                }

            }
        )

        const json = await response.json()
        if (!response.ok)
            setError(json.error)
        if (response.ok)
            setError(null)

    }
    return (  

        <form className="create" onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
            <label>Load (kgs.)</label>
            <input type="text" onChange={(e) => setLoad(e.target.value)} value={load}></input>
            <label>Reps</label>
            <input type="text" onChange={(e) => setReps(e.target.value)} value={reps}></input>
            <button type="submit">Click Here</button>
        </form>
    );
}
 
export default WorkoutForm;
