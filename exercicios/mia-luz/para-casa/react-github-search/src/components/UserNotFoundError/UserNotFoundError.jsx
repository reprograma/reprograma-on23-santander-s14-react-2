import notFoundImg from '../../assets/notfound.png'

import './UserNotFoundError.css'

const UserNotFoundError = () => {
  return (
    <section className="not-found__container">
        <h1 className="not-found__title">Usuária Não Encontrada 😢</h1>
        <h3 className="not-found__subtitle">Pesquise Novamente</h3>
        <img className="not-found__img" src={ notFoundImg } alt="imagem not found"/>
    </section>
  )
}

export default UserNotFoundError