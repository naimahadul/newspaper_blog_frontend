import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="bg-gray-900 p-6 flex-1">
        <h2 className="text-3xl font-bold mb-4 text-gray-100">About Us</h2>
        <p className="text-lg text-gray-100 mb-4">
          Welcome to our blog! We are passionate about sharing knowledge and
          providing valuable insights to our readers. Our goal is to create a
          platform where you can find a wide range of topics and enjoy reading
          about various subjects.
        </p>
        <p className="text-lg text-gray-100 mb-4">
          We strive to offer well-researched, informative, and engaging content
          that caters to a diverse audience. Whether you are interested in
          technology, travel, lifestyle, or any other topic, you will find
          something that piques your interest here.
        </p>
        <p className="text-lg text-gray-100 mb-4">
          Feel free to explore our blog and discover the world through our eyes.
          If you have any questions or feedback, we would love to hear from you!
        </p>
        <Link
          to="/about"
          className="text-blue-500 hover:underline inline-block"
        >
          Learn more about us
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
