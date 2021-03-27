import Header from './Header.js'
import Content from './Content.js'

const Course = (props) => {
    const exercises = props.parts.map(part => part.exercises)
    // Probably meant to directly use parts but whatever
    const total = exercises.reduce((s, p) => {
        console.log(s, p)
        return s + p
    })

    // console.log(content)
    // console.log(courseName)
    return (
        <div>
            <Header header={props.name} />
            <Content content={props.parts} />
            <p>total of {total} exercises</p>
        </div>
    )
}

export default Course