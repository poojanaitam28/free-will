import { Box, Card } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineQuestion } from "react-icons/ai";
import HelpDialog from "./HelpDialog";

function GettingStarted() {
  const [isNameDialogOpen, setIsNameDialogOpen] = useState(false);
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    preferredName: "",
    email: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [id]: !value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      firstName: !formData.firstName.trim(),
      lastName: !formData.lastName.trim(),
      email: !formData.email.trim(),
    };

    setErrors(newErrors);

    if (!newErrors.firstName && !newErrors.lastName && !newErrors.email) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-24 font-semibold">Getting Started</h2>

      {errors.firstName && errors.lastName && errors.email && (
        <div className="my-4 py-2 px-4 bg-warning-bg border border-l-4 border-l-warning text-warning font-light-bold">
          Please check that all required fields are filled out correctly. You
          may need to scroll down.
        </div>
      )}

      <p className="mt-6">Fields marked with * are required.</p>

      <form onSubmit={handleSubmit}>
        <Card className="p-4 md:p-8 mt-4">
          <Box className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-start md:items-center">
            <Box className="w-full md:w-auto flex flex-col gap-2">
              <label htmlFor="firstName">
                First Name<sup>*</sup>
              </label>
              {errors.firstName && (
                <div className="py-2 px-4 bg-warning-bg border border-l-4 border-l-warning text-warning font-light-bold">
                  Please enter your legal first name
                </div>
              )}
              <input
                id="firstName"
                className="input-base"
                type="text"
                autoFocus
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Box>

            <Box className="w-full md:w-auto flex flex-col gap-2">
              <label htmlFor="middleName">Middle Name</label>
              {errors.firstName && errors.lastName && (
                <div className="hidden md:block h-[42px]"></div>
              )}
              <input
                id="middleName"
                className="input-base"
                type="text"
                value={formData.middleName}
                onChange={handleInputChange}
              />
            </Box>

            <Box className="w-full md:w-auto flex flex-col gap-2">
              <Box className="flex justify-between items-center">
                <label htmlFor="lastName">
                  Last Name<sup>*</sup>
                </label>
                <button
                  type="button"
                  className="flex justify-center text-gray-600 items-center p-1 cursor-pointer border border-gray-400 rounded-full hover:bg-info-bg hover:text-white"
                  onClick={() => setIsNameDialogOpen(true)}
                >
                  <AiOutlineQuestion />
                </button>
              </Box>
              {errors.lastName && (
                <div className="py-2 px-4 bg-warning-bg border border-l-4 border-l-warning text-warning font-light-bold">
                  Please enter your legal last name
                </div>
              )}
              <input
                id="lastName"
                className="input-base"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Box>
          </Box>

          <Box mt={2}>
            <Box className="flex flex-col gap-2">
              <label htmlFor="preferredName">Preferred Name</label>
              <input
                id="preferredName"
                className="input-base"
                type="text"
                value={formData.preferredName}
                onChange={handleInputChange}
              />
            </Box>
          </Box>

          <Box mt={2}>
            <Box className="flex flex-col gap-2">
              <Box className="flex justify-between items-center">
                <label htmlFor="email">
                  Email<sup>*</sup>
                </label>
                <button
                  type="button"
                  className="flex justify-center text-gray-600 items-center p-1 cursor-pointer border border-gray-400 rounded-full hover:bg-info-bg hover:text-white"
                  onClick={() => setIsEmailDialogOpen(true)}
                >
                  <AiOutlineQuestion />
                </button>
              </Box>
              {errors.email && (
                <div className="py-2 px-4 bg-warning-bg border border-l-4 border-l-warning text-warning font-light-bold">
                  Please enter a valid email address
                </div>
              )}
              <input
                id="email"
                className="input-base"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Box>
          </Box>
        </Card>

        <Box mt={2}>
          <label
            htmlFor="terms"
            className="cursor-pointer flex flex-col md:flex-row items-start gap-2 md:gap-4"
          >
            <input
              type="checkbox"
              className="input-base w-6 h-6 flex-shrink-0"
              id="terms"
              checked={formData.terms}
              onChange={handleInputChange}
            />
            <span className="text-gray-800">
              By checking this box, I confirm that I am at least 18 years of
              age, and that I have read and agree to FreeWill’s{" "}
              <a
                href="/"
                target="_blank"
                className="underline text-blue-500 hover:text-custom-pink"
              >
                Terms of Service
              </a>{" "}
              &{" "}
              <a
                href="/"
                target="_blank"
                className="underline text-blue-500 hover:text-custom-pink"
              >
                Privacy Notice
              </a>
            </span>
          </label>
        </Box>

        <Box mt={4} className="flex justify-end">
          <button
            type="submit"
            className="bg-btn-bg text-white px-6 py-2 rounded hover:bg-[#3B5B72]"
          >
            Save & Continue
          </button>
        </Box>
      </form>

      {isNameDialogOpen && (
        <HelpDialog
          openDialog={isNameDialogOpen}
          closeDialog={() => setIsNameDialogOpen(false)}
          data={{
            title: "Full legal name",
            description:
              "Use the name that appears on your tax returns and other official documents.",
          }}
        />
      )}

      {isEmailDialogOpen && (
        <HelpDialog
          openDialog={isEmailDialogOpen}
          closeDialog={() => setIsEmailDialogOpen(false)}
          data={{
            title: "Full legal name",
            description:
              "Your email address is a unique identifier for your documents so that you can come back to continue your progress at any time. Additionally, we will give you the option to send your documents to this email address so you have them for safekeeping.",
          }}
        />
      )}
    </div>
  );
}

export default GettingStarted;
