import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/assignments")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <>
      <div className="container">
        <div className="bubble">
          <h1>
            <u>Classes</u>
          </h1>
          <h2>To-do:</h2>
          {data["CS 435"].map((assmnt, index) => (
            <p key={index}>{assmnt}</p>
          ))}
        </div>
        <div className="bubble">
          <h1>
            <u>Email</u>
          </h1>
        </div>
        <div className="bubble">
          <h1>
            <u>Calendar</u>
          </h1>
          <div className="calendarFrame">
            <iframe
              className="calendarEmbed"
              src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=America%2FNew_York&showPrint=0&src=YXIyNjY1QG5qaXQuZWR1&src=Y19lY2RhMTNkNThkZjY3MTU0MTk3YmE2Mjg4MTJlY2ZmMDc3ZGI2YWJhNDdiNjBkM2NmMGFiZDA3ZjI0MzBlNTM5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y184MmJiZjM4YWQ3MWNmOWIzMzVjOTljYmNhYTllMWEyODNjNTU3Zjk1ZmNlMWY1MmIxNjVhNDkzZjM1OTk2OWVkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y183NDAxZTkzNTQ4YjNhYjBjYzRhMThlYzE1ZTVjN2U2ZjFhN2NmOGJkNmUyOTMxODM3NTJjMjBlZTBkOGZkNjgzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=OGJlNmEzOWY1NWViY2Q1ZTFlMTljNDRkNDQzM2JjM2JmZGFiOGVmYWQ3YTdjZjBhODE3NTAyMDMwNzJlZjIwN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y184NmNkZGRkNzlkMDA0MTVhNmRiZDNiOTE1ZDI2ZjZjNjk3OWUyZDcyODRiMWY0MzJhY2M5NWQ1YWQ3NzUyZjNiQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&mode=WEEK&color=%23039be5&color=%23d50000&color=%237986cb&color=%237cb342&color=%23f6bf26&color=%23b39ddb"
              title="Google Calendar"
            />
          </div>
        </div>
        <div className="bubble">
          <h1>
            <u>Sports</u>
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
