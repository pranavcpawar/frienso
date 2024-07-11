import { RegisterForm } from "@/components/form";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
	return (
		<main className="flex flex-col max-w-fit items-start p-4">
			<title>Register • Pictogram</title>
			<div className="max-w-[420px] flex flex-col items-center border border-[#303030] rounded-[16px] w-full h-full gap-2 p-4">
				<div className="mt-[36px]">
					<Image
						src="/pictogram.svg"
						alt="pictogram logo"
						className="h-auto w-[240px]"
						width={120}
						height={0}
						priority
					/>
				</div>
				<div className="text-[#eaeaea] flex flex-col w-full h-full gap-6 mb-[12px] mt-[32px]">
					<RegisterForm />
				</div>
				<div className="flex flex-col gap-4 border-2 border-[#202020] rounded-[12px] w-full items-center justify-center p-4">
					<h3 className="text-sm font-medium text-[#eaeaea]">
						Already have an account?{" "}
						<Link className="text-[#CA2C92] underline-offset-2" href="/login">
							Log in
						</Link>
					</h3>
				</div>
			</div>
		</main>
	);
}
