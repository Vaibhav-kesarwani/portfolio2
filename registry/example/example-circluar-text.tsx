import CircularText from "../components/circluar-text/circluar-text";

export default function ExampleCircluarText() {
  return (
    <CircularText
      text="REACT*BITS*COMPONENTS*"
      onHover="speedUp"
      spinDuration={20}
      className="custom-class"
    />
  );
}
