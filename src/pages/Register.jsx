import { useState } from "react";

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Others", value: "others" },
];

const hobbyOptions = [
  { label: "Music", value: "music" },
  { label: "Movies", value: "movies" },
  { label: "Plastic Model", value: "plastic model" },
];

const roleOptions = [
  { label: "General staff", value: "general staff" },
  { label: "Developer", value: "developer" },
  { label: "System Analyst", value: "system analyst" },
];

export default function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState(roleOptions[0].value);

  function onHobbiesToggle(event) {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setHobbies((prev) => [...prev, value]);
    } else {
      setHobbies((prev) => prev.filter((h) => h !== value));
    }
  }

  return (
    <div style={{ padding: 24, maxWidth: 400 }}>
      <h2>Submit Data</h2>

      <div>
        <label>Username</label><br />
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div>
        <label>Firstname</label><br />
        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      </div>

      <div>
        <label>Lastname</label><br />
        <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
      </div>

      <div>
        <strong>Gender</strong><br />
        {genderOptions.map((g) => (
          <label key={g.value} style={{ marginRight: 10 }}>
            <input
              type="radio"
              name="gender"
              value={g.value}
              onChange={(e) => setGender(e.target.value)}
            />
            {g.label}
          </label>
        ))}
      </div>

      <div>
        <strong>Hobbies</strong><br />
        {hobbyOptions.map((h) => (
          <div key={h.value}>
            <label>
              <input
                type="checkbox"
                value={h.value}
                onChange={onHobbiesToggle}
              />
              {h.label}
            </label>
          </div>
        ))}
      </div>

      <div>
        <strong>Role</strong><br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          {roleOptions.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </div>

      <hr />

      {/* LIVE DISPLAY */}
      <div>
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
