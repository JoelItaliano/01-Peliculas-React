const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Zjc5Y2UyYjA4Mjg5NzhhZjkzNzliM2NiNWU2NzM3OSIsInN1YiI6IjY0MTBlNjI3YzM5MGM1MDA3OTZmOWFhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fqRQmxNhjoRFQixgeGY0OhttSnDhXcnYZR9a0EqSJBY",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
