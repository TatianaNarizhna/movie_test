import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <h2>
      Ooops! 404 Go <Link href="/">home</Link>
    </h2>
  );
}

export default ErrorPage;
