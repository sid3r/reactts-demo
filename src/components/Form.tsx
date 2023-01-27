import React, { useState } from "react";
import { Post } from "../types";

// form default value
const defaultData: Post = {
  title: "",
  body: "",
};

const hello: string = "";

function FormComponent() {
  const [formData, setFormData] = useState<Post>(defaultData);

  // update form data on change
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // do something on submit
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className="flex space-x-5">
      <div className="w-1/2 bg-gray-100 p-5">
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={onChange}
              className="w-full border px-4 py-2"
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              value={formData.body}
              onChange={onChange}
              rows={4}
              className="w-full border px-4 py-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-200 hover:bg-blue-300 rounded shadow duration-150 px-4 py-2"
          >
            Save
          </button>
        </form>
      </div>
      <div className="w-1/2 p-2">
        {formData && (
          <div>
            <h1 className="text-3xl text-gray-700">{formData.title}</h1>
            <p className="text-gray-500">{formData.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormComponent;
