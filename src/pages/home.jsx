import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function Home() {
    const [favoritos, setFavoritos] = useState([])

    const dragons = [
        {
            id: 1,
            name: "Fúria da Noite",
            path: "/Furia-da-Noite",
            image: "/src/img/furiaNoite.png",
            descricao: "O dragão mais raro e poderoso. Inteligente, leal e forma um vínculo especial com seu treinador."
        },
        {
            id: 2,
            name: "Pesadelo Monstruoso",
            path: "/Pesadelo-Monstruoso",
            image: "/src/img/nigthmareMons.webp",
            descricao: "Um dragão de tamanho colossal com aparência assustadora. Extremamente poderoso e territorial."
        },
        {
            id: 3,
            name: "Nadder Mortal",
            path: "/Nadder-Mortal",
            image: "/src/img/nadderMortal.jpeg",
            descricao: "Dragão ágil e venenoso com espinhos afiados. Rápido, preciso e extremamente perigoso."
        },
        {
            id: 4,
            name: "Estridente",
            path: "/Estridente",
            image: "/src/img/estridente.webp",
            descricao: "Dragão elétrico com capacidade de gerar eletricidade. Extremamente rápido e impulsivo."
        },
        {
            id: 5,
            name: "Pula Nuvens",
            path: "/Pula-Nuvens",
            image: "/src/img/jumpClouds.jpg",
            descricao: "Dragão amigável e brincalhão que vive entre as nuvens. Natureza pacífica e aventureira."
        }
    ]

    useEffect(() => {
        const favoritosSalvos = localStorage.getItem('favoritos')
        if (favoritosSalvos) {
            setFavoritos(JSON.parse(favoritosSalvos))
        }
    }, [])

    const adicionarFavorito = (dragon) => {
        if (!favoritos.find(f => f.id === dragon.id)) {
            const novosFavoritos = [...favoritos, dragon]
            setFavoritos(novosFavoritos)
            localStorage.setItem('favoritos', JSON.stringify(novosFavoritos))
        }
    }

    const removerFavorito = (id) => {
        const novaLista = favoritos.filter(f => f.id !== id)
        setFavoritos(novaLista)
        localStorage.setItem('favoritos', JSON.stringify(novaLista))
    }

    const isFavoritado = (id) => {
        return favoritos.some(f => f.id === id)
    }

    const toggleFavorito = (dragon) => {
        if (isFavoritado(dragon.id)) {
            removerFavorito(dragon.id)
        } else {
            adicionarFavorito(dragon)
        }
    }

    return (
        <div className="app-container">
            <header>
                <div className="container">
                    <h1>🐉 Como Treinar o Seu Dragão</h1>
                </div>
            </header>

            <main>
                <div className="container">
                    <section style={{ textAlign: 'center', marginTop: '40px', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
                            Bem-vindo ao Catálogo de Dragões Lendários
                        </h2>
                        <p style={{ fontSize: '18px', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto' }}>
                            Descubra os dragões mais poderosos e fascinantes. Clique em qualquer dragão para aprender mais sobre suas habilidades e características únicas. Use o ícone de coração para adicionar aos favoritos!
                        </p>
                    </section>
                    <div>
                        {dragons.map((dragon, index) => (
                            <div key={dragon.id}>
                                <Link to={dragon.path} style={{ textDecoration: 'none' }}>
                                    <div style={{ animationDelay: `${index * 0.1}s` }}>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                toggleFavorito(dragon)
                                            }}
                                            title={isFavoritado(dragon.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                                        >
                                            {isFavoritado(dragon.id) ? "❤️Favorito" : "🔍Add Favorito"}
                                        </button>

                                        <img 
                                            src={dragon.image} 
                                            alt={dragon.name}
                                        />
                                        <h3>{dragon.name}</h3>
                                        <p>{dragon.descricao}</p>
                                        <button className="btn" style={{ width: '100%' }}>
                                            Conhecer Mais →
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {favoritos.length > 0 && (
                        <section style={{ marginTop: '80px', marginBottom: '40px' }}>
                            <h2 style={{ fontSize: '32px', marginBottom: '30px', textAlign: 'center' }}>Meus Favoritos</h2>
                            <div>
                                {favoritos.map((dragon, index) => (
                                    <div key={dragon.id}>
                                        <Link to={dragon.path} style={{ textDecoration: 'none' }}>
                                            <div style={{ animationDelay: `${index * 0.1}s` }}>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        removerFavorito(dragon.id)
                                                    }}
                                                    title="Remover dos favoritos"
                                                >Remover dos Favs
                                                </button>

                                                <img 
                                                    src={dragon.image} 
                                                    alt={dragon.name}
                                                />
                                                <h3>{dragon.name}</h3>
                                                <p>{dragon.descricao}</p>
                                                <button className="btn" style={{ width: '100%' }}>
                                                    Conhecer Mais →
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>

            <footer>
                <div className="container">
                    <p>2026 Como Treinar o Seu Dragão. Todos os dragões são lendários e únicos.</p>
                </div>
            </footer>
        </div>
    )
}
export default Home;
