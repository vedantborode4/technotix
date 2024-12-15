import { useState } from "react";
import { FiSend } from "react-icons/fi";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const services = [
    "Website Development",
    "Mobile Development",
    "UI/UX Design",
    "SEO ",
    "Maintenance and Support"
  ];

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    if (!formData.service) tempErrors.service = "Please select a service";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await axios.post(`${backendURL}/message/messageUs`, {
          fullName: formData.name,
          email: formData.email,
          contactNumber: formData.phone,
          message: formData.message,
          service: formData.service
        });
  
        // console.log(response.data); // This will show "message delivered" if successful
        // alert("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting the form:", error);
        alert("Failed to send your message. Please try again later.");
      }
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  return (
    <div className="overflow-x-hidden md:h-2/5 md:pt-8 md:pb-16 flex flex-col md:flex-row mx-auto p-4 pb-12 md:px-30 sm:px-20 lg:px-40">
      <div
        className="md:w-1/2 bg-cover bg-center mx-auto w-full rounded-t-md md:rounded-l-md md:rounded-r-none"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3")`
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center p-12 rounded-t-md md:rounded-l-md md:rounded-r-none">
          <div className="text-white">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="lg:text-lg">We'd love to hear from you. Send us a message!</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 bg-white p-8 md:p-12 rounded-b-md md:rounded-r-md md:rounded-l-none">
        <form onSubmit={handleSubmit} className="space-y-6 pt-4 md:py-8">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md h-10 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.name ? "border-red-500" : ""}`}
              placeholder="Your full name"
              aria-label="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.email ? "border-red-500" : ""}`}
              placeholder="your.email@example.com"
              aria-label="Your email address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.phone ? "border-red-500" : ""}`}
              placeholder="Your phone number"
              aria-label="Your phone number"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700"
            >
              Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md h-10 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.service ? "border-red-500" : ""}`}
              aria-label="Select a service"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600">{errors.service}</p>
            )}
          </div>

          <div className="md:pb-8">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.message ? "border-red-500" : ""}`}
              placeholder="Your message"
              aria-label="Your message"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center py-3 px-4  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 "
          >
            <FiSend className="mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
