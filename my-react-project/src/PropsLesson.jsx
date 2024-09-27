/*
props = read-only properties that are passed from parent to child components
<Component key=value />

propTypes = a mechanism that ensures that the passed value is of the correct type.
age: PropTypes.number

defaultProps = a mechanism that provides default values for props in case they are not passed.
name: "John Doe"

*/
import Student from "./Student.jsx"

function PropsLesson() {

  return <div>
    <Student name="Spongebob" age={30} isStudent={true}/>
    <Student name="Patrick" age={42} isStudent={false}/>
    <Student name="Squidward" age={50} isStudent={false}/>
    <Student name="Sandy" age={35} isStudent={false}/>
    <Student />
    <Student name="Larry"/>
  </div>

}

export default PropsLesson
