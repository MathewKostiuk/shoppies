import Nomination from './Nomination';

export default function NominationsList(props) {
  const { nominations, setNominations } = props;

  const list = nominations.map((nomination, index) => {
    return <Nomination
      nomination={nomination}
      setNominations={setNominations}
      key={index}
    />
  })

  return (
    <ul>
      {list}
    </ul>
  )
}
