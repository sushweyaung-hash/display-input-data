import { useState } from "react";

export default function Register() {
  // choices must be arrays (as teacher said)
  const genderChoices = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" },
  ];

  const hobbyChoices = [
    { label: "Music", value: "music" },
    { label: "Movies", value: "movies" },
    { label: "Plastic Model", value: "plastic model" },
  ];

  const roleChoices = [
    { label: "General staff", value: "general staff" },
    { label: "Developer", value: "developer" },
    { label: "System Analyst", value: "system analyst" },
  ];

  // form states
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState(roleChoices[0].value);

  function onHobbiesToggle(event) {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    if (!isChecked) {
      setHobbies((prev) => prev.filter((item) => item !== targetValue));
    } else {
      setHobbies((prev) => [...prev, targetValue]);
    }
  }

  return (
    <div>
      <h2>Register</h2>

      <div style={{ maxWidth: 280 }}>
        <div style={{ marginBottom: 12 }}>
          <div>Username</div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <div>Firstname</div>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <div>Lastname</div>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <div style={{ fontWeight: "bold" }}>Gender</div>
          {genderChoices.map((item) => (
            <label key={item.value} style={{ marginRight: 10 }}>
              <input
                type="radio"
                name="gender"
                value={item.value}
                checked={gender === item.value}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              {item.label}
            </label>
          ))}
        </div>

        <div style={{ marginBottom: 12 }}>
          <div style={{ fontWeight: "bold" }}>Hobbies</div>
          {hobbyChoices.map((item) => (
            <div key={item.value}>
              <label>
                <input
                  type="checkbox"
                  value={item.value}
                  checked={hobbies.includes(item.value)}
                  onChange={onHobbiesToggle}
                />{" "}
                {item.label}
              </label>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 12 }}>
          <div style={{ fontWeight: "bold" }}>Role</div>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            {roleChoices.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display input data (live) */}
      <div style={{ marginTop: 20 }}>
        <div>Username: <b>{username}</b></div>
        <div>Firstname: <b>{firstname}</b></div>
        <div>Lastname: <b>{lastname}</b></div>
        <div>Gender: <b>{gender}</b></div>
        <div>Hobbies: <b>{hobbies.join(", ")}</b></div>
        <div>Role: <b>{role}</b></div>
      </div>
    </div>
  );
}
