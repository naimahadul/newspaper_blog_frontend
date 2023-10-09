import "../index.CSS"
// eslint-disable-next-line react/prop-types
const Username = ({ value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="username"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Username
      </label>
      <input
        type="text"
        name="username"
        id="username"
        className="input-style"
        placeholder="Your username"
        value={value}
        onChange={onChange}
        required
        autoComplete="off"
      />
    </div>
  );
};

export default Username;
