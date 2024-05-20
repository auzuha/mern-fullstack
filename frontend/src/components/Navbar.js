import { Link } from "react-router-dom"


const Navbar = () => {

    return (
            <div className="container">
            
                <h1 className="link">
                <Link to="/" style={{textDecoration: 'none'}}>Workout Buddy</Link>
                </h1>
            
            </div>

        


    )

}

export default Navbar;