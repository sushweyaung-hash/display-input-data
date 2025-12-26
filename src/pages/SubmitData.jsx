import { useState } from "react";

export default function SubmitData() {
  const genderChoices = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" },
  ];

  const hobbyChoices = [
    { label: "Music", value: "music" },
    { label: "Movies", value: "movies" },
    { label: "Plastic Models", value: "plastic models" },
  ];

  const roleChoices = [
    { label: "General Staff", value: "general staff" },
    { label: "Developer", value: "developer" },
    { label: "System Analyst", value: "system analyst" },
  ];

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState(roleChoices[0].value);

  const [isSubmitted, setIsSubmitted] = useState(false);

  function onHobbiesToggle(event) {
    const v = event.target.value;
    const checked = event.target.checked;

    if (!checked) setHobbies((prev) => prev.filter((x) => x !== v));
    else setHobbies((prev) => [...prev, v]);
  }

  function onSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div>
        <h2>Submit Data</h2>

        <div>Username: <b>{username}</b></div>
        <div>Firstname: <b>{firstname}</b></div>
        <div>Lastname: <b>{lastname}</b></div>
        <div>Gender: <b>{gender}</b></div>
        <div>Hobbies: <b>{hobbies.join(", ")}</b></div>
        <div>Role: <b>{role}</b></div>

        <br />
        <button onClick={() => setIsSubmitted(false)}>Back to form</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Submit Data</h2>

      <form onSubmit={onSubmit} style={{ maxWidth: 280 }}>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
