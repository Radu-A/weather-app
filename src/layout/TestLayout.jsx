import Sun from "../shapes/Sun";
import Cloud from "../shapes/Cloud";
import Rain from "../shapes/Rain";
import Snow from "../shapes/Snow";
import Moon from "../shapes/Moon";

export default function TestLayout() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Sun></Sun>
      <Cloud></Cloud>
      <Rain></Rain>
      <Snow></Snow>
      <Moon></Moon>
    </div>
  );
}
