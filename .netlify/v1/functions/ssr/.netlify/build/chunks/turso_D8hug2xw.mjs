import { createClient } from '@libsql/client/web';

const turso = createClient({
  url: "libsql://dani-sofi-weding-danibeam.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDMyNzA3ODMsImlkIjoiY2RlMzE0MDAtZjFiOC00YTI0LTllOGUtMjQxZTU1N2NjMDJiIiwicmlkIjoiNjhhMDMzYTUtOGNkOS00ZjJmLWI2MDctMGNlZmYxZTU5YTI1In0.TW9kWprb4p3qpkvcMULRgJi-AlLvI1Cqo7qcj_-pwShwIvp2pn9WtHNLk-pq9KKynP0GeSQOgEwF1IJZk6nSCw"
});

export { turso as t };
