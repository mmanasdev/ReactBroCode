/*
conditional rendering is a way to render different elements or components based on a condition.
(show, hide, or change components)
*/
import UserGreating from "./UserGreating.jsx";

function ConditionalRenderingLesson() {

  return <div>
    <UserGreating isLoggedIn={false} username="BroCode"/>
  </div>

}

export default ConditionalRenderingLesson
