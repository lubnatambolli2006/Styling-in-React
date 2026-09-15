const { useState } = React;

function App() {
    const [message, setMessage] = useState("Welcome to my React website!");

    const inlineStyle = {
        color: "#00bcd4",
        fontSize: "28px",
        marginBottom: "10px"
    };

    const cards = [
        {
            title: "Inline Styling",
            text: "This section demonstrates styling React elements using inline CSS."
        },
        {
            title: "CSS Styling",
            text: "This card is styled using an external CSS stylesheet."
        },
        {
            title: "Responsive Design",
            text: "The layout uses CSS Grid and media queries for different screen sizes."
        }
    ];

    return (
        <div>
            <nav>
                <h2>React Styling</h2>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#features">Features</a>
                </div>
            </nav>

            <section id="home" className="hero">
                <h1 style={inlineStyle}>Styling in React</h1>

                <p>{message}</p>

                <button onClick={() => setMessage("Button clicked successfully!")}>
                    Click Me
                </button>
            </section>

            <section id="about" className="section">
                <h2>About Styling</h2>
                <p>
                    React supports different styling techniques including
                    inline styles, external CSS, CSS-in-JS and responsive layouts.
                </p>
            </section>

            <section id="features" className="section">
                <h2>Styling Techniques</h2>

                <div className="cards">
                    {cards.map((card) => (
                        <div className="card" key={card.title}>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer>
                <p>© 2026 React Styling Project</p>
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
