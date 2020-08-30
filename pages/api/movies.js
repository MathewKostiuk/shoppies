
export default async (req, res) => {
  const title = req.query.title;
  const OMDbEndPoint = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${title}&type=movie`
  const response = await fetch(OMDbEndPoint);
  const data = await response.json();
  res.statusCode = 200
  res.json(data);
}
