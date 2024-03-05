import React from 'react';
import './App.css';

export default function App() {
    return (
      <div className="App">
          <header>
              <h1>Ilmoitautumislomake</h1>
          </header>

          <section className="form-section">
              <form id="form">
                  <fieldset id="formBody">
                      <div className="input-wrapper">
                          <label className="input-label" htmlFor="name">Nimi tai nimimerkki*</label>
                          <input className="input-field clickable" type="text" placeholder="Pekka Karjalainen"
                                 name="name"/>
                      </div>

                      <div className="input-wrapper">
                          <label className="input-label" htmlFor="person-image">Kasvokuva</label>
                          <input className="input-field image-input-field clickable" type="text"
                                 placeholder="+ Tuo kasvokuva" name="person-image"/>
                      </div>

                      <div className="input-wrapper">
                          <label className="input-label" htmlFor="song">Biisi*</label>
                          <div className="select-wrapper">
                              <select className="input-field select-field clickable" defaultValue="default" name="song">
                                  <option value="default" disabled hidden>Valitse alta</option>
                                  <option value="Biisi 1">Biisi 1</option>
                                  <option value="Biisi 1">Biisi 2</option>
                                  <option value="Biisi 1">Biisi 3</option>
                                  <option value="Biisi 1">Biisi 4</option>
                              </select>
                          </div>
                      </div>

                      <div className="input-wrapper">
                          <label className="input-label">Sävellaji*</label>
                          <div className="switcher">
                              <button className="switcher-button clickable">-2</button>
                              <button className="switcher-button clickable">-1</button>
                              <button className="switcher-button clickable">0</button>
                              <button className="switcher-button clickable">+1</button>
                              <button className="switcher-button clickable">+2</button>
                          </div>
                      </div>
                  </fieldset>

                  <fieldset id="formBottom">
                      <label className="checkbox-wrapper">Sallin tietojeni tallennuksen karaokejärjestelmään*
                          <input type="checkbox" name="accept-policy"/>
                          <span className="checkbox clickable"></span>
                      </label>
                  </fieldset>

                  <p className="info">* Pakolliset kennät</p>

                  <input id="sendButton" className="clickable" type="button" value="Lahetä"/>

              </form>
          </section>
      </div>
    );
}