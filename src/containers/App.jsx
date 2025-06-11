import React,{ Component } from "react";
import CardList from "../components/CardList.jsx";
import SearchBox from "../components/SearchBox.jsx";
import './App.css';
import Scroll from "../components/Scroll.jsx";
import Loader from "../components/Loader.jsx";
import { DarkModeProvider } from "@rbnd/react-dark-mode"



class App extends Component{
    constructor() {
        super()
        this.state = {
            robots:[],
            searchfield: "",
            error: null
        }
        // console.log("consturctor");
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if(!response.ok) {
                throw new Error("Eroare la incarcarea datelor");
            }
            return response.json();
        }
        )
        .then(users => {
            setTimeout(() => {
                this.setState({ robots: users })
            }, 2000) // Simulăm o întârziere de 2 secunde pentru a vedea loader-ul
        })
        .catch(error => {
            console.error("Eroare API:",error);
            this.setState({ error: "API nu raspunde.Incearca mai tarziu."})
        });
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const { robots, searchfield, error } = this.state; // Destructurare pentru a face codul mai curat
        if (error) {
            return (
                <div className="tc" style={{ paddingTop: '100px' }}>
                    <h2>{error}</h2>
                </div>
            );
        }
        const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase()); ///
        })
        if(!robots.length) {
            return <Loader />;
        } else {
        // console.log("render");
        return (
        <DarkModeProvider>
    <div className="tc">
    <h1 className="f1">RoboFriends</h1>
    <SearchBox searchChange ={this.onSearchChange}/>
    <Scroll>
    <CardList robots = {filteredRobots} />
    </Scroll>
    </div>
    </DarkModeProvider>
    );
        }
    }
}

export default App;

// EXPLICATIE : Cand utilizatorul scrie ceva in SearchBox ul de pe pagina , in fisierul : SearchBox.js avem un input care este :
// : <input onChange={searchChange} /> , moment in care se declanseaza onChange si se apeleaza functia searchChange de aici din App.jsx adica <SearchBox searchChange ={this.onSearchChange}/>
// dupa care onSearchChange tot din App.jsx adica de aici , modifica state , mai exact "this.setState" modifica searchfield din state
// dupa care se detecteaza modificare si se apeleaza din nou render(prima data apelandu se la inceput cand se afiseaza toti robotii pentru ca nu avem nimic scris), intra in actiune filteredRobots care contine doar robotii care se potrivesc cu textul introdus
// si in final se reafiseaza CardList.jsx doar cu Robotii Potriviti

// props = informații transmise către o componentă de la componenta care o folosește
// 🔹 1. Componenta:
// function Buton(props) {
//   return <button>{props.text}</button>;
// }
// 🔹 2. Folosire:
// <Buton text="Trimite" />
// <Buton text="Anulează" />
// 🔹 3. Ce primește componenta:
// props = {
//   text: "Trimite"
// }
// și apoi:
// props = {
//   text: "Anulează"
// }
// 🔍 Afișarea finală:
// <button>Trimite</button>
// <button>Anulează</button>

