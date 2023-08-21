import { useEffect, useState } from "react"

const backendDomain = 'http://127.0.0.1:8000';

export const useCsrfToken = () => {
  const [csrfToken, setCsrfToken] = useState(null);
  useEffect(() => {
    fetch(`${backendDomain}/api/csrf`, {
      method: 'GET',
      credentials: 'same-origin',
    })
    .then(res => res.json())
    .then(data => {
      setCsrfToken(data.csrf_token);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);
  return csrfToken;
}
