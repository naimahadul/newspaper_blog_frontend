import "../signup/signup.css"
// eslint-disable-next-line react/prop-types
const Email = ({ value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="input-style"
        placeholder="name@company.com"
        value={value}
        onChange={onChange}
        required
        autoComplete="off"
      />
    </div>
  );
};

export default Email;
