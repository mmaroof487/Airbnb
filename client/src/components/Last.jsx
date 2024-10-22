import { Globe, Facebook, Twitter, Instagram } from "lucide-react";

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

				<div className="flex justify-between font-semibold mx-16">
					<span className="mx-2">
						<Globe />
					</span>
					<span className="mx-2">
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
						<a href="">
							<Facebook />
						</a>
					</span>
					<span className="mx-2">
						<a href="">
							<Twitter />
						</a>
					</span>
					<span className="mx-2">
						<a href="">
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
