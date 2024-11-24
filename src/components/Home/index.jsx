import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './index.css';
import logo from '../../storage/img/Revelar.png';
import { Button } from 'react-bootstrap';



const PRODUCTS_PER_PAGE = 8; // Número de produtos por página

function Home() {
    const [produtos, setProdutos] = useState([]);
    const [lastDoc, setLastDoc] = useState(null);
    const [firstDoc, setFirstDoc] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const [hasPrev, setHasPrev] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    
    
    return (
        <div className="App bg-primary">
            <header className="App-header">
                <nav>
                    <ul className='d-flex bg-dark'>
                        <li>
                            <a className='links' href="">Quem Somos</a>
                        </li>
                        <li>
                            <a className='links' href="">Cadastrar</a>
                        </li>
                        <li>
                            <a className='links' href="">Parceiros</a>
                        </li>
                    </ul>
                </nav>
                <img className='logo' src={logo} alt="" />
                <h1></h1>
            </header>

            <div className="catalog">
                              
            </div>

        </div>
    );
}

export default Home;