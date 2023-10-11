import React, { ChangeEvent } from 'react';

interface InputFormProps {
  userInput: {
    type: string;
    size: number;
    location: string;
  };
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFormProps> = ({ userInput, handleInputChange }) => {
  return (
    <div className="flex items-center justify-center my-12 text-start">
      <div className="my-4 flex flex-col">
        <label className="my-2 ">Space Type</label>
        <input
          type="text"
          name="type"
          placeholder="Space Type"
          className="border p-2 mr-2 outline-orange-500 rounded-lg"
          value={userInput.type}
          onChange={handleInputChange}
        />
      </div>

      <div className="my-4 flex flex-col">
        <label className="my-2 ">Space Size</label>
        <input
          type="number"
          name="size"
          placeholder="Space Size (sq ft)"
          className="border p-2 mr-2 outline-orange-500 rounded-lg"
          value={userInput.size}
          onChange={handleInputChange}
        />
      </div>

      <div className="my-4 flex flex-col">
        <label className="my-2 ">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="border p-2 mr-2 outline-orange-500 rounded-lg"
          value={userInput.location}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default InputForm;