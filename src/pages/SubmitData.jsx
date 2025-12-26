import { useRef, useState } from "react";

export default function SubmitData() {
  const genders = [
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

  // refs (matches hint)
  const hobbyRef = useRef([]);

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("male");
  const [role, setRole] = useState("general staff");

  // for submit result
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  function getSelectedHobbiesFromRefs() {
    return hobbyRef.current
      .filter((el) => el && el.checked)
      .map((el) => el.value);
  }

  function onSubmit() {
    const selectedHobbies = getSelectedHobbiesFromRefs();

    setSubmitted({
      username,
      firstname,
      lastname,
      gender,
      hobbies: selectedHobbies,
      role,
    });

    setIsSubmitted(true);
  }

  function backToForm() {
    setIsSubmitted(false);
  }

  return (
    <div style={{ padding: 24 }}>
      {!isSubmitted ? (
        <>
          <h2>Submit Data</h2>

          <div style={{ marginBottom: 10 }}>
            <div>Username</div>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div style={{ marginBottom: 10 }}>
            <div>Firstname</div>
            <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          </div>

          <div style={{ marginBottom: 10 }}>
            <div>Lastname</div>
            <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </div>

          <div style={{ marginBottom: 10 }}>
            <div style={{ fontWeight: "bold" }}>Gender</div>
            {genders.map((g) => (
              <label key={g.value} style={{ marginRight: 12 }}>
                <input
                  type="radio"
                  name="gender2"
                  value={g.value}
                  checked={gender === g.value}
                  onChange={(e) => setGender(e.target.value)}
                />
                {" "}{g.label}
              </label>
            ))}
          </div>

          <div style={{ marginBottom: 10 }}>
            <div style={{ fontWeight: "bold" }}>Hobbies</div>
            {hobbyOptions.map((item, index) => (
              <div key={item.value}>
                <label>
                  <input
                    type="checkbox"
                    value={item.value}
                    ref={(el) => (hobbyRef.current[index] = el)}
                  />
                  {" "}{item.label}
                </label>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 10 }}>
            <div style={{ fontWeight: "bold" }}>Role</div>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              {roleOptions.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          <button onClick={onSubmit}>Submit</button>
        </>
      ) : (
        <>
          <h2>Submit Data</h2>
          <div>Username: <b style={{ color: "brown" }}>{submitted?.username}</b></div>
          <div>Firstname: <b style={{ color: "brown" }}>{submitted?.firstname}</b></div>
          <div>Lastname: <b style={{ color: "brown" }}>{submitted?.lastname}</b></div>
          <div>Gender: <b style={{ color: "brown" }}>{submitted?.gender}</b></div>
          <div>
            Hoobies:{" "}
            <b style={{ color: "brown" }}>{submitted?.hobbies?.join(", ")}</b>
          </div>
          <div>Role: <b style={{ color: "brown" }}>{submitted?.role}</b></div>

          <br />
          <button onClick={backToForm}>Back to form</button>
        </>
      )}
    </div>
  );
}
