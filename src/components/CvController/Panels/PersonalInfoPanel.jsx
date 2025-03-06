import Input from "./Input/Input";

export default function PersonalInfoPanel({ cvData }) {
  // TODO add social media account links
  return (
    <>
      <Input
        type="text"
        id="full-name"
        label="Full Name"
        value={cvData.fullName}
      />
      <Input type="email" id="email" label="Email" value={cvData.email} />
      <Input type="tel" id="phone" label="Phone Number" value={cvData.phone} />
      <Input type="text" id="address" label="Address" value={cvData.address} />
      <Input type="textarea" id="bio" label="Bio" value={cvData.bio} />
    </>
  );
}
