import "../signup/signup.css";
// eslint-disable-next-line react/prop-types
const Password = ({ value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        className="input-style-signup"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Password;
