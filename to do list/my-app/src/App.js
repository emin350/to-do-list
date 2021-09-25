import React, { useState, useEffect } from 'react';
import database from './firebase';
import firebase from "firebase";
import './App.css';

function App() {
  const [input, setinput] = useState("");
  const [values, setvalues] = useState([]);

  useEffect(() => {
    database.collection("messages").orderBy("timestamp", "desc").onSnapshot(
      snapshot => setvalues(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    )
  }, [])

  function savetodatabase() {

    database.collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setinput("");

  }

  const deletedata = (value) => {

    database.collection("messages").doc(value).delete();

  }


  const Editdata = (id) => {
    database.collection("messages").doc(id).update({
      message: input
    })
    setinput("");
  }


  return (
    <div className="App">

      <header>

        <input type="text" placeholder="Data input..." value={input} onChange={(e) => setinput(e.target.value)} />
        <button disabled={!input} onClick={savetodatabase}>save to database</button>

      </header>

      <div className="messages">
        {values.map(item => (

          <ul>
            <li>
              {item.data.message}

              <div>
                <button onClick={() => deletedata(item.id)}>Delete</button>
                <button onClick={() => Editdata(item.id)}>Edit</button>
              </div>

            </li>
          </ul>

        ))
        }
      </div>
    </div>

  );

}

export default App;
