export default (req, res) => {
  console.log(req.headers);

  res.statusCode = 200
  res.json({ name: process.env.API_KEY })
}
