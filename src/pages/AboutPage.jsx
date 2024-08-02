import Card from "../component/shared/Card"
import { Link } from "react-router-dom"
function AboutPage() {
    return (
        <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>
                This is a React Feedback app to get Feed back about a product or services
            </p>
            <p>
                <Link to="/">Back To Home</Link>
            </p>
        </div>
        </Card>
    )
}

export default AboutPage
