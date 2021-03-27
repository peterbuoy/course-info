import Part from './Part.js'

const Content = (props) => {
    const content = props.content
    console.log(props)
    return (
        <div>
            {content.map(part =>
                <Part key={part.id} 
                name={part.name} 
                exercises={part.exercises} />
            )}
        </div>
    )
}

export default Content