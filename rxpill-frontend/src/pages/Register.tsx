import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { LoginCard } from "@/components/custom/LoginCard";
import FormInputText from "@/components/Forms/FormInputText";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth.services";
import { Spinner } from "@/components/ui/spinner";

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
  shopName: string;
}

export default function Register() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterFormInputs>();

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      await authService.register(data);
      console.log("Register Successful");
    } catch (err: any) {
      console.log("Error occurd", err.message);
    }
  };

  return (
    <>
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/20">
          <Spinner
            className="size-20 text-[#4f63ff]"
            aria-label="Loading"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
        </div>
      )}
      <div className="fixed inset-0 flex">
        <div className="relative flex-1">
          <div className="h-[1500px] -translate-y-8 -rotate-5 rounded-r-3xl bg-gradient-to-bl from-[#4f63ff] to-[#6a7cff]" />
          <div className="absolute inset-0 -translate-y-8 rotate-60 h-90 w-90 right-120 overflow-hidden rounded-r-3xl bg-[#6a7bff5d]" />
          <div className="absolute inset-0 -translate-y-100 rotate-105 h-140 w-90 right-20 overflow-hidden rounded-r-3xl bg-[#364cf3]" />
          <div className="absolute inset-0 translate-y-50 -rotate-60 h-220 w-110 right-60 overflow-hidden rounded-r-3xl bg-[#5fa2ff]" />
          <div className="absolute inset-0 translate-y-120 -rotate-20 h-100 w-100 right-110 overflow-hidden rounded-r-3xl bg-[#5997eff3]" />
          <LoginCard
            title="The Pulse of Your Pharmacy: Integrated Management from Script to Shelf"
            desc="Stop juggling multiple platforms. Our all-in-one solution unifies prescription processing, real-time inventory tracking, and insurance claims into a single, intuitive dashboard. Reduce manual errors, automate refills, and reclaim hours of your day."
            className="absolute inset-0 h-70 w-120 left-40 translate-y-25"
            footerimg="images\medicine.png"
          ></LoginCard>
          <LoginCard
            title="Medicine"
            desc="Medicine is the science and practice of caring for a patient, managing the diagnosis, prognosis, prevention, treatment, palliation of their injury or disease, and promoting their health."
            className="absolute inset-0 h-44 w-110 left-60 translate-y-110"
            headerimg="images\PlusImage.png"
          ></LoginCard>
        </div>

        <div className="flex-1 bg-white grid place-content-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="mt-6 text-center">
              Get started with <strong>RxPill</strong>
            </h1>
            <h2 className="mt-6 text-center">
              Your Perfect Partner to Manage your pharmacy
            </h2>
            <div className="w-full mt-10">
              <FormInputText
                id="name"
                control={control}
                label="Name"
                required
                rules={{ required: "Name is required" }}
                placeholder="Enter your name"
              />
              <FormInputText
                id="email"
                control={control}
                label="Email"
                required
                rules={{ required: "Email is required" }}
                placeholder="Enter your email"
              />

              <FormInputText
                id="password"
                control={control}
                label="Password"
                required
                type="password"
                rules={{ required: "Email is required" }}
                placeholder="Enter your password"
              />

              <FormInputText
                id="shopName"
                control={control}
                label="Shop name"
                required
                rules={{ required: "Shop name is required" }}
                placeholder="Enter your shop name"
              />
            </div>
            <div className="mt-10">
              <Button
                type="submit"
                className="w-full"
                size="lg"
                variant="primary"
              >
                Register
              </Button>
              <Button
                onClick={() => navigate("/login")}
                className="w-full mt-2"
                size="lg"
                variant="secondary"
              >
                Back to Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
