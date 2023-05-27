import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col text-blue-200 p-10">
      <label>First Name</label>
      <input {...register("firstName")} className="bg-blue-900 opacity-50" />

      <label>Last Name</label>
      <input {...register("lastName")} className="bg-blue-900 opacity-50"/>

      <label>Phone Number</label>
      <input {...register("phoneNumber")} className="bg-blue-900 opacity-50"/>

      <label>Email</label>
      <input {...register("email")} className="bg-blue-900 opacity-50"/>

      <label>Message (200 characters max)</label>
      <textarea
        className="bg-blue-900 opacity-50"
        {...register("message", { maxLength: 200 })}
        rows={4}
        cols={50}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

