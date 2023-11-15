export default function Registration(){
    return (
      <>
      <form method="post">
  <label htmlFor="username">Потребителско име:</label>
  <input type="text" id="username" name="username" required="" />
  <br />
  <br />
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" required="" />
  <br />
  <br />
  <label htmlFor="password">Парола:</label>
  <input type="password" id="password" name="password" required="" />
  <br />
  <br />
  <label htmlFor="confirm_password">Повторете паролата:</label>
  <input
    type="password"
    id="confirm_password"
    name="confirm_password"
    required=""
  />
  <br />
  <br />
  <input type="submit" defaultValue="Регистрация" />
  <p>
    Вече имаш регистрация? <a href="/register">Влез</a>
  </p>
</form>

      </>
        
    )
};