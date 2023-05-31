import * as React from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

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

  const [messageSent, setMessageSent] = React.useState(false);

  const onSubmit = handleSubmit((data, e) => {
    if (e) {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      emailjs.sendForm('service_fezjhag', 'template_7qu5hyl', form, 'D_kbVnjAHNAS_VcWm')
        .then((result) => {
          console.log(result.text);
          setMessageSent(true);
        }, (error) => {
          console.log(error.text);
        });
    }
  });

  return (
    <div>
      {messageSent ? (
        <div>
          <h2 className="text-blue-200 opacity-50 text-3xl p-10">Message Sent!</h2>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col text-blue-200 p-10">
          <label>First Name</label>
          <input {...register("firstName")} className="bg-blue-900 opacity-50" />

          <label>Last Name</label>
          <input {...register("lastName")} className="bg-blue-900 opacity-50" />

          <label>Phone Number</label>
          <input {...register("phoneNumber")} className="bg-blue-900 opacity-50" />

          <label>Email</label>
          <input {...register("email")} className="bg-blue-900 opacity-50" />

          <label>Message (200 characters max)</label>
          <textarea
            className="bg-blue-900 opacity-50"
            {...register("message", { maxLength: 200 })}
            rows={4}
            cols={30}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}