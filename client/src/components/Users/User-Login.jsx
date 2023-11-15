export default function Login(){
    return(
<>
  <form action="/login" method="post">
    <label htmlFor="username">Потребителско име:</label>
    <input type="text" id="username" name="username" required="" />
    <br />
    <br />
    <label htmlFor="password">Парола:</label>
    <input type="password" id="password" name="password" required="" />
    <br />
    <br />
    <input type="submit" defaultValue="Вход" />
  </form>
  <p>
    Все още нямаш регистрация? <a href="/register">Направи я сега</a>
  </p>
</>

    )
};