import './NoReposError.css'

const NoReposError = ({ userData }) => {
  return (
    <section className="no-repos__container">
        <h2 className="no-repos__title">{ userData ? userData.login : 'Usuário' } não tem repositórios públicos ainda</h2>
    </section>
  )
}

export default NoReposError