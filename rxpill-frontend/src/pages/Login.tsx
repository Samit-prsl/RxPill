import FormInputText from "../components/Forms/FormInputText";
import { LoginCard } from "../components/custom/LoginCard";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Separator } from "@radix-ui/react-separator";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();

  const {
    control,
    //handleSubmit,
    //formState: { isSubmitting },
  } = useForm<LoginFormInputs>();

  return (
    <div className="fixed inset-0 flex">
      <div className="flex-1 bg-white grid place-content-center">
        <h1 className="mt-6 text-center">
          Welcome to <strong>RxPill</strong>
        </h1>
        <h2 className="mt-6 text-center">
          Your Perfect Partner to Manage your pharmacy
        </h2>
        <div className="w-100 mt-10">
          <FormInputText
            id="email"
            control={control}
            label="Email"
            required
            rules={{ required: "Email is required" }}
            placeholder="Email"
          />

          <FormInputText
            id="password"
            control={control}
            label="Password"
            required
            rules={{ required: "Email is required" }}
            placeholder="Password"
          />
        </div>
        <div className="mt-10">
          <Button className="w-full" size="lg" variant="primary">
            Login
          </Button>
          <Separator />
          <Button
            onClick={() => navigate("/register")}
            className="w-full mt-2"
            size="lg"
            variant="secondary"
          >
            Register
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <div className="h-[1500px] -translate-y-8 overflow-hidden rotate-5 rounded-l-3xl bg-gradient-to-br from-[#4f63ff] to-[#6a7cff]"></div>
        <div className="absolute inset-0 -translate-y-8 -rotate-60 h-90 w-90 left-120 overflow-hidden rounded-l-3xl bg-[#6a7bff5d]"></div>
        <div className="absolute inset-0 -translate-y-100 -rotate-105 h-140 w-90 left-20 overflow-hidden rounded-l-3xl bg-[#364cf3]"></div>
        <div className="absolute inset-0 translate-y-50 rotate-60 h-220 w-110 left-60 overflow-hidden rounded-l-3xl bg-[#5fa2ff]"></div>
        <div className="absolute inset-0 translate-y-120 rotate-20 h-100 w-100 left-110 overflow-hidden rounded-l-3xl bg-[#5997eff3]"></div>
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
    </div>
  );
}
