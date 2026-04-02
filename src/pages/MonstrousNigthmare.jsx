import { Link } from "react-router-dom"

function MonstrousNigthmare() {
    return (
        <div className="app-container">
            <header>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 style={{ margin: 0 }}>Pesadelo Monstruoso</h1>
                    <Link to="/" className="link-button" style={{ marginBottom: 0 }}>← Voltar</Link>
                </div>
            </header>

            <main>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px', alignItems: 'start' }}>
                        <div className="fade-in">
                            <img 
                                src="/src/img/nigthmareMons.webp" 
                                alt="Pesadelo Monstruoso"
                                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 32px rgba(245, 158, 11, 0.2)' }}
                            />
                        </div>

                        <div className="fade-in" style={{ animationDelay: '0.1s' }}>
                            <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Sobre</h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '30px', color: '#cbd5e1' }}>
                                Um dragão de tamanho colossal com uma aparência assustadora. Apesar de sua aparência aterradora, pode ser treinado e controlado com determinação. É um dos dragões mais poderosos e respeitados.
                            </p>

                            <h3 style={{ fontSize: '20px', color: '#f59e0b', marginBottom: '15px' }}>Habilidades</h3>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                                <li style={{ padding: '10px', marginBottom: '8px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b', borderRadius: '4px' }}>💪 Força bruta descomunal</li>
                                <li style={{ padding: '10px', marginBottom: '8px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b', borderRadius: '4px' }}>🔥 Disparos de fogo potentes</li>
                                <li style={{ padding: '10px', marginBottom: '8px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b', borderRadius: '4px' }}>📏 Tamanho gigantesco</li>
                                <li style={{ padding: '10px', marginBottom: '8px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b', borderRadius: '4px' }}>🛡️ Resistência extrema</li>
                            </ul>

                            <h3 style={{ fontSize: '20px', color: '#f59e0b', marginBottom: '15px' }}>Personalidade</h3>
                            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1', fontStyle: 'italic' }}>
                                "Agressivo, dominante e territorial. Respeita força e determinação."
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

export default MonstrousNigthmare;
