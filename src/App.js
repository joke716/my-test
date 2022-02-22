// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <h1>fdsjlkdfsjklfsdlkjasfdlk</h1>
//     </div>
//   );
// }
//
// export default App;

// import React from 'react';
//
// const App = () => {
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default App;
//
// import React, {Component} from 'react';
//
// class App extends Component {
//     render() {
//         return (
//             <div>
//
//             </div>
//         );
//     }
// }
//
// export default App;


// 라이브러리를 불러오는 자리
import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const App = () => {

    // 상태, 변수, 상수, 함수들이 들어가는 자리
    //hook => state, effect
    const [movies, setMovies] = useState([])

    // 네트워킹 및 파싱 기능 함수
    const getMovies = async () => {
        console.log("getMovies")
        try {

            const {  data } = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")

            setMovies(data.results)

            console.log("+++++++++++++++++++", data)

        } catch (err) {

        }
    }

    useEffect(() => {
        getMovies()
    }, [])


    // 브라우져에서 보여지는 부분 html 자바스크립트 {}
    return (
        <Container>
            <Row>


            {movies.map(movie => (
                <Col>


                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.overview.slice(0, 100)} ...
                        </Card.Text>
                        <Button variant="primary">자세히 보기</Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
    );
};

export default App;

