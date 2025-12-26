import { useState } from "react";

export default function Register() {
  // options as arrays (requirement)
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

  // states
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("male");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("general staff");

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
    <div style={{ padding: 24 }}>
      <h2>Register</h2>

      <div style={{ marginBottom: 10 }}>
        <div>Username</div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <div>Firstname</div>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <div>Lastname</div>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>

      <div style={{ margin: "14px 0" }}>
        <div style={{ fontWeight: "bold" }}>Gender</div>
        {genderOptions.map((g) => (
          <label key={g.value} style={{ marginRight: 12 }}>
            <input
              type="radio"
              name="gender"
              value={g.value}
              checked={gender === g.value}
              onChange={(e) => setGender(e.target.value)}
            />
            {" "}{g.label}
          </label>
        ))}
      </div>

      <div style={{ margin: "14px 0" }}>
        <div style={{ fontWeight: "bold" }}>Hobbies</div>
        {hobbyOptions.map((h) => (
          <div key={h.value}>
            <label>
              <input
                type="checkbox"
                value={h.value}
                checked={hobbies.includes(h.value)}
                onChange={onHobbiesToggle}
              />
              {" "}{h.label}
            </label>
          </div>
        ))}
      </div>

      <div style={{ margin: "14px 0" }}>
        <div style={{ fontWeight: "bold" }}>Role</div>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          {roleOptions.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      {/* Display input data (lower part) */}
      <hr style={{ margin: "18px 0" }} />
      <div>
        <div>Username: <b style={{ color: "brown" }}>{username}</b></div>
        <div>Firstname: <b style={{ color: "brown" }}>{firstname}</b></div>
        <div>Lastname: <b style={{ color: "brown" }}>{lastname}</b></div>
        <div>Gender: <b style={{ color: "brown" }}>{gender}</b></div>
        <div>
          Hoobies: <b style={{ color: "brown" }}>{hobbies.join(", ")}</b>
        </div>
        <div>Role: <b style={{ color: "brown" }}>{role}</b></div>
      </div>
    </div>
  );
}
