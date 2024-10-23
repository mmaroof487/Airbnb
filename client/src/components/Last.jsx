import { Globe, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Last() {
	return (
		<>
			<div className="flex justify-between text-sm">
				<div className="flex justify-evenly mx-16">
					<span>© 2024 Airbnb Inc. ·</span>
					<span className="mx-3">
						<a href="" className="hover:underline">
							Privacy
						</a>
					</span>
					·
					<span className="mx-3">
						<a href="" className="hover:underline">
							Terms
						</a>
					</span>
					·
					<span className="mx-3">
						<a href="" className="hover:underline">
							Sitemap
						</a>
					</span>
					·
					<span className="mx-3">
						<a href="" className="hover:underline">
							Company details
						</a>
					</span>
				</div>

				<div className="flex justify-between font-semibold mx-16 items-center">
					<span className="mx-2 flex flex-row gap-1 items-center">
						<Globe />
						<a href="" className="hover:underline">
							English(IN)
						</a>
					</span>
					<span className="mx-2">
						<a href="" className="hover:underline">
							₹ INR
						</a>
					</span>
					<span className="mx-2">
						<a href="https://www.linkedin.com/in/mohammad-maroof-80aa7024a/" target="_blank">
							<Linkedin />
						</a>
					</span>
					<span className="mx-2">
						<a href="https://x.com/MMaroof487" target="_blank">
							<Twitter />
						</a>
					</span>
					<span className="mx-2">
						<a href="https://www.instagram.com/muhammad_maroof1/" target="_blank">
							<Instagram />
						</a>
					</span>
					<span>
						<a href=""></a>
					</span>
				</div>
			</div>
		</>
	);
}
