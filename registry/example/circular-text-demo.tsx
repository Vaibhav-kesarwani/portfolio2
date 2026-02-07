import CircularText from "../components/circular-text/circular-text";

export default function CircularTextDemo() {
  return (
    <CircularText
      text="VAIBHAV*LABS*COMPONENTS*"
      onHover="speedUp"
      spinDuration={20}
      className="custom-class"
    />
  );
}
