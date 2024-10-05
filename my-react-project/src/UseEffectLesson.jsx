/*

useEffect() = React Hook tells React DO SOME CODE WHEN (pick one):
- the component re-renders
- the component mounts
- the state changes

useEffect(function, [dependencies])

1. useEffect (() => [])                 // Runs after every re-render
2. useEffect (() => [], [])             // Runs only on mount
3. useEffect (() => [], [vaklue])       // Runs on mount + when value changes

USES:
- Event Listener
- DOM manipulation
- Subscriptions(real-time updates)
- Fetching data from an API
- Clean up when component unmounts
*/


// import CounterUseEffectLesson from './CounterUseEffectLesson';
import WidthHeightUseEffectLesson from './WidthHeightUseEffectLesson';

function UseEffectLesson() {
   
    return (
        <div>
            <WidthHeightUseEffectLesson />

        </div>
    );
}

export default UseEffectLesson;