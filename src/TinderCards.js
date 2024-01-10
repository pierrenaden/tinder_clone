import React, {useState} from "react"
import TinderCard from "react-tinder-card";
import database from "./firebase";
import './TinderCards.css'



function TinderCards() {
    const [people, setPeople] = useState([
    {
        name: 'steve jobs',
        url: 'https://cdn.britannica.com/45/154745-050-C60B6150/Steve-Jobs-computer-iMac-1998.jpg',
    },
    {
        name: 'mark zuckerberg',
        url: 'https://pyxis.nymag.com/v1/imgs/019/592/75318e1e31b03a6e95c787b2585ed51b1a-zuckerberg-surfer.rhorizontal.w700.jpg'
    }
]);

useEffect(() => {
    const unsubscribe =database
    .collection('people')
    .onSnapshot (snapshot => 
        setPeople(snapshot.docs.map(doc.data()))
        );
  return () => {
    unsubscribe();
  };
}, []);
    <div>
        <h1>TinderCards</h1>
    
    {people.map(people =>(
        <TinderCard
        className="swipe"
        key={person.name}
        preventSwipe={["up", "down"]}
        >
            <div
                style={{backgroundImage: 'url(${person.url})' }}
                className="card"
            >

            <h3>{person.name}</h3>
            </div>
        </TinderCard>
  ))}
  </div>
  );
}

export default TinderCards