import { Link } from "react-router-dom"

function Stormcutter() {
    return (
        <div className="app-container">
            <header>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 style={{ margin: 0 }}>Pula Nuvens</h1>
                    <Link to="/" className="link-button" style={{ marginBottom: 0 }}>← Voltar</Link>
                </div>
            </header>

            <main>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px', alignItems: 'start' }}>
                        <div className="fade-in">
                            <img
                                src="/src/img/jumpClouds.jpg"
                                alt="Pula Nuvens"
                                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 32px rgba(245, 158, 11, 0.2)' }}
                            />
                        </div>

                        <div className="fade-in" style={{ animationDelay: '0.1s' }}>
                            <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Sobre</h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '30px', color: '#cbd5e1' }}>
                                Um dragão amigável e brincalhão que vive entre as nuvens. É conhecido por sua natureza pacífica e sua capacidade de voar em altitudes extremas. Adora explorar e fazer amigos.
                            </p>

                            <h3 style={{ fontSize: '20px', color: '#f59e0b', marginBottom: '15px' }}>Habilidades</h3>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                                <li style={{ padding: '10px', marginBottom: '8px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b', borderRadius: '4px' }}>☁️ Voo em alta altitude</li>
                                <li style={{ padding: '10px', marginBottom: '8px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b', borderRadius: '4px' }}>❄️ Disparos de gelo</li>
                                <li style={{ padding: '10px', marginBottom: '8px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b', borderRadius: '4px' }}>✨ Levitação</li>
                                <li style={{ padding: '10px', marginBottom: '8px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b', borderRadius: '4px' }}>👻 Invisibilidade em nuvens</li>
                            </ul>

                            <h3 style={{ fontSize: '20px', color: '#f59e0b', marginBottom: '15px' }}>Personalidade</h3>
                            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1', fontStyle: 'italic' }}>
                                "Amigável, brincalhão e aventureiro. Adora explorar e fazer amigos."
                            </p>

                            <Link to="/" className="btn" style={{ marginTop: '30px', width: '100%', textAlign: 'center' }}>Explorar Outros Dragões</Link>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className="container">
                    <p>© 2026 Como Treinar o Seu Dragão. Todos os dragões são lendários e únicos.</p>
                </div>
            </footer>
        </div>
    )
}

export default Stormcutter;
