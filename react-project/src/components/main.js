import React, { Component } from 'react';
//import the testimonials
import Testimonials from "../components/testimonials";


class Main extends Component {
  render() {
    return (
      <div className="main">
          <header>
              <nav>
                <ul>
                <li><a href="#">UpDown</a></li>
                <li id="menu">
                    <div id="nav-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </li>
                </ul>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">se connecter</a></li>
                    <li><button>s'inscrire</button></li>
                    
                </ul>

              </nav>
              <div className="header-data">
                <h1>Bienvenue sur UpDown</h1>
                <p>UpDown est plus que le partage et le stockage.
                Jetez un œil aux principales fonctionnalités pour vous simplifier la vie.</p>
              </div>  
              <button >rejoindre maintenant</button>
          </header>

          <section className="container">
              <div><h1>Nos Services</h1></div>
            <div className="cards">
                <div>
                   <div className="icons">
                   <i className="fa fa-cog" aria-hidden="true"></i>
                   </div>
                    <div className="content">
                        <p className="content-title">organisez en toute sécurité</p>
                        <p>téléchargez, copiez, déplacez, et controllez l'accés a vos fichier de n'importe ou</p>

                    </div>
                </div>
            </div>

            <div className="cards">
                <div>
                   <div className="icons">
                   <i className="fa fa-calendar" aria-hidden="true"></i>
                   </div>
                    <div className="content">
                        <p className="content-title">Partage de gros fichiers</p>
                        <p>Partage de gros fichier en envoyant uniquement un lien.</p>

                    </div>
                </div>
            </div>
            <div className="cards">
                <div>
                   <div className="icons">
                   <i className="fa fa-building" aria-hidden="true"></i>
                   </div>
                    <div className="content">
                        <p className="content-title">Téléchargement illimité</p>
                        <p>Assurez vous que vos téléchargement sont toujours disponibles et.</p>

                    </div>
                </div>
            </div>

          </section>


          <section className="img-section">
              <p></p>
          </section>
      
        <section className="imgs-bar">
        <h1>Commencez gratuitement !</h1>
        </section>
        <Testimonials />


        <footer>
            <div className="data">
                <ul>
                    <li><p className="title">LOGO</p></li>
                </ul>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </div>
            <div className="media">
                <ul>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitch" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </footer>
     
      </div>

      
    );
  }
}

export default Main;
