import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormType = {
fullName: string;
email: string;
phone: string;
message: string;
};

const schema = yup
.object({
    fullName: yup
    .string()
    .required("Please enter your full name")
    .min(5, "This field must have at least 5 characters")
    .max(20, "This field must have a maximum of 20 characters"),
    phone: yup
    .string()
    .required("Please enter your phone number")
    .min(10, "Your number must have at least 10 characters")
    .max(15, "Max 15 characters for your number"),
    email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter a valid email")
    .max(100, "Max 100 characters for your email"),
    message: yup
    .string()
    .required("Please enter your message")
    .min(5, "This message must have at least 5 characters")
    .max(200, "Max 200 characters for your message"),
})
.required();

export const Form = () => {
const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm<FormType>({
    resolver: yupResolver(schema),
});

const onSubmit = handleSubmit((data) => {
    fetch("https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/send-email", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    });

    alert("Email sent successfully, we will contact you soon...");
});

return (
    <section id="help" className="pb-20">
    <div className="text-box">
        <h3 className="text-center text-slate-900 text-3xl font-medium leading-5 mb-5">Contact Us</h3>
    </div>
    <div className="form-box flex justify-self-end flex-col items-center">
        <form className="flex-col justify-items-stretch items-center" onSubmit={onSubmit}>
        <div className="mb-3 w-full sm:w-1/2">
            <input
            className="input-style border rounded-md shadow-md p-2 w-full"
            type="text"
            {...register("fullName")}
            name="fullName"
            placeholder="Full name"
            />
            {errors.fullName?.message ? (
            <p className="error-message">{errors.fullName?.message}</p>
            ) : (
            <p className="h-3"></p>
            )}
        </div>

        <div className="mb-3 w-full sm:w-1/2">
            <input
            className="input-style border rounded-md shadow-md p-2 w-full"
            type="email"
            {...register("email")}
            name="email"
            placeholder="Email"
            />
            {errors.email?.message ? (
            <p className="error-message">{errors.email?.message}</p>
            ) : (
            <p className="h-3"></p>
            )}
        </div>

        <div className="mb-3 w-full sm:w-1/2">
            <input
            className="input-style border rounded-md shadow-md p-2 w-full"
            type="tel"
            {...register("phone")}
            name="phone"
            placeholder="Phone"
            />
            {errors.phone?.message ? (
            <p className="error-message">{errors.phone?.message}</p>
            ) : (
            <p className="h-3"></p>
            )}
        </div>

        <div className="mb-3 w-full sm:w-1/2">
            <textarea
            className="textarea-style border rounded-md shadow-md p-5 w-60"
            rows={8}
            cols={60}
            {...register("message")}
            name="message"
            placeholder="Write us!"
            ></textarea>
            {errors.message?.message ? (
            <p className="error-message">{errors.message?.message}</p>
            ) : (
            <p className="h-3"></p>
            )}
        </div>

        <div className="form-group flex justify-center">
            <button className="bg-[#F53838] border w-full sm:w-1/2 pt-3 pb-3 pl-10 pr-10 rounded-3xl text-white font-semibold text-sm">
            Submit
            </button>
        </div>
        </form>
    </div>
    </section>
);
};

export default Form;