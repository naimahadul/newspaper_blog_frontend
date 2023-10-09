import "../signup/signup.css";
// eslint-disable-next-line react/prop-types
const ConfirmPassword = ({ value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="confirm-password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Confirm Password
      </label>
      <input
        type="password"
        name="confirm-password"
        id="confirm-password"
        placeholder="••••••••"
        className="input-style"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default ConfirmPassword;
