import './Base.css';
import React, { useState, useEffect } from "react";


function Base_topbar() {

    const [bgOpacity, setBgOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 10) {
            setBgOpacity(1);
        } else {
            setBgOpacity(0);
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div id="top-bar" style={{ backgroundColor: `rgba(67, 76, 86, ${bgOpacity})` }}>
            <button id="sideBar">
                <i className="bi bi-chevron-right"></i>
            </button>
            <form id="pesquisa">
                <input id="pesquisa-input" name="pesquisa-input" placeholder="Pesquise aqui"></input>
                <button id="pesquisa-btn" formAction="#"name="pesquisa-btn">Pesquisar</button>
            </form>
            <button id="user-btn" onClick={() => console.log("Cliquei no botão!")}>
                <i className="bi bi-person-circle" style={{ fontSize: "2rem" }}></i>
            </button>
        </div>
    )
}

export default Base_topbar;