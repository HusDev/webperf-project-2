import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { differenceInDays } from "date-fns";
import validatePhoneNumber from "./utils";
import "react-datepicker/dist/react-datepicker.css";
import s from "./Form.module.css";

function daysUntilBirthday(date: Date) {
  const now = new Date();
  const birthday = new Date(date);
  const diff = differenceInDays(birthday, now);
  return diff;
}

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const birthday = watch("birthday");
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <section className={s.form}>
      <form onSubmit={onSubmit}>
        <h2>Sign up for the private beta</h2>
        <div>
          <label>Name</label>
          <input
            className={s.input}
            {...register("name", { required: true })}
          />
          {errors.name && <p className={s.error}>This field is required.</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            className={s.input}
            type="email"
            {...register("email", { required: true, pattern: /.+@.+\..+/ })}
          />
          {errors.email && (
            <p className={s.error}>
              This field is required and should be an email.
            </p>
          )}
        </div>
        <div>
          <label>Phone number</label>
          <input
            className={s.input}
            type="tel"
            {...register("phoneNumber", {
              required: true,
              validate: validatePhoneNumber,
            })}
          />
          {errors.phoneNumber && (
            <p className={s.error}>
              This field is required and should be a phone number.
            </p>
          )}
        </div>
        <div>
          <label>Birthday</label>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                className={s.input}
                {...field}
                selected={field.value}
              />
            )}
            name="birthday"
          />
          {errors.birthday && (
            <p className={s.error}>
              This field is required and should be a valid date.
            </p>
          )}
          {birthday && (
            <p>Your birthday is in {daysUntilBirthday(birthday)} days. Nice!</p>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};
export default Form;
