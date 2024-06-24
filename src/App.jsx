import './App.css'
import { FollowCard } from './FollowCard.jsx'

export function App () {
    
    const users = [
        {
            userName: "lauraKamP", 
            name: "Laura Camila Perez",
            isFollowing: false  
        },
        {
            userName: "andreaB", 
            name: "Andrea Betancur",
            isFollowing: false 
        },
        {
            userName: "elonMusk", 
            name: "Elon Musk",
            isFollowing: false
        },
        {
            userName: "kikobeats", 
            name: "Kiko Benito Torres",
            isFollowing: false
        }
    ]

    return (
        <section className='app-section'>
            {
                users.map(({userName, name, isFollowing}) => (
                        <FollowCard
                            key={userName}
                            userName={userName}
                            name={name}
                            initialIsFollowing={isFollowing}/> 
                    )
                )
            }
        </section>
    )
}
