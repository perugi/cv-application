import Input from "./Input/Input";

export default function PersonalInfoPanel() {
  return (
    <div className="personal-info">
      <Input type="text" id="full-name" label="Full Name" />
      <Input type="email" id="email" label="Email" />
      <Input type="tel" id="phone" label="Phone Number" />
      <Input type="text" id="address" label="Address" />
    </div>
  );
}
