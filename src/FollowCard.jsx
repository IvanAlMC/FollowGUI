import { useState } from "react"

export function FollowCard ( { userName, name, initialIsFollowing} ) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const textFollow = isFollowing ? 'Siguiendo' : 'Seguir +'
    const buttonClassName = isFollowing ? 'article-button-follow-card is-following' : 'article-button-follow-card'
    const imageSrc = `https://unavatar.io/${userName}`

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='article-follow-card'>
        <header className='article-header-follow-card'>
            <img className='article-img-follow-card' 
            alt="avatar" src={imageSrc}></img>
            <div className='article-div-header-follow-card'>
                <strong>{name}</strong>
                <span className='article-span-header-follow-card'>
                    @{userName}
                </span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="article-button-follow-yet">{textFollow}</span>
                <span className="article-button-unfollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}