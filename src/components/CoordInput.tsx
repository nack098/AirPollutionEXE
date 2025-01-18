interface CoordProps {
  coord: string;
  pos: number;
  onChange: { (e: React.ChangeEvent<HTMLInputElement>): void };
}

function CoordInput(props: CoordProps) {
  return (
    <div>
      <h3>Input {props.coord}:</h3>
      <input
        type="number"
        value={props.pos}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
}

export default CoordInput;
