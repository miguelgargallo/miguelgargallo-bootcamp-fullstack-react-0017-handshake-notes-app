export const Note = ({
  hash = [],
  witnessHash = [],
  fee = [],
  rate = [],
  mtime = [],
  height = [],
  block = [],
  time = [],
  index = [],
  version = []
}) => {
  return (
    <ol>
      <div>
        <h2>hash</h2>
        <p>{hash}</p>
        <h4>witnessHash</h4>
        <p>{witnessHash}</p>
        <h4>fee</h4>
        <p>{fee}</p>
        <h4>rate</h4>
        <p>{rate}</p>
        <h4>mtime</h4>
        <p>{mtime}</p>
        <h4>height</h4>
        <p>{height}</p>
        <h4>block</h4>
        <p>{block}</p>
        <h4>time</h4>
        <p>{time}</p>
        <h4>index</h4>
        <p>{index}</p>
        <h4>version</h4>
        <p>{version}</p>
      </div>
    </ol>
  );
};
