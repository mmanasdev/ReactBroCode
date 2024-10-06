
/*
    useContext() = React Hook that allows you to share values between multple levels
    of components without passing propos through each level.

    PROVIDER COMPONENT
    1. Import {createContext} from 'react'
    2. Create a MyContext = createContext()
    3. <MyContext.Provider value={value}>
         <Child />
        </MyContext.Provider>

    CONSUMER COMPONENT
    1. Import {useContext} from 'react'
    2. Import MyContext from './MyContext'
    3. const value = useContext(MyContext)
*/

import ComponentA from './UseContextComponents/ComponentA';

function UseContextLesson() {
    return (
        <div>
            <ComponentA />
        </div>
    );
}

export default UseContextLesson;