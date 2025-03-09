import Input from "./Input/Input";

export default function PersonalInfoPanel({ personalInfo, setCvData }) {
  function handleChange(event) {
    const { id, value } = event.target;
    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [id]: value,
      },
    }));
  }

  // TODO add social media account links
  return (
    <>
      <Input
        type="text"
        id="fullName"
        label="Full Name"
        value={personalInfo.fullName}
        setCvData={setCvData}
        onChange={handleChange}
      />
      <Input
        type="email"
        id="email"
        label="Email"
        value={personalInfo.email}
        setCvData={setCvData}
      />
      <Input
        type="tel"
        id="phone"
        label="Phone Number"
        value={personalInfo.phone}
        setCvData={setCvData}
      />
      <Input
        type="text"
        id="address"
        label="Address"
        value={personalInfo.address}
        setCvData={setCvData}
      />
      <Input
        type="textarea"
        id="bio"
        label="Bio"
        value={personalInfo.bio}
        setCvData={setCvData}
      />
    </>
  );
}
