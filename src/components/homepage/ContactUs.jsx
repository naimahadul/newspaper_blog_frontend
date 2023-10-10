import Header from "./Header";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto p-6 flex-1">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">
          If you have any inquiries or would like to get in touch with us, please
          feel free to reach out. We are here to assist you and provide any
          information you need.
        </p>
        <p className="text-lg mb-4">
          You can contact us via email at{" "}
          <a
            href="mailto:info@example.com"
            className="text-blue-500 hover:underline"
          >
            info@example.com
          </a>
          .
        </p>
        <p className="text-lg mb-4">
          Alternatively, you can give us a call at{" "}
          <a href="tel:+123456789" className="text-blue-500 hover:underline">
            +123456789
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
