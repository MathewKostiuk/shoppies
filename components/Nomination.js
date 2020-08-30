export default function Nomination(props) {
  const { nomination, setNominations } = props;

  const handleClick = () => {
    setNominations(nominations => {
      return nominations.filter(item => item.imdbID !== nomination.imdbID);
    })
  }

  return (
    <li>
      <span>
        {nomination.Title} ({nomination.Year})
      </span>
      <button type='button' onClick={handleClick}>
        Remove
      </button>
    </li>
  )
}
