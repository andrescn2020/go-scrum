import './App.css'

export const App = () => {
  return (
    <div className="container">
      <form>
        <h1>Iniciar sesión</h1>
        <div>
          <label>Email</label>
          <input type="email" name='email'/>
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" name='password' />
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

