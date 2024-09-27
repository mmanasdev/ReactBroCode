import List from './List.jsx'

function RenderListLesson() {

  const fruits = [
    { id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'banana', calories: 105 },
    { id: 3, name: 'cherry', calories: 4 },
    { id: 4, name: 'date', calories: 20 }
];

const vegetables = [
    { id: 1, name: 'asparagus', calories: 4 },
    { id: 2, name: 'broccoli', calories: 55 },
    { id: 3, name: 'carrot', calories: 25 },
    { id: 4, name: 'daikon', calories: 18 }
  ];


  return <div>
    {fruits.length > 0 ? <List items={fruits} category="Fruits"/>: null }
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
  </div>

}

export default RenderListLesson;
