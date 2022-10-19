export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "2" }}>
      <h1> Welcome! </h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="http://localhost:3000/user_login/userlogin"
            rel="noreferrer"
          >
            Make an account
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="http://localhost:3000/user_login/"
            rel="noreferrer"
          >
            Login with a registered account
          </a>
        </li>
      </ul>
    </div>
  );
}
